import { site } from '@/data/site';
import { services } from '@/data/services';
import { doctors } from '@/data/doctors';

export default function sitemap() {
  const base = site.url.replace(/\/$/, '');
  const now = new Date();
  const staticRoutes = [
    '', '/about', '/services', '/team',
    '/patient-information', '/practice-policies', '/contact',
  ].map((p) => ({ url: `${base}${p}`, lastModified: now, changeFrequency: 'monthly', priority: p === '' ? 1 : 0.8 }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.7,
  }));
  const doctorRoutes = doctors.map((d) => ({
    url: `${base}/team/${d.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...doctorRoutes];
}
