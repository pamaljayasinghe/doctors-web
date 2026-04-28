import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import LoginForm from './LoginForm';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Admin Login',
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  if (getSession()) redirect('/admin/doctors');
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-16">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-card ring-1 ring-slate-100">
        <h1 className="heading-2">Admin Login</h1>
        <p className="mt-2 text-sm text-slate-600">Sign in to manage doctor profiles.</p>
        <LoginForm />
      </div>
    </div>
  );
}
