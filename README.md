# Kolawole Taiwo Olawale — Professional Website

A production-ready, single-page professional website for **Kolawole Taiwo Olawale** —
Business Operations & Performance Professional | Power BI Data Analyst, Lagos, Nigeria.

Built as a carefully structured digital professional profile: fast, accessible,
responsive, and easy to maintain. All changeable content lives in typed data
files — no content is scattered through components.

---

## 1. Technology stack

| Layer      | Choice                                        |
| ---------- | --------------------------------------------- |
| Framework  | React 19 + TypeScript (strict)                |
| Build      | Vite                                          |
| Styling    | Tailwind CSS v4 (design tokens via `@theme`)  |
| Icons      | lucide-react (+ two inline brand SVG glyphs)  |
| Testing    | Vitest + Testing Library; optional Playwright QA script |
| Linting    | ESLint (flat config) with typescript-eslint   |

No router, no state library, no backend, no database, no CMS.

## 2. Prerequisites

- Node.js 20.19+ (or 22+)
- npm 10+

## 3. Installation

```bash
npm install
```

## 4. Local development

```bash
npm run dev        # start dev server (http://localhost:5173)
```

## 5. Production build & preview

```bash
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally (http://localhost:4173)
```

## 6. Quality checks

```bash
npm run lint       # ESLint
npm run test       # Vitest (content-integrity + link-format + component tests)
node scripts/browser-qa.mjs   # optional: real-browser QA (needs a running
                              # preview server and `npx playwright install chromium`)
```

`scripts/browser-qa.mjs` checks console errors, anchor navigation, sticky-header
offsets, conditional links, disclosure behaviour, reduced-motion support and
horizontal overflow at 320/375/390/430/768/1024/1280/1440/1920 px, and saves
screenshots. It is dev tooling only and is excluded from ESLint.

## 7. Project structure

```text
src/
├── components/
│   ├── layout/          Header.tsx (sticky nav + mobile menu), Footer.tsx
│   ├── sections/        Hero, Impact, About, Expertise, Experience,
│   │                    FeaturedProject, Credentials, Leadership, Contact
│   └── ui/              Container, SectionHeading, Button, Reveal, SocialIcon
├── config/
│   └── site.ts          Site identity, navigation, SEO, contact channels,
│                        social links, WhatsApp number, CV download
├── data/
│   ├── profile.ts       Hero copy, about paragraphs, impact metrics
│   ├── experience.ts    Complete employment record (featured + earlier)
│   ├── expertise.ts     Four expertise areas
│   ├── projects.ts      Project array (featured project)
│   ├── credentials.ts   Certifications + education
│   └── leadership.ts    Voluntary leadership roles
├── hooks/               useActiveSection (scroll-spy), useScrolled
├── lib/
│   ├── links.ts         tel:/mailto:/wa.me builders, social-link filtering
│   └── __tests__/       unit tests for link builders
├── styles/globals.css   Design tokens (@theme), base styles, reveal/motion CSS
├── types/index.ts       Content interfaces
├── App.tsx              Page composition (section order lives here)
└── main.tsx             Entry point (adds the `js` class for reveal styles)

public/
├── favicon.svg
├── robots.txt
├── images/
│   ├── profile_img.svg    ← replace with the real portrait
│   └── dashboard-placeholder.svg  ← replace with the real dashboard screenshot
└── cv/                            ← place the CV PDF here to enable download
```

## 8. Where professional information is stored

Everything a maintainer edits is in `src/config/site.ts` and `src/data/*.ts`.
Components contain **no** contact details, dates, job titles, certifications,
links or metrics — they only present the typed data.

## 9. How to change the profile photograph

1. Add the photo to `public/images/` (e.g. `public/images/kolawole.jpg`,
   roughly 4:5 ratio, ~1200×1500 px recommended).
2. In `src/data/profile.ts` change one line:
   ```ts
   image: { src: "/images/kolawole.jpg", alt: "Kolawole Taiwo Olawale" },
   ```
   That is the only reference. Update the `alt` text to describe the real photo.
3. Optionally update `og:image` in `index.html` to the same path.

## 10. How to update social links

In `src/config/site.ts`:

```ts
socialLinks: {
  linkedin: "https://www.linkedin.com/in/real-profile", // or null = hidden
  twitter: null,
  instagram: null,
  facebook: null,
},
```

`null` keeps the icon hidden everywhere (contact section + footer). Never add
placeholder URLs. To enable WhatsApp, set `whatsappNumber` to the confirmed
WhatsApp-enabled number in international format (e.g. `"+2347038600293"`) —
until then the WhatsApp button stays hidden.

## 11. How to add projects

