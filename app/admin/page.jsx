import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export default function AdminIndex() {
  if (!getSession()) redirect('/admin/login');
  redirect('/admin/doctors');
}
