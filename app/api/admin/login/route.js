import { NextResponse } from 'next/server';
import { checkCredentials, createSessionToken, setSessionCookie } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
  const { username, password } = body || {};
  if (!checkCredentials(username, password)) {
    return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
  }
  const token = createSessionToken(username);
  setSessionCookie(token);
  return NextResponse.json({ ok: true });
}
