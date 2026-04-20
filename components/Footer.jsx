import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import Logo from './Logo';
import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300">
      <div className="container-px grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 inline-block">
            <Logo variant="light" />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-slate-400">
            {site.description}
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href={site.social.facebook} aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-brand-green-500/80"><Facebook className="h-4 w-4" /></a>
            <a href={site.social.instagram} aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-brand-green-500/80"><Instagram className="h-4 w-4" /></a>
            <a href={site.social.linkedin} aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-brand-green-500/80"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="mb-4 font-display text-base font-bold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {site.nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-slate-300 hover:text-brand-green-300">› {n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5">
          <h4 className="mb-4 font-display text-base font-bold text-white">Contact Us</h4>
          <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-400" /><span>{site.address.line1}<br/>{site.address.line2}</span></li>
              <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-400" /><a href={site.phoneHref} className="hover:text-brand-green-300">{site.phone}</a></li>
              <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-400" /><a href={`mailto:${site.email}`} className="hover:text-brand-green-300">{site.email}</a></li>
              <li className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-400" /><span>{site.hours[0].day}: {site.hours[0].time}</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-5 text-xs text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All Rights Reserved.</p>
          <p>For emergencies dial <span className="font-semibold text-white">000</span>.</p>
        </div>
      </div>
    </footer>
  );
}
