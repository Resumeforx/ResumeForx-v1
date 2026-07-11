import Link from "next/link";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import ScanCard from "@/components/ScanCard";
import SectionHead from "@/components/SectionHead";
import PricingCards from "@/components/PricingCards";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import { waLink, faqs, testimonials } from "@/lib/site";

const pains = [
  { t: "No keywords", d: "Generic resumes miss the exact terms recruiters' software searches for." },
  { t: "Bad formatting", d: "Tables and columns that look nice but ATS software reads as garbled." },
  { t: "Duties, not results", d: "Listing responsibilities instead of outcomes recruiters actually care about." },
  { t: "One resume, every role", d: "The same file sent everywhere — tailored to nothing in particular." },
];

const steps = [
  { n: "01", t: "Share your details", d: "Send your current resume or details over WhatsApp or our short form. Takes about 5 minutes." },
  { n: "02", t: "We write & optimize", d: "A career-focused rewrite, structured for ATS software and human recruiters at the same time." },
  { n: "03", t: "Apply with confidence", d: "Get Word and PDF versions, ready to send, with a summary of what changed and why." },
];

const avatarBg = ["from-gold-deep to-gold", "from-charcoal-2 to-charcoal", "from-gold-dark to-gold-deep"];

export default function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1a1a1a] px-6 pb-12 pt-14">
        {/* soft gold glow behind the headline */}
        <div className="pointer-events-none absolute left-1/2 top-[-140px] h-[440px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(229,168,40,0.20),transparent)]" />
        <div className="relative mx-auto max-w-[740px] text-center">
          <Reveal>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.05em] text-gold">
              ATS-optimized · For freshers &amp; early-career
            </span>
            <h1 className="my-5 font-display text-[clamp(36px,5.6vw,62px)] font-extrabold leading-[1.08] tracking-tight text-white">
              We build resumes that <span className="gold-text">get you hired.</span>
            </h1>
            <p className="mx-auto mb-8 max-w-[430px] text-[17px] leading-[1.5] text-white/85">
              A resume that clears ATS software and lands more interview calls.
            </p>
            <div className="flex flex-wrap justify-center gap-3.5">
              <a href={waLink()} className="gold-grad-bg rounded-lg px-[26px] py-3.5 text-sm font-semibold text-[#3A2705] transition-transform hover:-translate-y-0.5">
                Get my resume now
              </a>
              <Link href="/samples" className="rounded-lg border border-white/20 px-[26px] py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5">
                View sample resume
              </Link>
            </div>
            <p className="mt-7 font-mono text-xs uppercase tracking-[0.12em] text-white/40">Delivered in 24–48 hours</p>
          </Reveal>

          <Reveal>
            <div className="mx-auto mt-10 flex max-w-[760px] flex-wrap overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              {[
                { n: "24–48h", l: "Typical turnaround", gold: true },
                { n: "ATS", l: "Score proof included", gold: false },
                { n: "100%", l: "Human written, not templated", gold: false },
              ].map((s, i) => (
                <div key={i} className={`min-w-[150px] flex-1 px-5 py-6 text-center ${i < 2 ? "border-b border-white/[0.08] sm:border-b-0 sm:border-r" : ""}`}>
                  <div className={`font-display text-[26px] font-bold ${s.gold ? "gold-text" : "text-white"}`}>{s.n}</div>
                  <div className="mt-1 text-[12.5px] text-white/60">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SCAN */}
      <section className="px-6 py-15" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <ScanCard />
      </section>

      {/* PAIN */}
      <section id="pain" className="px-6 py-20">
        <div className="mx-auto max-w-[1140px]">
          <SectionHead
            eyebrow="The problem"
            title="Why good resumes get rejected before a human sees them"
            sub="Most companies scan applications with software first. A resume built for people alone often never makes it past that filter."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pains.map((p) => (
              <Reveal key={p.t}>
                <div className="h-full rounded-[14px] border border-charcoal/10 bg-panel p-6 transition-all hover:-translate-y-1 hover:border-gold/40">
                  <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-[#FBEAE7] text-[15px] font-bold text-[#C0392B]">✕</div>
                  <h3 className="mb-1.5 text-[15.5px] font-semibold">{p.t}</h3>
                  <p className="text-[13.5px] leading-[1.55] text-ink-soft">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="bg-charcoal px-6 py-20 text-[#EDEDEA]">
        <div className="mx-auto max-w-[1140px]">
          <Reveal>
            <div className="mx-auto mb-[46px] max-w-[600px] text-center">
              <span className="font-mono text-[11.5px] font-medium uppercase tracking-[0.14em] text-gold">The process</span>
              <h2 className="mt-3 font-display text-[clamp(28px,3.6vw,40px)] font-bold tracking-tight text-white">How it works</h2>
              <p className="mt-3.5 text-base text-[#B4B4AE]">Three steps, most of it done for you.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <Reveal key={s.n}>
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7 transition-all hover:border-gold/40 hover:bg-white/[0.06]">
                  <div className="mb-3.5 flex items-center gap-2 font-display text-[15px] font-bold text-gold">
                    {s.n}
                    <span className="h-px flex-1 bg-gold/30" />
                  </div>
                  <h3 className="mb-2 text-[17px] font-semibold text-white">{s.t}</h3>
                  <p className="text-sm text-[#B4B4AE]">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-bg-2 px-6 py-20">
        <div className="mx-auto max-w-[1140px]">
          <SectionHead eyebrow="Early feedback" title="What people are saying" sub="Real words from the first people we've helped." />
          <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name}>
                <div className="flex h-full flex-col rounded-2xl border border-charcoal/10 bg-panel p-6 transition-all hover:-translate-y-1 hover:shadow-[0_22px_44px_-28px_rgba(43,43,43,0.3)]">
                  <div className="mb-3.5 tracking-[2px] text-gold">★★★★★</div>
                  <p className="mb-5 flex-1 text-[14.5px] leading-relaxed text-charcoal">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className={`flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gradient-to-br ${avatarBg[i]} font-display text-base font-bold text-white`}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-charcoal">{t.name}</div>
                      <div className="text-[12.5px] text-ink-soft">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-[640px] text-center text-[13.5px] italic text-ink-faint">
            Placeholder examples — replace with real client reviews (name, role, quote) as they come in.
          </p>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1140px]">
          <SectionHead eyebrow="Pricing" title="Simple, honest pricing" sub="No hidden fees. Pick what you need." />
          <PricingCards />
          <div className="mt-8 text-center">
            <Link href="/pricing" className="inline-flex items-center gap-1.5 font-semibold text-gold-dark transition-all hover:gap-2.5">
              See full pricing &amp; premium plan →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-2 px-6 py-20">
        <div className="mx-auto max-w-[1140px]">
          <SectionHead eyebrow="Questions" title="Frequently asked" />
          <FaqAccordion items={faqs.slice(0, 5)} />
        </div>
      </section>

      <CtaBanner />
    </PageShell>
  );
}
