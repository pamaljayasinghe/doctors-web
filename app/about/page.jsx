import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { HeartHandshake, ShieldCheck, Sparkles, Users } from 'lucide-react';

export const metadata = {
  title: 'About Us',
  description:
    'Doctors at Farm Gate is a modern family GP practice dedicated to high-quality, patient-centred healthcare with a focus on prevention and long-term wellbeing.',
};

const values = [
  { icon: HeartHandshake, title: 'Patient-Centred', text: 'Care built around the individual, family and community.' },
  { icon: ShieldCheck, title: 'Evidence-Based', text: 'Modern, evidence-led medicine you can trust.' },
  { icon: Sparkles, title: 'Prevention First', text: 'Proactive screening and lifestyle support.' },
  { icon: Users, title: 'Whole-of-Family', text: 'Care for every age and every stage of life.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        description="We are a modern family GP practice offering comprehensive general medical services with a strong focus on prevention, early diagnosis and long-term wellbeing."
        crumbs={[{ label: 'About' }]}
      />

      <section className="section">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-slate-100">
            <Image src="/images/hero/hero-main.svg" alt="About the practice" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <div>
            <span className="pill">Who We Are</span>
            <h2 className="heading-2 mt-4">Doctors at Farm Gate</h2>
            <div className="lead mt-4 space-y-4">
              <p>Doctors at Farm Gate is a modern family GP practice dedicated to providing high-quality, patient-centered healthcare. We offer comprehensive general medical services with a strong focus on prevention, early diagnosis and long-term wellbeing.</p>
              <p>Our team is committed to building trusted relationships and delivering compassionate, evidence-based care for individuals and families at every stage of life.</p>
              <p>We aim to create a welcoming medical home supported by efficient systems and contemporary healthcare technology to ensure accessible, reliable and future-focused care for our community.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-px">
          <h2 className="heading-2 text-center">Our Values</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={i} className="card">
                <v.icon className="h-7 w-7 text-brand-green-600" />
                <h3 className="mt-4 heading-3">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
