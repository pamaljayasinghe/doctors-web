import './globals.css';

export const metadata = {
  title: 'About Us | MediCare Channeling Center',
  description:
    'Learn about MediCare Channeling Center — providing patients with the highest standard of medical care through our dedicated team of specialist doctors.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
