# Sanduni Hulathdoowage — Portfolio

A personal portfolio site built with **React + Vite + Tailwind CSS**, featuring a purple/gold color theme, full light & dark mode support, and a fully responsive layout.

## Sections

- **Hero** — intro, tagline, signature "seal" badge
- **About** — bio + quick stats
- **Services** — what you offer
- **Resume** — tabbed Experience / Education / Skills / Certificates
- **Research** — publications list
- **Projects** — project cards with tags and links
- **Gallery** — image grid with lightbox
- **Contact** — contact details, socials, and a message form (static demo)

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build → outputs to /dist
npm run preview   # preview the production build locally
```

Requires Node.js 18+.

## Editing content

Almost everything text-related — your name, bio, experience, skills,
projects, certificates, research, gallery images, and contact info —
lives in one file:

```
src/data/portfolio.js
```

Edit that file and the whole site updates. No need to touch component code
for routine content changes.

## Changing the color theme

The entire color system is centralized in **one file**:

```
src/index.css
```

Look for the `:root { ... }` block (light mode) and the `.dark { ... }`
block (dark mode) near the top of the file. Each defines a purple `--brand`
scale (50 → 950), an `--accent` (currently gold), and text/surface tokens.
Change the hex values there and every component — buttons, badges, borders,
gradients — updates automatically, since components reference these via
Tailwind classes like `bg-brand-600`, `text-accent`, `bg-surface`, etc.

Fonts, animation timings, and other design tokens live in
`tailwind.config.js` if you want to go further.

## Dark mode

Dark mode uses Tailwind's `class` strategy. A toggle button in the navbar
switches the `dark` class on `<html>` and persists the choice to
`localStorage` (key: `sh-theme`). It also respects the visitor's OS-level
preference on first visit.

## Deploying

The production build in `/dist` after `npm run build` is fully static and
can be deployed to Vercel, Netlify, GitHub Pages, Cloudflare Pages, or any
static host.

## Notes

- The contact form is a front-end-only demo. Wire it up to a service like
  Formspree or EmailJS to actually receive messages, or point it at your
  own backend.
- Gallery images are placeholders from Unsplash — swap in your own photos
  in `src/data/portfolio.js`.
- Icons are from lucide-react.
