# Doctors at Farm Gate — Next.js Website

Modern, fast, SEO-friendly marketing site for an Australian family GP practice. Built with **Next.js 14 (App Router) + React 18 + Tailwind CSS**.

- Modular components (`/components`) — clean and reusable
- Content-driven pages via plain JS data files (`/data`) — easy to extend
- Dynamic detail pages for **Services** (`/services/[slug]`) and **Doctors** (`/team/[slug]`)
- **Admin dashboard** at `/admin` — log in to add or remove doctor profiles (with image upload) from the front end
- Vacancies / Careers page at `/vacancies`
- SEO: per-page metadata, sitemap, robots, Open Graph + JSON-LD (MedicalClinic schema)
- Security: strict CSP + HSTS + security headers in `next.config.mjs` and `.htaccess`
- Accessibility: skip link, semantic landmarks, keyboard-friendly nav
- Deployable to **cPanel → Setup Node.js App** via `server.js`

## 1. Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 2. Production build

```bash
npm run build
npm start            # uses `next start` on $PORT (default 3000)
# or, for cPanel:
npm run start:cpanel # runs server.js
```

## 3. Project structure

```
app/
  admin/                # /admin login + doctors management UI (auth-gated)
  api/admin/            # JSON API: login, logout, doctors CRUD + image upload
  team/                 # /team list + /team/[slug] detail (reads from data/doctors.json)
  vacancies/            # /vacancies careers page
  ...
components/             # Header, Footer, Hero, ServiceCard, DoctorCard, ...
data/
  site.js               # phone, email, address, hours, nav
  services.js           # services content (static)
  doctors.json          # doctor records (managed via /admin)
  doctors.js            # re-exports getDoctors / getDoctor for legacy imports
lib/
  doctors.js            # JSON read/write helpers for doctor records
  auth.js               # signed-cookie session for the admin UI
public/
  uploads/              # admin-uploaded doctor portraits land here at runtime
  logo/, favicon.ico, ...
server.js               # cPanel Node.js entrypoint
next.config.mjs         # security headers + image config
tailwind.config.js
```

## 4. Adding a new doctor (recommended: admin UI)

1. Visit `/admin/login`, sign in with the admin credentials.
2. Open **Manage Doctors**.
3. Fill out the form (name, role, credentials, languages, special interests, education, bio) and either upload a photo or paste an image URL.
4. Click **Add doctor** — the new profile appears immediately on `/team` and at `/team/<slug>`.
5. To remove a doctor, click the trash icon next to their name in the list.

Records are persisted in `data/doctors.json`. Uploaded images are saved to `public/uploads/`.

> Editing `data/doctors.json` by hand still works if you prefer a code-based workflow.

## 5. Adding / editing a service

Edit `data/services.js`. Each entry creates a detail page at `/services/<slug>`.

## 6. Replacing images

Static placeholders live under `public/images/`. Replace them with real, optimised JPG/WEBP photos while keeping the same file names (or update the `image:` field in the relevant data file).

## 7. Updating contact info / hours / branding

Edit `data/site.js` — phone, email, address, opening hours, nav and social links all come from here.

## 8. Deploying to cPanel (Node.js App)

1. In cPanel open **Setup Node.js App** → **Create Application**.
2. Node version: **18+**  ·  Mode: **Production**  ·  Application root: this folder (upload via File Manager or Git).
3. Application startup file: `server.js`.
4. Add the **environment variables** below (Setup Node.js App → *Environment variables*):
   - `NODE_ENV=production`
   - `ADMIN_USERNAME=admin` *(or whatever you want)*
   - `ADMIN_PASSWORD=` *a long, random password*
   - `ADMIN_SESSION_SECRET=` *a long random string (32+ chars)*
5. Click **Run NPM Install**.
6. Open the virtual environment terminal (button in cPanel) and run:
   ```bash
   npm run build
   ```
7. Make sure `data/` and `public/uploads/` are **writable** by the Node user (cPanel usually sets this automatically; if not, set them to `755`).
8. Back on the Node.js App page, click **Restart**.
9. cPanel proxies your domain to the Node process automatically.

> **Persistence note** — `data/doctors.json` and `public/uploads/` hold runtime data. When you re-upload the project, do **not** overwrite these or you will lose admin-managed doctors and uploaded photos. Use Git or copy them off the server before redeploying.

### Required env vars

| Variable | Purpose | Default (insecure!) |
|---|---|---|
| `ADMIN_USERNAME` | Admin login username | `admin` |
| `ADMIN_PASSWORD` | Admin login password | `change-me-please` |
| `ADMIN_SESSION_SECRET` | Used to sign the session cookie | derived from `ADMIN_PASSWORD` |
| `PORT` | HTTP port — set by cPanel automatically | `3000` |

> **Always set a strong `ADMIN_PASSWORD` and `ADMIN_SESSION_SECRET` in production.** The defaults are placeholders to allow local testing only.

## 9. SEO checklist (done)

- [x] Semantic HTML + accessible landmarks
- [x] Per-page `<title>` + description via `metadata` export
- [x] Open Graph + Twitter cards
- [x] `sitemap.xml` (auto) + `robots.txt` (auto, blocks `/admin` and `/api`)
- [x] JSON-LD `MedicalClinic` structured data
- [x] Canonical URLs, correct language (`en-AU`)
- [x] Optimised images via `next/image`

## 10. Security checklist (done)

- [x] Strict-Transport-Security (HSTS)
- [x] Content-Security-Policy
- [x] X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- [x] `poweredByHeader: false`
- [x] Honeypot field in contact form
- [x] HTTPS redirect in `.htaccess`
- [x] Admin auth via signed HMAC cookie + httpOnly + secure in production
- [x] Robots disallow on `/admin` and `/api`

## 11. Next steps

- Wire up `components/ContactForm.jsx` to your SMTP / HubSpot / CRM endpoint.
- Replace `site.url`, phone, email and address in `data/site.js`.
- Swap placeholder images in `public/images/`.
- Add real doctor profiles via the `/admin` UI.
