import fs from 'node:fs';
import path from 'node:path';

const DATA_FILE = path.join(process.cwd(), 'data', 'doctors.json');

function ensureFile() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
    fs.writeFileSync(DATA_FILE, '[]', 'utf8');
  }
}

export function getDoctors() {
  ensureFile();
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    const list = JSON.parse(raw);
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

export function getDoctor(slug) {
  return getDoctors().find((d) => d.slug === slug) || null;
}

export function saveDoctors(list) {
  ensureFile();
  fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2), 'utf8');
}

export function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
    .slice(0, 80);
}

export function uniqueSlug(base, existing) {
  const slugs = new Set(existing.map((d) => d.slug));
  let candidate = base || 'doctor';
  let i = 2;
  while (slugs.has(candidate)) {
    candidate = `${base}-${i++}`;
  }
  return candidate;
}

export function addDoctor(doctor) {
  const list = getDoctors();
  const base = doctor.slug ? slugify(doctor.slug) : slugify(doctor.name);
  const slug = uniqueSlug(base, list);
  const entry = {
    slug,
    name: doctor.name || 'Unnamed Doctor',
    role: doctor.role || 'General Practitioner',
    image: doctor.image || '',
    credentials: doctor.credentials || '',
    gender: doctor.gender || '',
    languages: Array.isArray(doctor.languages) ? doctor.languages : [],
    specialInterests: Array.isArray(doctor.specialInterests) ? doctor.specialInterests : [],
    bio: doctor.bio || '',
    education: Array.isArray(doctor.education) ? doctor.education : [],
  };
  list.push(entry);
  saveDoctors(list);
  return entry;
}

export function deleteDoctor(slug) {
  const list = getDoctors();
  const next = list.filter((d) => d.slug !== slug);
  if (next.length === list.length) return false;
  saveDoctors(next);
  return true;
}
