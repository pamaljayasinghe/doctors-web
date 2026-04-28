import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock, AlertTriangle } from 'lucide-react';
import { site } from '@/data/site';

export const metadata = {
  title: 'Contact & Appointments',
  description: 'Contact Doctors at Farm Gate to book an appointment, ask a question, or find our opening hours and address.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact & Appointments"
        description="We welcome enquiries and appointment bookings. Our team is here to assist you with any questions regarding our services or your healthcare needs."
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="section">
        <div className="container-px grid gap-10 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            <div className="card">
              <h3 className="heading-3">Practice Information</h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-600" /><span><span className="block font-semibold text-brand-navy">Address</span>{site.address.line1}<br/>{site.address.line2}</span></li>
                <li className="flex gap-3"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-600" /><span><span className="block font-semibold text-brand-navy">Phone</span><a href={site.phoneHref} className="link-underline">{site.phone}</a></span></li>
                <li className="flex gap-3"><Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-600" /><span><span className="block font-semibold text-brand-navy">Email</span><a href={`mailto:${site.email}`} className="link-underline break-all">{site.email}</a></span></li>
                <li className="flex gap-3"><Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-600" />
                  <div>
                    <span className="block font-semibold text-brand-navy">Opening Hours</span>
                    <ul className="mt-1 space-y-0.5 text-slate-600">
                      {site.hours.map((h, i) => (<li key={i}>{h.day}: <span className="font-medium text-brand-navy">{h.time}</span></li>))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-red-50 p-5 ring-1 ring-red-100">
              <div className="flex items-center gap-2 text-red-700">
                <AlertTriangle className="h-5 w-5" />
                <p className="font-semibold">Medical emergency?</p>
              </div>
              <p className="mt-2 text-sm text-red-800/90">For urgent medical concerns please call the practice. In an emergency dial <strong>000</strong> immediately.</p>
            </div>
          </div>

          <div id="book" className="lg:col-span-3">
            <div className="card">
              <h3 className="heading-3">Send us a message</h3>
              <p className="mt-2 text-sm text-slate-600">You can use our contact form for general or administrative enquiries.</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
