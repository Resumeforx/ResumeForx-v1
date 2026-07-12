// Central config — edit these values, they flow through the whole site.
export const site = {
  name: "ResumeForX",
  tagline: "We build resumes that get you hired.",
  whatsapp: "919068726751",
  email: "hello@resumeforx.com",
  waMessage: "Hi ResumeForX, I'd like to get my resume done.",
  // UPI ID from the Paytm QR -- payments go here
  upiId: "paytm.s2u34gd@pty",
  // Name shown to the payer in their UPI app
  upiPayeeName: "ResumeForX",
};

export const waLink = (msg: string = site.waMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

// Builds a UPI deep link / QR payload for the exact plan amount.
export const upiLink = (amount: number, note: string) =>
  `upi://pay?pa=${encodeURIComponent(site.upiId)}&pn=${encodeURIComponent(
    site.upiPayeeName
  )}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;

export const plans = [
  {
    id: "basic",
    name: "Basic",
    price: "₹499",
    amount: 499,
    desc: "For freshers & first jobs",
    features: ["ATS-formatted resume", "1 revision", "Word + PDF files", "48 hr delivery"],
    popular: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "₹999",
    amount: 999,
    desc: "Resume + cover letter",
    features: ["Everything in Basic", "Tailored cover letter", "2 revisions", "24 hr priority delivery"],
    popular: true,
  },
  {
    id: "linkedin",
    name: "LinkedIn Bundle",
    price: "₹1,499",
    amount: 1499,
    desc: "Full online + offline presence",
    features: ["Everything in Pro", "LinkedIn optimization", "Keyword-matched headline", "24 hr delivery"],
    popular: false,
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹2,499",
    amount: 2499,
    desc: "Full support through your search",
    features: ["Everything in Bundle", "30-day support window", "Unlimited revisions", "1:1 WhatsApp consult"],
    popular: false,
  },
];

export const findPlan = (id: string | null | undefined) =>
  plans.find((p) => p.id === id) ?? null;

export const faqs = [
  { q: "Will my resume actually pass ATS?", a: "Every resume is formatted and keyword-checked before delivery — no tables, columns or graphics that scanners choke on." },
  { q: "How long does it take?", a: "Most resumes are delivered within 24–48 hours of us receiving your details." },
  { q: "I'm a fresher with no work experience — can you still help?", a: "Yes — most clients are freshers. We build strong resumes from internships, projects, coursework and college activities." },
  { q: "What formats do I get?", a: "Both an editable Word file and a print-ready PDF." },
  { q: "What if I want changes?", a: "Revisions are included with every package — we're not done until you're happy with it." },
  { q: "How do I pay?", a: "UPI, cards or netbanking — a secure payment link is shared once you confirm your package on WhatsApp." },
];

// Real client reviews (from WhatsApp).
export const testimonials = [
  { initials: "SK", name: "Shahnil Khan", role: "Restaurant Ops Manager · Dubai", quote: "Thank you so much for making my ATS CV. The formatting is clean, keywords are placed perfectly, and it looks very professional. Exactly what I needed for job applications." },
  { initials: "G", name: "Gokul", role: "AML/KYC Analyst · Banking", quote: "Fantastic job tailoring my resume for banking compliance. They knew exactly which keywords to highlight and how to reframe my experience to match what recruiters want right now. Efficient, insightful, great communication." },
  { initials: "M", name: "Maree", role: "Verified client", quote: "Really happy with the final result. The CV looks professional, well-structured, and easy to read — and properly ATS-friendly. I'll definitely recommend the service to others." },
];
