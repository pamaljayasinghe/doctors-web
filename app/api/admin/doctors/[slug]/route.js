import fs from 'node:fs';
import path from 'node:path';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getDoctor, deleteDoctor } from '@/lib/doctors';
import { getSession } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function unauthorized() {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}

export async function DELETE(_req, { params }) {
  if (!getSession()) return unauthorized();
  const { slug } = params;
  const doctor = getDoctor(slug);
  if (!doctor) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  if (doctor.image && doctor.image.startsWith('/uploads/')) {
    const file = path.join(process.cwd(), 'public', doctor.image.replace(/^\/+/, ''));
    try { fs.unlinkSync(file); } catch { /* ignore missing file */ }
  }

  const removed = deleteDoctor(slug);
  if (!removed) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  revalidatePath('/team');
  revalidatePath(`/team/${slug}`);
  revalidatePath('/');

  return NextResponse.json({ ok: true });
}
