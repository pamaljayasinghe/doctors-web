import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, CalendarCheck, GraduationCap, Languages, UserRound, Sparkles, Phone } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { doctors, getDoctor } from '@/data/doctors';
import { site } from '@/data/site';

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }) {
  const d = getDoctor(params.slug);
  if (!d) return {};
  return {
    title: d.name,
    description: `${d.name} — ${d.role} at ${site.name}. ${d.bio}`,
    openGraph: { title: d.name, description: d.role, images: [d.image] },
  };
}

export default function DoctorDetailPage({ params }) {
  const doctor = getDoctor(params.slug);
  if (!doctor) notFound();

  return (
    <>
      <PageHero
        title={doctor.name}
        description={doctor.role}
        crumbs={[{ label: 'Our Doctors', href: '/team' }, { label: doctor.name }]}
      />
      <section className="section">
        <div className="container-px grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl ring-1 ring-slate-100">
              <Image src={doctor.image} alt={`Portrait of ${doctor.name}`} fill sizes="(min-width:1024px) 30vw, 100vw" className="object-cover" />
            </div>
            <div className="mt-5 card">
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3"><GraduationCap className="h-4 w-4 text-brand-green-600" /><span className="font-semibold">Credentials:</span> {doctor.credentials}</li>
                <li className="flex items-center gap-3"><UserRound className="h-4 w-4 text-brand-green-600" /><span className="font-semibold">Gender:</span> {doctor.gender}</li>
                <li className="flex items-center gap-3"><Languages className="h-4 w-4 text-brand-green-600" /><span className="font-semibold">Languages:</span> {doctor.languages.join(', ')}</li>
              </ul>
              <Link href="/contact#book" className="btn-primary mt-5 w-full"><CalendarCheck className="h-4 w-4" /> Book with {doctor.name.split(' ')[1] || doctor.name}</Link>
              <a href={site.phoneHref} className="btn-outline mt-2 w-full"><Phone className="h-4 w-4" /> {site.phone}</a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="heading-2">About {doctor.name}</h2>
            <p className="lead mt-4">{doctor.bio}</p>

            <h3 className="mt-10 heading-3 flex items-center gap-2"><Sparkles className="h-5 w-5 text-brand-green-600" /> Special Interests</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {doctor.specialInterests.map((s, i) => (
                <li key={i} className="rounded-full bg-brand-blue-50 px-3 py-1.5 text-xs font-semibold text-brand-blue-700 ring-1 ring-brand-blue-100">{s}</li>
              ))}
            </ul>

            <h3 className="mt-10 heading-3 flex items-center gap-2"><GraduationCap className="h-5 w-5 text-brand-green-600" /> Education & Training</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {doctor.education.map((e, i) => (
                <li key={i} className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100">{e}</li>
              ))}
            </ul>

            <div className="mt-10">
              <Link href="/team" className="link-underline inline-flex items-center gap-1"><ArrowLeft className="h-4 w-4" /> Back to all doctors</Link>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
