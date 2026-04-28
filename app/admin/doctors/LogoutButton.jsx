'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function logout() {
    setLoading(true);
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      router.push('/admin/login');
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <button onClick={logout} disabled={loading} className="btn-secondary disabled:opacity-60">
      {loading ? 'Signing out…' : 'Sign out'}
    </button>
  );
}
