# ResumeForX

Production-ready marketing site for ResumeForX — ATS-optimized resume writing for freshers & early-career professionals.

Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**. Fully static, deploys to Vercel in one click.

## Pages
- `/` — Home (hero, ATS-scan animation, pain points, how it works, testimonials, pricing preview, FAQ)
- `/pricing` — Four plans + comparison table
- `/about` — Story & values
- `/samples` — Before/after transformation
- `/faq` — Full FAQ
- `/contact` — WhatsApp-first contact

## Before you launch — edit these
All in **`lib/site.ts`**:
- `whatsapp` — replace `910000000000` with the real WhatsApp number (country code + number, no `+` or spaces)
- `email` — real contact email
- `testimonials` — replace the placeholder reviews with real client feedback as it comes in
- `plans` — adjust pricing/features if needed

## Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build
```bash
npm run build
```

## Deploy to Vercel
1. Push this repo to GitHub (see below)
2. Go to vercel.com → New Project → import the repo
3. Framework preset auto-detects **Next.js** → Deploy. Done.

## Logo
The circular logo lives at `public/logo.png`. Replace that file to swap the logo everywhere.
