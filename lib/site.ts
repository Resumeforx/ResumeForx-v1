// Central config — edit these values, they flow through the whole site.
export const site = {
  name: "ResumeForX",
  tagline: "We build resumes that get you hired.",
  // TODO: replace with the real WhatsApp number (country code + number, no + or spaces)
  whatsapp: "910000000000",
  email: "hello@resumeforx.com",
  waMessage: "Hi ResumeForX, I'd like to get my resume done.",
};

export const waLink = (msg: string = site.waMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const plans = [
  {
    name: "Basic",
    price: "₹499",
    desc: "For freshers & first jobs",
    features: ["ATS-formatted resume", "1 revision", "Word + PDF files", "48 hr delivery"],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹999",
    desc: "Resume + cover letter",
    features: ["Everything in Basic", "Tailored cover letter", "2 revisions", "24 hr priority delivery"],
    popular: true,
  },
  {
    name: "LinkedIn Bundle",
    price: "₹1,499",
    desc: "Full online + offline presence",
    features: ["Everything in Pro", "LinkedIn optimization", "Keyword-matched headline", "24 hr delivery"],
    popular: false,
  },
  {
    name: "Premium",
    price: "₹2,499",
    desc: "Full support through your search",
    features: ["Everything in Bundle", "30-day support window", "Unlimited revisions", "1:1 WhatsApp consult"],
    popular: false,
  },
];

export const faqs = [
  { q: "Will my resume actually pass ATS?", a: "Every resume is formatted and keyword-checked before delivery — no tables, columns or graphics that scanners choke on." },
  { q: "How long does it take?", a: "Most resumes are delivered within 24–48 hours of us receiving your details." },
  { q: "I'm a fresher with no work experience — can you still help?", a: "Yes — most clients are freshers. We build strong resumes from internships, projects, coursework and college activities." },
  { q: "What formats do I get?", a: "Both an editable Word file and a print-ready PDF." },
  { q: "What if I want changes?", a: "Revisions are included with every package — we're not done until you're happy with it." },
  { q: "How do I pay?", a: "UPI, cards or netbanking — a secure payment link is shared once you confirm your package on WhatsApp." },
];

// Placeholder reviews — replace with real client feedback (name, role, quote) as it comes in.
export const testimonials = [
  { initials: "AK", name: "Ankit K.", role: "B.Tech fresher, Delhi", quote: "I'd applied to 30+ companies with no callbacks. After the rewrite I got three interview calls in the first week. The formatting alone made a huge difference." },
  { initials: "SR", name: "Sneha R.", role: "MBA graduate, Pune", quote: "Fast, professional and actually listened to what I wanted. They turned my messy internship experience into a real professional profile." },
  { initials: "MV", name: "Manish V.", role: "Early-career, Bangalore", quote: "Got both my resume and LinkedIn done. Recruiters started reaching out within days. Worth every rupee for a fresher on a budget." },
];
