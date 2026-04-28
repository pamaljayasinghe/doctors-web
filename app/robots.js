import { site } from '@/data/site';

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/admin', '/api'] }],
    sitemap: `${site.url.replace(/\/$/, '')}/sitemap.xml`,
  };
}
