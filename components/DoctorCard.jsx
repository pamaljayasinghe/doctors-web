import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function DoctorCard({ doctor }) {
  return (
    <article className="card group overflow-hidden p-0">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-blue-50">
        <Image
          src={doctor.image}
          alt={`Portrait of ${doctor.name}`}
          fill
          sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="heading-3">{doctor.name}</h3>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand-green-600">{doctor.role}</p>
        <p className="mt-3 line-clamp-3 text-sm text-slate-600">{doctor.bio}</p>
        <Link
          href={`/team/${doctor.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-700 hover:text-brand-blue-900"
        >
          View Profile <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
