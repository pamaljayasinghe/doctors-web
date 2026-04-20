import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { UserPlus, CalendarCheck, CreditCard, FileText, RefreshCw, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'Patient Information',
  description: 'Information for new and existing patients of Doctors at Farm Gate — appointments, fees, test results, referrals, and after-hours care.',
};

const items = [
  { icon: UserPlus, title: 'New Patients', text: 'We welcome new patients and families. Please bring your Medicare card, concession card (if applicable), and a list of current medications to your first appointment. Relevant medical history and previous reports will assist us in delivering comprehensive care.' },
  { icon: CalendarCheck, title: 'Appointments', text: 'Consultations are by appointment. If you require a longer consultation for multiple or complex concerns, please inform reception when booking.' },
  { icon: CreditCard, title: 'Fees and Payments', text: 'Our practice operates on a private billing basis unless otherwise advised. Fees are payable at the time of consultation. Medicare rebates can be processed electronically.' },
  { icon: FileText, title: 'Test Results', text: 'For confidentiality and accuracy, test results are discussed during a consultation. Patients will be contacted directly if urgent follow-up is required.' },
  { icon: RefreshCw, title: 'Referrals and Prescriptions', text: 'Repeat prescriptions and specialist referrals require a consultation to ensure appropriate and safe medical care.' },
  { icon: AlertTriangle, title: 'Emergencies & After-Hours', text: 'For urgent medical emergencies, please call 000 immediately. Information regarding after-hours services is available by contacting the practice.' },
];

export default function PatientInformationPage() {
  return (
    <>
      <PageHero
        title="Patient Information"
        description="We are committed to providing accessible, high-quality healthcare in a professional and supportive environment."
        crumbs={[{ label: 'Patient Information' }]}
      />
      <section className="section">
        <div className="container-px grid gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <article key={i} className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green-50 text-brand-green-600 ring-1 ring-brand-green-100">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 heading-3">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{it.text}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
