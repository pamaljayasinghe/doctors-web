import { Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { site } from '@/data/site';

export default function TopBar() {
  return (
    <div className="hidden border-b border-slate-100 bg-white text-xs text-slate-600 md:block">
      <div className="container-px flex items-center justify-between py-2">
        <div className="flex items-center gap-5">
          <a href={site.phoneHref} className="flex items-center gap-1.5 hover:text-brand-blue-700">
            <Phone className="h-3.5 w-3.5" /> Phone: {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="hidden items-center gap-1.5 hover:text-brand-blue-700 lg:flex">
            <Mail className="h-3.5 w-3.5" /> {site.email}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden text-slate-500 lg:inline">Follow Us On:</span>
          <a href={site.social.facebook} aria-label="Facebook" className="hover:text-brand-blue-700"><Facebook className="h-3.5 w-3.5" /></a>
          <a href={site.social.instagram} aria-label="Instagram" className="hover:text-brand-blue-700"><Instagram className="h-3.5 w-3.5" /></a>
          <a href={site.social.linkedin} aria-label="LinkedIn" className="hover:text-brand-blue-700"><Linkedin className="h-3.5 w-3.5" /></a>
        </div>
      </div>
    </div>
  );
}
