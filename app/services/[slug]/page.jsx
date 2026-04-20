import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle2, CalendarCheck, Phone } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Icon from '@/components/Icon';
import CTASection from '@/components/CTASection';
import { services, getService } from '@/data/services';
import { site } from '@/data/site';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.summary,
    openGraph: { title: s.title, description: s.summary, images: [s.image] },
  };
}

export default function ServiceDetailPage({ params }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={service.title}
        description={service.summary}
        crumbs={[{ label: 'Services', href: '/services' }, { label: service.title }]}
      />

      <section className="section">
        <div className="container-px grid gap-10 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl ring-1 ring-slate-100">
              <Image src={service.image} alt={service.title} fill sizes="(min-width:1024px) 60vw, 100vw" className="object-cover" />
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green-50 text-brand-green-600 ring-1 ring-brand-green-100">
                <Icon name={service.icon} className="h-6 w-6" />
              </div>
              <h2 className="heading-2">{service.title}</h2>
            </div>
            <p className="lead mt-4">{service.description}</p>

            <h3 className="mt-10 heading-3">What’s included</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-100">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-600" />
                  <span className="text-sm text-slate-700">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href="/contact#book" className="btn-primary">
                <CalendarCheck className="h-4 w-4" /> Book Appointment
              </Link>
              <a href={site.phoneHref} className="btn-outline">
                <Phone className="h-4 w-4" /> Call {site.phone}
              </a>
              <Link href="/services" className="link-underline ml-2 inline-flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" /> Back to all services
              </Link>
            </div>
          </article>

          <aside className="space-y-5 lg:col-span-1">
            <div className="card">
              <h4 className="heading-3">Need help choosing?</h4>
              <p className="mt-2 text-sm text-slate-600">Not sure which service is right for you? Call our friendly reception team — we’ll guide you.</p>
              <a href={site.phoneHref} className="btn-secondary mt-4 w-full">
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
            </div>

            <div className="card">
              <h4 className="heading-3">Related services</h4>
              <ul className="mt-3 space-y-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/services/${r.slug}`} className="group flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand-blue-50 hover:text-brand-blue-700">
                      {r.title}
                      <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}
