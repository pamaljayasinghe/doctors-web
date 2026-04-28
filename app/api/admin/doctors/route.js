import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { addDoctor, getDoctors, slugify } from '@/lib/doctors';
import { getSession } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads');
const MAX_IMAGE_BYTES = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);
const EXT_BY_TYPE = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
  'image/gif': '.gif',
};

function unauthorized() {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}

function splitList(value) {
  if (!value) return [];
  return String(value)
    .split(/[\n,]/)
    .map((s) => s.trim())
    .filter(Boolean);
}

async function saveUpload(file, slug) {
  if (!file || typeof file === 'string' || !file.size) return '';
  if (file.size > MAX_IMAGE_BYTES) {
    throw new Error('Image is larger than 5MB.');
  }
  if (!ALLOWED_TYPES.has(file.type)) {
    throw new Error('Image must be JPEG, PNG, WebP or GIF.');
  }
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
  const ext = EXT_BY_TYPE[file.type] || '.bin';
  const stamp = Date.now().toString(36);
  const rand = crypto.randomBytes(3).toString('hex');
  const safe = slugify(slug) || 'doctor';
  const filename = `${safe}-${stamp}-${rand}${ext}`;
  const dest = path.join(UPLOAD_DIR, filename);
  const buf = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return `/uploads/${filename}`;
}

export async function GET() {
  if (!getSession()) return unauthorized();
  return NextResponse.json({ doctors: getDoctors() });
}

export async function POST(req) {
  if (!getSession()) return unauthorized();

  const ctype = req.headers.get('content-type') || '';
  let payload;
  let imageFile = null;

  if (ctype.includes('multipart/form-data')) {
    const form = await req.formData();
    payload = {
      name: form.get('name'),
      role: form.get('role'),
      credentials: form.get('credentials'),
      gender: form.get('gender'),
      bio: form.get('bio'),
      languages: splitList(form.get('languages')),
      specialInterests: splitList(form.get('specialInterests')),
      education: splitList(form.get('education')),
      image: form.get('imageUrl') || '',
    };
    imageFile = form.get('image');
  } else {
    try {
      payload = await req.json();
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }
  }

  if (!payload?.name || !String(payload.name).trim()) {
    return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
  }

  let imagePath = payload.image || '';
  try {
    const uploaded = await saveUpload(imageFile, payload.name);
    if (uploaded) imagePath = uploaded;
  } catch (err) {
    return NextResponse.json({ error: err.message || 'Image upload failed' }, { status: 400 });
  }

  const created = addDoctor({ ...payload, image: imagePath });

  revalidatePath('/team');
  revalidatePath(`/team/${created.slug}`);
  revalidatePath('/');

  return NextResponse.json({ doctor: created }, { status: 201 });
}
