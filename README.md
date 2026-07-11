# ResumeForX

Production-ready marketing site for ResumeForX — ATS-optimized resume writing for freshers & early-career professionals.

Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**. Fully static, deploys to Vercel in one click.

## Pages
- `/` — Home (hero, ATS-scan animation, pain points, how it works, testimonials, pricing preview, FAQ)
- `/pricing` — Four plans + comparison table
- `/checkout` — Self-serve UPI checkout (details form → payment)
- `/about` — Story & values
- `/samples` — Before/after transformation
- `/faq` — Full FAQ
- `/contact` — WhatsApp-first contact

## Before you launch — edit these
All in **`lib/site.ts`**:
- `whatsapp` — the WhatsApp number payments/orders go to (country code + number, no `+` or spaces). Currently `919068726751`.
- `upiId` — the UPI ID that receives payments. Currently `paytm.s2u34gd@pty` (matches the printed Paytm QR).
- `upiPayeeName` — name shown to the payer in their UPI app
- `email` — real contact email
- `testimonials` — replace the placeholder reviews with real client feedback as it comes in
- `plans` — adjust pricing/features. Each plan needs `id`, a `price` string, and a numeric `amount` (keep the two in sync — `amount` is what the UPI QR charges).

## Payment flow (UPI + WhatsApp)
No payment-gateway account needed — orders are self-serve and reconciled manually:
1. Customer clicks "Choose <plan>" on pricing → `/checkout?plan=<id>`
2. Fills details (name, WhatsApp, email, target role, notes) with basic validation
3. Pays by UPI — a QR is generated for the exact plan amount via the `qrcode` package, with the UPI ID shown as copyable text and the printed Paytm QR (`public/paytm-qr.jpg`) as a fallback
4. Ticks "I've completed the payment" → WhatsApp opens with all their order details pre-filled
5. Customer attaches the payment screenshot and sends. You confirm it manually and start the work.

`wa.me` links can't pre-attach an image, so the screenshot is sent by hand — that instruction on the payment screen is intentional. To swap the fallback QR, replace `public/paytm-qr.jpg`.

## Dependency note
`next` is on **14.2.5**. `npm audit` flags advisories on this version; the same 14.x line has patched
releases (e.g. `14.2.35`) you can bump to when convenient — most flagged issues (Image Optimizer
`remotePatterns`, RSC request deserialization, rewrites) don't apply to this static marketing site.
Avoid `npm audit fix --force`, which jumps to a new major and would break the build.

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
