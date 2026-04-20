import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CalendarCheck, HeartHandshake, Award, Users } from 'lucide-react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import DoctorCard from '@/components/DoctorCard';
import CTASection from '@/components/CTASection';
import { services } from '@/data/services';
import { doctors } from '@/data/doctors';

export const metadata = {
  title: 'Home',
  description:
    'Doctors at Farm Gate — a modern family GP practice providing women’s, men’s and kid’s health, immunisations, iron infusions, travel medicine, pathology, telehealth and more across Australia.',
};

export default function HomePage() {
  const featured = services.slice(0, 8);
  const team = doctors.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Services */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="What We Offer"
            title="Our Services"
            description="Comprehensive, evidence-based general practice care for every stage of life."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-outline">
              Explore All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="section bg-slate-50">
        <div className="container-px grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title="A modern family GP practice you can trust"
              description="Doctors at Farm Gate is dedicated to providing high-quality, patient-centered healthcare. We focus on prevention, early diagnosis and long-term wellbeing — building trusted relationships with the families we care for."
            />
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { icon: HeartHandshake, title: 'Compassionate Care', text: 'Evidence-based care delivered with empathy.' },
                { icon: Award, title: 'Experienced Team', text: 'Fellowship-trained GPs and skilled nurses.' },
                { icon: Users, title: 'Family Focused', text: 'Care for every age and every stage of life.' },
                { icon: CalendarCheck, title: 'Easy Booking', text: 'Online booking and on-site pathology.' },
              ].map((f, i) => (
                <li key={i} className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-100">
                  <f.icon className="h-6 w-6 text-brand-green-600" />
                  <p className="mt-3 font-semibold text-brand-navy">{f.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{f.text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <Link href="/about" className="btn-secondary">Learn More <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-slate-100">
            <Image src="/images/hero/hero-main.svg" alt="About Doctors at Farm Gate" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Doctors preview */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our Team"
            title="Meet Our Doctors"
            description="All our doctors and staff are passionate about delivering high-quality patient care — combining knowledge and experience with empathy."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((d) => <DoctorCard key={d.slug} doctor={d} />)}
          </div>
          <div className="mt-10 text-center">
            <Link href="/team" className="btn-outline">View Full Team <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
