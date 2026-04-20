import PageHero from '@/components/PageHero';
import DoctorCard from '@/components/DoctorCard';
import CTASection from '@/components/CTASection';
import { doctors } from '@/data/doctors';

export const metadata = {
  title: 'Our Doctors',
  description:
    'Meet the team at Doctors at Farm Gate — fellowship-trained GPs passionate about delivering high-quality, patient-centred care.',
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Our Doctors"
        description="All our doctors and staff are passionate about delivering high-quality patient care."
        crumbs={[{ label: 'Our Doctors' }]}
      />
      <section className="section">
        <div className="container-px grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d) => <DoctorCard key={d.slug} doctor={d} />)}
        </div>
      </section>
      <CTASection />
    </>
  );
}
