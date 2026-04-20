'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    // Placeholder — wire up to your backend / SMTP / CRM here.
    await new Promise((r) => setTimeout(r, 800));
    setStatus('ok');
    e.target.reset();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2" noValidate>
      <label className="block sm:col-span-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">Full Name</span>
        <input required name="name" type="text" autoComplete="name" className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-blue-600 focus:ring-2 focus:ring-brand-blue-100" />
      </label>
      <label className="block sm:col-span-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">Phone</span>
        <input required name="phone" type="tel" autoComplete="tel" className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-blue-600 focus:ring-2 focus:ring-brand-blue-100" />
      </label>
      <label className="block sm:col-span-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">Email</span>
        <input required name="email" type="email" autoComplete="email" className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-blue-600 focus:ring-2 focus:ring-brand-blue-100" />
      </label>
      <label className="block sm:col-span-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">Reason for visit</span>
        <select name="reason" className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-blue-600 focus:ring-2 focus:ring-brand-blue-100">
          <option>General Check-up</option>
          <option>Women’s Health</option>
          <option>Men’s Health</option>
          <option>Kid’s Health</option>
          <option>Immunisation</option>
          <option>Travel Medicine</option>
          <option>Iron Infusion</option>
          <option>Telehealth</option>
          <option>Other</option>
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">Message</span>
        <textarea name="message" rows={4} className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-blue-600 focus:ring-2 focus:ring-brand-blue-100" />
      </label>

      {/* Honeypot for spam */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="sm:col-span-2 flex items-center gap-3">
        <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">
          <Send className="h-4 w-4" /> {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
        </button>
        {status === 'ok' && (
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green-700">
            <CheckCircle2 className="h-4 w-4" /> Thanks — we’ll be in touch shortly.
          </span>
        )}
      </div>
      <p className="sm:col-span-2 text-xs text-slate-500">For urgent medical concerns please call the practice. In an emergency dial <strong>000</strong>.</p>
    </form>
  );
}
