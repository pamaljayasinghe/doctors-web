'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Trash2, Plus, UserRound } from 'lucide-react';

const EMPTY_FORM = {
  name: '',
  role: 'General Practitioner',
  credentials: '',
  gender: '',
  languages: 'English',
  specialInterests: '',
  bio: '',
  education: '',
  imageUrl: '',
};

export default function DoctorsManager({ initialDoctors }) {
  const router = useRouter();
  const [doctors, setDoctors] = useState(initialDoctors);
  const [form, setForm] = useState(EMPTY_FORM);
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!form.name.trim()) {
      setError('Name is required.');
      return;
    }
    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append('name', form.name);
      fd.append('role', form.role);
      fd.append('credentials', form.credentials);
      fd.append('gender', form.gender);
      fd.append('languages', form.languages);
      fd.append('specialInterests', form.specialInterests);
      fd.append('bio', form.bio);
      fd.append('education', form.education);
      fd.append('imageUrl', form.imageUrl);
      if (imageFile) fd.append('image', imageFile);

      const res = await fetch('/api/admin/doctors', { method: 'POST', body: fd });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Failed to save doctor');

      setDoctors((list) => [...list, data.doctor]);
      setForm(EMPTY_FORM);
      setImageFile(null);
      setSuccess(`${data.doctor.name} added.`);
      router.refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function onDelete(slug, name) {
    if (!confirm(`Remove ${name}? This cannot be undone.`)) return;
    setError('');
    setSuccess('');
    try {
      const res = await fetch(`/api/admin/doctors/${slug}`, { method: 'DELETE' });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Failed to delete');
      setDoctors((list) => list.filter((d) => d.slug !== slug));
      setSuccess(`${name} removed.`);
      router.refresh();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <section className="lg:col-span-3">
        <div className="card">
          <h2 className="heading-3 flex items-center gap-2"><Plus className="h-5 w-5 text-brand-green-600" /> Add a doctor</h2>
          <p className="mt-1 text-sm text-slate-600">All fields except name are optional. Lists can be separated by commas or new lines.</p>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <Field label="Full name" required>
              <input className={inputCls} value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Dr Jane Smith" required />
            </Field>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Role">
                <input className={inputCls} value={form.role} onChange={(e) => update('role', e.target.value)} placeholder="General Practitioner" />
              </Field>
              <Field label="Credentials">
                <input className={inputCls} value={form.credentials} onChange={(e) => update('credentials', e.target.value)} placeholder="MBBS, FRACGP" />
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Gender">
                <input className={inputCls} value={form.gender} onChange={(e) => update('gender', e.target.value)} placeholder="Female / Male / Other" />
              </Field>
              <Field label="Languages" hint="Comma-separated">
                <input className={inputCls} value={form.languages} onChange={(e) => update('languages', e.target.value)} placeholder="English, Mandarin" />
              </Field>
            </div>

            <Field label="Special interests" hint="Comma or new-line separated">
              <textarea className={`${inputCls} min-h-[80px]`} value={form.specialInterests} onChange={(e) => update('specialInterests', e.target.value)} placeholder="Women's health, Children's health, Preventive care" />
            </Field>

            <Field label="Education & training" hint="One per line">
              <textarea className={`${inputCls} min-h-[100px]`} value={form.education} onChange={(e) => update('education', e.target.value)} placeholder="MBBS – University of Melbourne&#10;FRACGP" />
            </Field>

            <Field label="Bio / description">
              <textarea className={`${inputCls} min-h-[140px]`} value={form.bio} onChange={(e) => update('bio', e.target.value)} placeholder="A short biography that describes the doctor’s approach and interests." />
            </Field>

            <Field label="Profile photo" hint="Upload an image (JPEG/PNG/WebP, max 5MB) or paste an image URL below">
              <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} className="block w-full text-sm text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-brand-green-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-brand-green-700" />
            </Field>

            <Field label="Image URL (optional)" hint="Used if no file is uploaded">
              <input className={inputCls} value={form.imageUrl} onChange={(e) => update('imageUrl', e.target.value)} placeholder="https://…" />
            </Field>

            {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 ring-1 ring-red-100">{error}</p>}
            {success && <p className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700 ring-1 ring-green-100">{success}</p>}

            <div className="flex items-center gap-3">
              <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-60">
                {submitting ? 'Saving…' : 'Add doctor'}
              </button>
              <button type="button" onClick={() => { setForm(EMPTY_FORM); setImageFile(null); setError(''); setSuccess(''); }} className="btn-outline">
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="lg:col-span-2">
        <div className="card">
          <h2 className="heading-3">Current doctors ({doctors.length})</h2>
          {doctors.length === 0 ? (
            <p className="mt-4 text-sm text-slate-600">No doctors yet. Add one using the form.</p>
          ) : (
            <ul className="mt-4 space-y-3">
              {doctors.map((d) => (
                <li key={d.slug} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-slate-200">
                    {d.image ? (
                      <Image src={d.image} alt={d.name} fill sizes="56px" className="object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-slate-400"><UserRound className="h-6 w-6" /></div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-brand-navy">{d.name}</p>
                    <p className="truncate text-xs text-slate-500">{d.role}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onDelete(d.slug, d.name)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full text-red-600 hover:bg-red-50"
                    aria-label={`Delete ${d.name}`}
                    title="Delete"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}

const inputCls =
  'mt-1 block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-brand-green-500 focus:outline-none focus:ring-2 focus:ring-brand-green-500/30';

function Field({ label, hint, required, children }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-brand-navy">{label}{required && <span className="text-red-500"> *</span>}</span>
      {hint && <span className="ml-2 text-xs font-normal text-slate-500">{hint}</span>}
      {children}
    </label>
  );
}
