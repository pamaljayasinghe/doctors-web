import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Icon from './Icon';

export default function ServiceCard({ service }) {
  return (
    <article className="card group flex flex-col overflow-hidden p-0">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green-50 text-brand-green-600 ring-1 ring-brand-green-100 transition-colors group-hover:bg-brand-blue-50 group-hover:text-brand-blue-700 group-hover:ring-brand-blue-100">
          <Icon name={service.icon} className="h-6 w-6" />
        </div>
        <h3 className="mt-5 heading-3">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.summary}</p>
        <Link
          href={`/services/${service.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 self-start rounded-full bg-brand-blue-50 px-3.5 py-1.5 text-xs font-semibold text-brand-blue-700 transition-colors hover:bg-brand-blue-600 hover:text-white"
        >
          Read More <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
