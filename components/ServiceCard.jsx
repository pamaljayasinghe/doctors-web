import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Icon from './Icon';

export default function ServiceCard({ service }) {
  return (
    <article className="card group flex flex-col">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green-50 text-brand-green-600 ring-1 ring-brand-green-100 transition-colors group-hover:bg-brand-blue-50 group-hover:text-brand-blue-700 group-hover:ring-brand-blue-100">
        <Icon name={service.icon} className="h-7 w-7" />
      </div>
      <h3 className="mt-5 heading-3">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.summary}</p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 self-start rounded-full bg-brand-blue-50 px-3.5 py-1.5 text-xs font-semibold text-brand-blue-700 transition-colors hover:bg-brand-blue-600 hover:text-white"
      >
        Read More <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </article>
  );
}
