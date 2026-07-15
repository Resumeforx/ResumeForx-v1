import Link from "next/link";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import ScanCard from "@/components/ScanCard";
import PricingCards from "@/components/PricingCards";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import { waLink, faqs, testimonials } from "@/lib/site";

const steps = [
  { n: "01", t: "Send your details", d: "Your current resume or details on WhatsApp. 5 minutes, that's it." },
  { n: "02", t: "We rewrite & optimize", d: "Built for ATS software and human recruiters at the same time." },
  { n: "03", t: "Apply with confidence", d: "Word + PDF, ready to send, in 24–48 hours." },
];

export default function Home() {
  return (
    <PageShell>
      {/* ===== HERO ===== */}
      <section className="grain relative overflow-hidden px-5 pb-14 pt-12 sm:pt-16">
        <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(229,168,40,0.22),transparent)]" />
        <div className="relative mx-auto max-w-[900px] text-center">
          <Reveal>
            <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.06em] text-gold sm:text-[11px] sm:tracking-[0.14em]">
              ATS-optimized · for freshers &amp; early-career
            </span>
            <h1 className="mx-auto mt-4 max-w-[860px] font-display text-[clamp(42px,8.2vw,86px)] font-extrabold leading-[0.98] tracking-[-0.02em] text-white">
              Resumes that <span className="mark whitespace-nowrap">get you hired</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-[520px] text-[clamp(16px,2.2vw,20px)] leading-snug text-white/70">
              We clear the software filters and land you the interview calls.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={waLink()} className="gold-grad-bg rounded-full px-7 py-3.5 text-[15px] font-bold text-[#3A2705] transition-transform hover:-translate-y-0.5">
                Get my resume →
              </a>
              <Link href="/samples" className="rounded-full border border-white/20 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5">
                See the difference
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <div className="mx-auto mt-11 flex max-w-[640px] items-stretch justify-center divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
              {[
                { n: "24–48h", l: "Delivery", gold: true },
                { n: "ATS", l: "Score proof", gold: false },
                { n: "100%", l: "Human-written", gold: false },
              ].map((s) => (
                <div key={s.l} className="flex-1 px-3 py-4">
                  <div className={`font-display text-[clamp(22px,4vw,30px)] font-extrabold ${s.gold ? "gold-text" : "text-white"}`}>{s.n}</div>
                  <div className="mt-0.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-white/45">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== TRUST VIDEO ===== */}
      <section className="px-5 py-12">
        <div className="mx-auto max-w-[880px]">
          <Reveal>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">Watch first</span>
                <h2 className="mt-2 font-display text-[clamp(26px,4.6vw,42px)] font-extrabold leading-[1.02] tracking-tight text-white">
                  See it in 60 seconds
                </h2>
              </div>
              <span className="hidden font-mono text-[12px] text-white/30 sm:block">/ 01</span>
            </div>
          </Reveal>
          <Reveal>
            <div className="mx-auto aspect-[9/16] w-full max-w-[380px] overflow-hidden rounded-[20px] border border-white/10 bg-[#1C1917] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)]">
              <video
                className="h-full w-full object-cover"
                src="/videos/intro.mp4"
                poster="/videos/intro-poster.jpg"
                controls
                playsInline
                preload="metadata"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== BEFORE / AFTER ===== */}
      <section className="px-5 py-12">
        <div className="mx-auto mb-7 max-w-[880px]">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">The rewrite</span>
                <h2 className="mt-2 font-display text-[clamp(26px,4.6vw,42px)] font-extrabold leading-[1.02] tracking-tight text-white">
                  Same you, <span className="mark">restructured</span>
                </h2>
              </div>
              <span className="hidden font-mono text-[12px] text-white/30 sm:block">/ 02</span>
            </div>
          </Reveal>
        </div>
        <ScanCard />
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how" className="px-5 py-12">
        <div className="mx-auto max-w-[1080px]">
          <Reveal>
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">The process</span>
                <h2 className="mt-2 font-display text-[clamp(26px,4.6vw,42px)] font-extrabold leading-[1.02] tracking-tight text-white">
                  Three steps. Done for you.
                </h2>
              </div>
              <span className="hidden font-mono text-[12px] text-white/30 sm:block">/ 03</span>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {steps.map((s) => (
              <Reveal key={s.n}>
                <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all hover:border-gold/40 hover:bg-white/[0.05]">
                  <div className="font-display text-[40px] font-extrabold leading-none text-white/12">{s.n}</div>
                  <h3 className="mt-3 text-[18px] font-bold text-white">{s.t}</h3>
                  <p className="mt-1.5 text-[14px] leading-snug text-white/55">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROOF: payments + reviews ===== */}
      <section id="proof" className="px-5 py-12">
        <div className="mx-auto max-w-[1080px]">
          <Reveal>
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">Real orders</span>
                <h2 className="mt-2 font-display text-[clamp(26px,4.6vw,42px)] font-extrabold leading-[1.02] tracking-tight text-white">
                  Students who <span className="mark">got the call</span>
                </h2>
              </div>
              <span className="hidden font-mono text-[12px] text-white/30 sm:block">/ 04</span>
            </div>
          </Reveal>

          {/* real WhatsApp reviews from clients (sensitive details blurred) */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <Reveal key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/proof/${i}.jpg`}
                  alt="Real client review on WhatsApp"
                  loading="lazy"
                  className="w-full rounded-2xl border border-white/10 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.85)]"
                />
              </Reveal>
            ))}
          </div>
          <p className="mt-4 text-center font-mono text-[11px] text-white/35">
            Real messages from clients on WhatsApp.
          </p>

          {/* short reviews */}
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <Reveal key={t.name}>
                <div className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
                  <div className="mb-3 tracking-[3px] text-gold">★★★★★</div>
                  <p className="flex-1 text-[14.5px] leading-relaxed text-white/80">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-4 text-[13px] font-semibold text-white">
                    {t.name} <span className="font-normal text-white/45">· {t.role}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="px-5 py-12">
        <div className="mx-auto max-w-[1080px]">
          <Reveal>
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">Pricing</span>
                <h2 className="mt-2 font-display text-[clamp(26px,4.6vw,42px)] font-extrabold leading-[1.02] tracking-tight text-white">
                  Simple, honest pricing
                </h2>
              </div>
              <span className="hidden font-mono text-[12px] text-white/30 sm:block">/ 05</span>
            </div>
          </Reveal>
          <PricingCards />
          <div className="mt-7 text-center">
            <Link href="/pricing" className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-gold transition-all hover:gap-2.5">
              Full pricing &amp; premium plan →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="px-5 py-12">
        <div className="mx-auto max-w-[760px]">
          <Reveal>
            <h2 className="mb-6 font-display text-[clamp(26px,4.6vw,42px)] font-extrabold leading-[1.02] tracking-tight text-white">
              Questions, answered
            </h2>
          </Reveal>
          <FaqAccordion items={faqs.slice(0, 5)} />
        </div>
      </section>

      <CtaBanner />
    </PageShell>
  );
}
