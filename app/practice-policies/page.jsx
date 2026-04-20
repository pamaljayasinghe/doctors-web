import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Practice Policies',
  description: 'Our policies outline how Doctors at Farm Gate operates and what patients can expect — appointments, billing, privacy, and more.',
};

const policies = [
  { title: 'Appointments', text: 'Consultations are by appointment. Longer appointments are available upon request for complex or multiple concerns. We encourage patients to arrive on time to avoid delays.' },
  { title: 'Fees and Billing', text: 'Our practice operates on a private billing basis unless otherwise advised. Fees are payable at the time of consultation. Medicare rebates can be processed electronically where applicable.' },
  { title: 'Cancellations', text: 'If you are unable to attend, please provide adequate notice. Late cancellations or non-attendance may incur a fee.' },
  { title: 'Privacy and Confidentiality', text: 'We respect your privacy and manage personal health information in accordance with Australian privacy legislation. Patient information is stored securely and is only shared with consent or where legally required.' },
  { title: 'Results and Follow-Up', text: 'Patients are encouraged to book a follow-up appointment to discuss test results. Our team will contact you directly if urgent action is required.' },
  { title: 'Repeat Prescriptions and Referrals', text: 'Repeat prescriptions and specialist referrals require a consultation to ensure safe and appropriate care.' },
  { title: 'Zero Tolerance Policy', text: 'We maintain a respectful environment for patients and staff. Aggressive, abusive or inappropriate behaviour will not be tolerated.' },
  { title: 'Emergencies', text: 'For medical emergencies, please call 000 immediately.' },
];

export default function PoliciesPage() {
  return (
    <>
      <PageHero
        title="Practice Policies"
        description="We are committed to providing safe, respectful and high-quality healthcare. The following policies outline how our practice operates and what patients can expect."
        crumbs={[{ label: 'Practice Policies' }]}
      />
      <section className="section">
        <div className="container-px grid gap-6 md:grid-cols-2">
          {policies.map((p, i) => (
            <article key={i} className="card">
              <span className="pill">Policy {String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 heading-3">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
