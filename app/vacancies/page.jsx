import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { Briefcase, MapPin, Clock, Mail } from 'lucide-react';
import { site } from '@/data/site';

export const metadata = {
  title: 'Vacancies & Careers',
  description:
    'Explore current vacancies at Doctors at Farm Gate. We are growing and welcome compassionate, patient-focused clinicians and support staff to join our team.',
};

const vacancies = [
  {
    title: 'General Practitioner (VR)',
    type: 'Full-time / Part-time',
    location: 'Clyde, VIC',
    summary:
      'Join our growing family GP practice. We welcome VR GPs with a passion for delivering compassionate, evidence-based care to a broad patient mix.',
    requirements: [
      'AHPRA registration with no restrictions',
      'FRACGP or equivalent (Vocational Registration)',
      'Strong interpersonal and communication skills',
      'Commitment to patient-centred care',
    ],
  },
  {
    title: 'Practice Nurse (RN/EN)',
    type: 'Part-time',
    location: 'Clyde, VIC',
    summary:
      'Support our clinicians and patients with chronic disease management, immunisations, wound care, treatment-room duties and care plan coordination.',
    requirements: [
      'Current AHPRA registration',
      'Recent general practice or community nursing experience',
      'Immunisation accreditation (or willingness to obtain)',
      'Friendly, organised and team-oriented',
    ],
  },
  {
    title: 'Medical Receptionist',
    type: 'Casual / Part-time',
    location: 'Clyde, VIC',
    summary:
      'Be the welcoming face of our practice — manage appointments, greet patients, handle phone enquiries and support the day-to-day running of the clinic.',
    requirements: [
      'Previous medical reception or customer-service experience preferred',
      'Familiarity with Best Practice or similar software (advantageous)',
      'Excellent communication and multi-tasking skills',
      'Warm, professional and patient-focused approach',
    ],
  },
];

export default function VacanciesPage() {
  return (
    <>
      <PageHero
        title="Vacancies & Careers"
        description="We are a new and growing general practice in Clyde. If you share our values of compassion, quality and community-focused care, we would love to hear from you."
        crumbs={[{ label: 'Vacancies' }]}
      />

      <section className="section">
        <div className="container-px">
          <div className="grid gap-6 md:grid-cols-2">
            {vacancies.map((v, i) => (
              <article key={i} className="card">
                <span className="pill">Position {String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 heading-3">{v.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-3 text-xs text-slate-600">
                  <li className="inline-flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5 text-brand-green-600" /> {v.type}</li>
                  <li className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-brand-green-600" /> {v.location}</li>
                  <li className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-brand-green-600" /> Ongoing</li>
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{v.summary}</p>
                <p className="mt-5 text-sm font-semibold text-brand-navy">Key requirements</p>
                <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                  {v.requirements.map((r, j) => (
                    <li key={j} className="flex gap-2"><span className="text-brand-green-600">›</span> {r}</li>
                  ))}
                </ul>
                <a
                  href={`mailto:${site.email}?subject=Application%20-%20${encodeURIComponent(v.title)}`}
                  className="btn-primary mt-6 w-full"
                >
                  <Mail className="h-4 w-4" /> Apply for this role
                </a>
              </article>
            ))}
          </div>

          <div className="mt-12 card">
            <span className="pill">General Expressions of Interest</span>
            <h3 className="mt-3 heading-3">Don’t see your role listed?</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              We are always interested in hearing from talented clinicians and
              support staff who would like to be part of a growing,
              community-focused practice. Send us your CV and a short cover
              letter and we will be in touch when a suitable opportunity arises.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a href={`mailto:${site.email}?subject=Expression%20of%20Interest`} className="btn-primary">
                <Mail className="h-4 w-4" /> Email your CV
              </a>
              <Link href="/contact" className="btn-outline">
                Contact the practice
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
