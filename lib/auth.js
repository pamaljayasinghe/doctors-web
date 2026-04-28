import crypto from 'node:crypto';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'admin_session';
const SESSION_TTL_SECONDS = 60 * 60 * 8; // 8 hours

function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || 'change-me-please';
  return crypto.createHash('sha256').update(secret).digest();
}

function b64url(buf) {
  return Buffer.from(buf).toString('base64').replace(/=+$/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

function fromB64url(str) {
  const pad = str.length % 4 === 0 ? '' : '='.repeat(4 - (str.length % 4));
  return Buffer.from(str.replace(/-/g, '+').replace(/_/g, '/') + pad, 'base64');
}

function sign(payload) {
  const data = b64url(JSON.stringify(payload));
  const mac = crypto.createHmac('sha256', getSecret()).update(data).digest();
  return `${data}.${b64url(mac)}`;
}

function verify(token) {
  if (!token || typeof token !== 'string' || !token.includes('.')) return null;
  const [data, macB64] = token.split('.');
  if (!data || !macB64) return null;
  const expected = crypto.createHmac('sha256', getSecret()).update(data).digest();
  let actual;
  try {
    actual = fromB64url(macB64);
  } catch {
    return null;
  }
  if (expected.length !== actual.length || !crypto.timingSafeEqual(expected, actual)) return null;
  let payload;
  try {
    payload = JSON.parse(fromB64url(data).toString('utf8'));
  } catch {
    return null;
  }
  if (typeof payload !== 'object' || !payload || typeof payload.exp !== 'number') return null;
  if (Date.now() / 1000 > payload.exp) return null;
  return payload;
}

export function checkCredentials(username, password) {
  const expectedUser = process.env.ADMIN_USERNAME || 'admin';
  const expectedPass = process.env.ADMIN_PASSWORD || 'change-me-please';
  if (typeof username !== 'string' || typeof password !== 'string') return false;
  const u = Buffer.from(username);
  const p = Buffer.from(password);
  const eu = Buffer.from(expectedUser);
  const ep = Buffer.from(expectedPass);
  if (u.length !== eu.length || p.length !== ep.length) return false;
  return crypto.timingSafeEqual(u, eu) && crypto.timingSafeEqual(p, ep);
}

export function createSessionToken(username) {
  const exp = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  return sign({ user: username, exp });
}

export function setSessionCookie(token) {
  cookies().set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: SESSION_TTL_SECONDS,
  });
}

export function clearSessionCookie() {
  cookies().set(COOKIE_NAME, '', { path: '/', maxAge: 0 });
}

export function getSession() {
  const token = cookies().get(COOKIE_NAME)?.value;
  return verify(token);
}

export function requireSession() {
  return getSession();
}

export const SESSION_COOKIE_NAME = COOKIE_NAME;
