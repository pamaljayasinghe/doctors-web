# Doctors at Farm Gate — Next.js Website

Modern, fast, SEO-friendly marketing site for an Australian family GP practice. Built with **Next.js 14 (App Router) + React 18 + Tailwind CSS**.

- Modular components (`/components`) — clean and reusable
- Content-driven pages via plain JS data files (`/data`) — easy to extend
- Dynamic detail pages for **Services** (`/services/[slug]`) and **Doctors** (`/team/[slug]`)
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
app/            # App Router pages + layout
components/     # Header, Footer, Hero, ServiceCard, DoctorCard, ...
data/           # site.js, services.js, doctors.js  (edit to update content)
public/
  logo/         # logo.png (brand logo)
  images/       # hero/, services/, doctors/  (replace SVG placeholders with real photos)
  favicon.ico
server.js       # cPanel Node.js entrypoint
next.config.mjs # Security headers + image config
tailwind.config.js
```

## 4. Adding a new doctor

Open `data/doctors.js` and add a new object:

```js
{
  slug: 'dr-new-name',
  name: 'Dr New Name',
  role: 'General Practitioner',
  image: '/images/doctors/dr-new-name.jpg',
  credentials: 'MBBS, FRACGP',
  gender: 'Female',
  languages: ['English'],
  specialInterests: ['...'],
  bio: '...',
  education: ['...'],
}
```

Drop the portrait into `public/images/doctors/` with the matching file name. A detail page is generated automatically at `/team/dr-new-name`.

## 5. Adding / editing a service

Edit `data/services.js`. Each entry creates a detail page at `/services/<slug>` with a "Read More" from the home page and services list.

## 6. Replacing images

All placeholder SVGs live under `public/images/`. Replace them with real, optimised JPG/WEBP photos while keeping the same file names (or update the `image:` field in the relevant data file).

## 7. Updating contact info / hours / branding

Edit `data/site.js` — phone, email, address, opening hours, nav and social links all come from here.

## 8. Deploying to cPanel (Node.js App)

1. In cPanel open **Setup Node.js App** → **Create Application**.
2. Node version: **18+** — Mode: **Production** — Application root: upload this folder.
3. Application startup file: `server.js`.
4. Click **Run NPM Install**.
5. Open the virtual environment terminal (button in cPanel) and run:
   ```bash
   npm run build
   ```
6. Back on the Node.js App page, click **Restart**.
7. cPanel will proxy your domain to the Node process automatically.

### Environment variables (optional)
- `NODE_ENV=production`
- `PORT` — set automatically by cPanel

## 9. SEO checklist (done)

- [x] Semantic HTML + accessible landmarks
- [x] Per-page `<title>` + description via `metadata` export
- [x] Open Graph + Twitter cards
- [x] `sitemap.xml` (auto) + `robots.txt` (auto)
- [x] JSON-LD `MedicalClinic` structured data
- [x] Canonical URLs, correct language (`en-AU`)
- [x] Optimised images via `next/image`
- [x] Fast: static-rendered pages + compressed output

## 10. Security checklist (done)

- [x] Strict-Transport-Security (HSTS)
- [x] Content-Security-Policy
- [x] X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- [x] `poweredByHeader: false`
- [x] Honeypot field in contact form
- [x] HTTPS redirect in `.htaccess`

## 11. Next steps

- Wire up `components/ContactForm.jsx` to your SMTP / HubSpot / CRM endpoint.
- Replace `site.url`, phone, email and address in `data/site.js`.
- Swap placeholder images in `public/images/`.
- Update `data/doctors.js` with real profiles.
