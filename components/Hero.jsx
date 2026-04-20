import Link from "next/link";
import Image from "next/image";
import { CalendarCheck, Phone, ShieldCheck, Stethoscope } from "lucide-react";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      {/* Decorative corners */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-6 top-6 h-10 w-10 border-l-4 border-t-4 border-brand-green-500"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-6 right-6 h-10 w-10 border-b-4 border-r-4 border-brand-blue-600"
      />

      <div className="container-px relative grid items-center gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <span className="pill">Welcome To</span>
          <h1 className="heading-1 mt-4">
            {site.name}
            <span className="block text-brand-green-600">
              Modern Family GP Care
            </span>
          </h1>
          <p className="lead mt-5 max-w-xl">
            A fully bulk-billed* modern family GP practice — compassionate,
            evidence-based, patient-centred care for individuals and families at
            every stage of life.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/contact#book" className="btn-primary">
              <CalendarCheck className="h-4 w-4" /> Book Now
            </Link>
            <a href={site.phoneHref} className="btn-outline">
              <Phone className="h-4 w-4" /> Call {site.phone}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-card ring-1 ring-slate-100">
              <ShieldCheck className="h-4 w-4 text-brand-green-600" />
              <span className="text-xs font-semibold text-slate-700">
                Medicare Bulk Billing*
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-card ring-1 ring-slate-100">
              <Stethoscope className="h-4 w-4 text-brand-blue-600" />
              <span className="text-xs font-semibold text-slate-700">
                On-site Pathology
              </span>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2rem] ring-1 ring-white/60 shadow-soft">
            <Image
              src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern family GP practice illustration"
              fill
              priority
              sizes="(min-width:1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -left-4 top-6 hidden rounded-2xl bg-white/95 p-4 shadow-card ring-1 ring-slate-100 md:block">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Open Today
            </p>
            <p className="text-sm font-bold text-brand-navy">
              9:00 AM – 4:00 PM
            </p>
          </div>
          <div className="absolute -right-4 bottom-6 hidden rounded-2xl bg-white/95 p-4 shadow-card ring-1 ring-slate-100 md:block">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              New Patients
            </p>
            <p className="text-sm font-bold text-brand-green-600">Welcome</p>
          </div>
        </div>
      </div>
    </section>
  );
}
