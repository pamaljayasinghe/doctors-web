import Link from 'next/link';
import { Home } from 'lucide-react';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-px text-center">
        <span className="pill">404</span>
        <h1 className="heading-1 mt-4">Page not found</h1>
        <p className="lead mx-auto mt-4 max-w-xl">
          The page you’re looking for doesn’t exist or has been moved. Let’s get you back on track.
        </p>
        <div className="mt-8">
          <Link href="/" className="btn-primary"><Home className="h-4 w-4" /> Back to Home</Link>
        </div>
      </div>
    </section>
  );
}
