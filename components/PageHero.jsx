import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function PageHero({ title, description, crumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div aria-hidden className="pointer-events-none absolute left-6 top-6 h-8 w-8 border-l-4 border-t-4 border-brand-green-500" />
      <div aria-hidden className="pointer-events-none absolute bottom-6 right-6 h-8 w-8 border-b-4 border-r-4 border-brand-blue-600" />
      <div className="container-px py-14 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-1 text-xs text-slate-500">
          <Link href="/" className="hover:text-brand-blue-700">Home</Link>
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1">
              <ChevronRight className="h-3.5 w-3.5" />
              {c.href ? (
                <Link href={c.href} className="hover:text-brand-blue-700">{c.label}</Link>
              ) : (
                <span className="text-slate-700">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="heading-1 max-w-3xl">{title}</h1>
        {description && <p className="lead mt-4 max-w-2xl">{description}</p>}
      </div>
    </section>
  );
}
