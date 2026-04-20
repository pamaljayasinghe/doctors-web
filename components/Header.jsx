'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, CalendarCheck } from 'lucide-react';
import Logo from './Logo';
import { site } from '@/data/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${
        scrolled ? 'bg-white/95 shadow-sm backdrop-blur' : 'bg-white'
      }`}
    >
      <div className="container-px flex items-center justify-between py-3 md:py-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {site.nav.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? 'text-brand-green-600'
                    : 'text-slate-700 hover:text-brand-blue-700'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact#book" className="hidden btn-primary md:inline-flex">
            <CalendarCheck className="h-4 w-4" /> Book Appointment
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <nav className="container-px flex flex-col py-3" aria-label="Mobile">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-brand-blue-700"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact#book" className="btn-primary mt-2">
              <CalendarCheck className="h-4 w-4" /> Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
