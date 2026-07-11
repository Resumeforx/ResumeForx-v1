import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import ScanCard from "@/components/ScanCard";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = { title: "Samples — ResumeForX" };

const changes = [
  { t: "Keywords surface", d: "Skills recruiters search for are pulled out of buried paragraphs and made scannable." },
  { t: "Formatting clears", d: "Multi-column layouts and tables that break ATS parsing are replaced with clean, readable structure." },
  { t: "Results lead", d: "Vague duties become measurable achievements — the thing recruiters actually stop on." },
];

export default function SamplesPage() {
  return (
    <PageShell>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1140px]">
          <Reveal>
            <div className="mx-auto mb-12 max-w-[600px] pt-5 text-center">
              <span className="font-mono text-[11.5px] font-medium uppercase tracking-[0.14em] text-gold-dark">Proof, not promises</span>
              <h1 className="mt-3.5 font-display text-[clamp(30px,4.4vw,44px)] font-extrabold tracking-tight">See a real transformation</h1>
              <p className="mt-3.5 text-[17px] text-ink-soft">
                We&apos;re a new service, so instead of testimonials we&apos;d rather show you the actual work. Here&apos;s what changes when we rewrite a resume.
              </p>
            </div>
          </Reveal>

          <ScanCard />

          <div className="mx-auto mt-16 grid max-w-[900px] grid-cols-1 gap-5 sm:grid-cols-3">
            {changes.map((c, i) => (
              <Reveal key={c.t}>
                <div className="h-full rounded-2xl border border-charcoal/10 bg-panel p-6">
                  <div className="mb-3 font-display text-[15px] font-bold text-gold-deep">0{i + 1}</div>
                  <h3 className="mb-1.5 text-[15px] font-semibold">{c.t}</h3>
                  <p className="text-[13.5px] leading-[1.55] text-ink-soft">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mx-auto mt-14 max-w-[560px] text-center text-[13.5px] italic text-ink-faint">
              Want to see a full before/after PDF? Message us on WhatsApp and we&apos;ll send a real anonymized sample.
            </p>
          </Reveal>
        </div>
      </section>
      <CtaBanner />
    </PageShell>
  );
}
