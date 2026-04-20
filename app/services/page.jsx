import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import { services } from '@/data/services';

export const metadata = {
  title: 'Services',
  description:
    'Explore the full range of services at Doctors at Farm Gate — women’s, men’s and kid’s health, immunisations, iron infusion, travel medicine, pathology, telehealth and more.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Comprehensive general practice care — click any service to learn more."
        crumbs={[{ label: 'Services' }]}
      />
      <section className="section">
        <div className="container-px grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
