import PageHero from '@/components/PageHero';
import DoctorCard from '@/components/DoctorCard';
import CTASection from '@/components/CTASection';
import { getDoctors } from '@/lib/doctors';

export const metadata = {
  title: 'Our Doctors',
  description:
    'Meet the team at Doctors at Farm Gate — fellowship-trained GPs passionate about delivering high-quality, patient-centred care.',
};

export const dynamic = 'force-dynamic';

export default function TeamPage() {
  const doctors = getDoctors();
  return (
    <>
      <PageHero
        title="Our Doctors"
        description="All our doctors and staff are passionate about delivering high-quality patient care."
        crumbs={[{ label: 'Our Doctors' }]}
      />
      <section className="section">
        <div className="container-px">
          {doctors.length === 0 ? (
            <p className="text-center text-slate-600">Doctor profiles will be available soon.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {doctors.map((d) => <DoctorCard key={d.slug} doctor={d} />)}
            </div>
          )}
        </div>
      </section>
      <CTASection />
    </>
  );
}
