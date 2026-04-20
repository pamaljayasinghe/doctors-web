import Link from 'next/link';
import Image from 'next/image';
import { CalendarCheck } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-cta-gradient text-white">
      <div className="container-px relative grid items-center gap-8 py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-7">
          <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">
            We’re Welcoming New Patients!
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
            We are a GP-owned and operated, fully bulk-billed medical clinic
            committed to supporting the health and wellbeing of our community.
            Our team provides comprehensive general practice services with the
            convenience of on-site pathology, with a strong focus on accessible,
            patient-centred care.
          </p>
          <div className="mt-6">
            <Link href="/contact#book" className="btn-primary">
              <CalendarCheck className="h-4 w-4" /> Book Appointment
            </Link>
          </div>
        </div>
        <div className="relative hidden md:col-span-5 md:block">
          <div className="relative aspect-[5/3] w-full overflow-hidden rounded-2xl ring-1 ring-white/20">
            <Image
              src="/images/hero/welcoming-patients.svg"
              alt="Our medical team"
              fill
              sizes="(min-width:768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
