import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/data/site';

export default function Logo({ variant = 'default' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-brand-navy';
  const subColor = variant === 'light' ? 'text-brand-green-300' : 'text-brand-green-600';
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
      <Image
        src="/logo/logo.png"
        alt={`${site.name} logo`}
        width={48}
        height={48}
        priority
        className="h-10 w-10 md:h-12 md:w-12"
      />
      <span className="leading-tight">
        <span className={`block font-display text-base font-extrabold tracking-tight md:text-lg ${textColor}`}>
          DOCTORS AT
        </span>
        <span className={`block font-display text-base font-extrabold tracking-tight md:text-lg ${subColor}`}>
          FARM GATE
        </span>
      </span>
    </Link>
  );
}
