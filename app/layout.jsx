import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopBar from '@/components/TopBar';
import { site } from '@/data/site';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'doctor', 'GP', 'family doctor', 'Australia', 'medical clinic',
    'women\'s health', 'men\'s health', 'kids health', 'immunisations',
    'iron infusion', 'travel medicine', 'pathology', 'telehealth',
    'Doctors at Farm Gate',
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [{ url: '/logo/logo.png', width: 512, height: 512, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
    images: ['/logo/logo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

export const viewport = {
  themeColor: '#2ea355',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo/logo.png`,
    image: `${site.url}/logo/logo.png`,
    telephone: site.phone,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.line1,
      addressCountry: 'AU',
    },
    openingHoursSpecification: site.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.day,
      opens: '09:00',
      closes: '16:00',
    })),
    medicalSpecialty: 'GeneralPractice',
  };

  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <TopBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