Append to the array in `src/data/projects.ts`:

```ts
{
  id: "sales-performance-dashboard",
  name: "Sales Performance Dashboard",
  summary: "…",
  technologies: ["Power BI", "DAX"],
  details: ["…"],
  image: { src: "/images/sales-dashboard.png", alt: "…", caption: null },
  projectUrl: "https://real-link.example", // null hides the "View project" button
  isFeatured: true, // the featured section renders the first isFeatured project
}
```

Set `caption: null` once the screenshot is genuine; keep a caption such as
"Illustrative preview…" while a placeholder image is in use.

## 12. How to update experience and certifications

- **Experience** — `src/data/experience.ts`. Keep the full record; set
  `isFeatured: true` on the roles that should show before the
  "View earlier experience" disclosure. The disclosure count updates itself.
- **Certifications / education** — `src/data/credentials.ts`. Set
  `isHighlighted: true` on at most one credential for the emphasized card, and
  fill `credentialUrl` only with a genuine verification link.
- **Metrics** — `impactMetrics` in `src/data/profile.ts`. Always keep the
  `context` line so each figure stays attributed to its role.

## 13. How to replace the CV

1. Put the PDF in `public/cv/` (e.g. `public/cv/kolawole-taiwo-olawale.pdf`).
2. In `src/config/site.ts`:
   ```ts
   cvDownload: {
     path: "/cv/kolawole-taiwo-olawale.pdf",
     fileName: "Kolawole-Taiwo-Olawale-CV.pdf",
   },
   ```
   The download button appears automatically. Keep the extension truthful
   (a `.docx` must be linked as `.docx`, never presented as a PDF).

## 14. How to update colors and fonts

All tokens live once in `src/styles/globals.css` under `@theme`:

```css
--color-navy / -deep / -soft   brand navy family
--color-teal / -hover / -tint  interactive accent
--color-gold / -soft / -tint   restrained accent
--color-canvas / -surface / -ink / -muted / -line …
--font-display (Plus Jakarta Sans) / --font-body (Inter)
--shadow-card / -lift / -frame
```

Components use semantic classes (`bg-navy`, `text-muted`, `shadow-card`…), so a
palette change here restyles the whole site. Fonts load from Google Fonts in
`index.html` — swap the `<link>` and the two `--font-*` tokens together.

## 15. How to configure a domain

1. Point the domain at your host (below).
2. In `src/config/site.ts` set `seo.canonicalUrl: "https://your-real-domain/"`.
3. In `index.html` uncomment the `<link rel="canonical">` tag and set the URL;
   also add `og:url` if desired.
4. Optionally add a `Sitemap:` line to `public/robots.txt`.

## 16. Deployment

The build output is fully static (`dist/`), so any static host works:

- **Vercel / Netlify:** import the repo; build command `npm run build`,
  output directory `dist`.
- **GitHub Pages / cPanel / any web server:** upload the contents of `dist/`.

No environment variables or secrets are required. Serve over HTTPS.

## 17. Known incomplete integrations (by design)

These are intentionally hidden until real data exists — the site never fakes them:

| Item                  | Enable by setting                                    |
| --------------------- | ---------------------------------------------------- |
| Profile photograph    | `profile.hero.image.src` → real file                 |
| Dashboard screenshot  | `projects[0].image.src` → real screenshot, `caption: null` |
| Project link          | `projects[0].projectUrl`                             |
| Social profiles       | `siteConfig.contact.socialLinks.*`                   |
| WhatsApp action       | `siteConfig.contact.whatsappNumber`                  |
| CV download           | `siteConfig.contact.cvDownload`                      |
| Canonical/OG URL      | `siteConfig.seo.canonicalUrl` + `index.html`         |
| Contact form          | Not implemented on purpose — direct email/phone is preferred. If required later, wire a real service (e.g. Formspree/self-hosted endpoint) with validation and spam protection. |

## Content replacement checklist

- [ ] Real portrait photo (`public/images/` + `profile.ts`)
- [ ] Real dashboard screenshot + caption removed (`projects.ts`)
- [ ] Project URL(s) (`projects.ts`)
- [ ] Social profile URLs (`config/site.ts`)
- [ ] Confirmed WhatsApp number (`config/site.ts`)
- [ ] CV PDF in `public/cv/` + `cvDownload` (`config/site.ts`)
- [ ] Production domain: canonical + OG tags (`config/site.ts`, `index.html`)
- [ ] Re-run `npm run lint`, `npm run test`, `npm run build`

---

© Kolawole Taiwo Olawale. Content derived from the supplied CV; no figures,
roles, certifications or links beyond it are claimed.
