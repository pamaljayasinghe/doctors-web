import { site } from '@/data/site';
import { services } from '@/data/services';
import { getDoctors } from '@/lib/doctors';

export const dynamic = 'force-dynamic';

export default function sitemap() {
  const base = site.url.replace(/\/$/, '');
  const now = new Date();
  const staticRoutes = [
    '', '/about', '/services', '/team',
    '/patient-information', '/practice-policies', '/vacancies', '/contact',
  ].map((p) => ({ url: `${base}${p}`, lastModified: now, changeFrequency: 'monthly', priority: p === '' ? 1 : 0.8 }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.7,
  }));
  const doctorRoutes = getDoctors().map((d) => ({
    url: `${base}/team/${d.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...doctorRoutes];
}
