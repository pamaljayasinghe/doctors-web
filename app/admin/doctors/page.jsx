import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getSession } from '@/lib/auth';
import { getDoctors } from '@/lib/doctors';
import DoctorsManager from './DoctorsManager';
import LogoutButton from './LogoutButton';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Manage Doctors',
  robots: { index: false, follow: false },
};

export default function AdminDoctorsPage() {
  const session = getSession();
  if (!session) redirect('/admin/login');
  const doctors = getDoctors();

  return (
    <div className="container-px py-10">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-green-600">Admin</p>
          <h1 className="heading-2 mt-1">Manage Doctors</h1>
          <p className="mt-1 text-sm text-slate-600">Add new doctor profiles or remove existing ones. Changes appear on the website immediately.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/team" className="btn-outline" target="_blank">View public page</Link>
          <LogoutButton />
        </div>
      </header>

      <DoctorsManager initialDoctors={doctors} />
    </div>
  );
}
