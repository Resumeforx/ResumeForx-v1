import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = { title: "About — ResumeForX" };

const values = [
  { t: "Human-written, always", d: "No auto-generated templates. Every resume is written and reviewed by a person who reads your background." },
  { t: "Built for the Indian job market", d: "We understand what recruiters and ATS systems here actually look for — from campus placements to first jobs." },
  { t: "Honest about what we can do", d: "We don't promise jobs. We promise a resume that gives you the best possible chance of being seen." },
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[760px]">
          <Reveal>
            <div className="mb-12 pt-5 text-center">
              <span className="font-mono text-[11.5px] font-medium uppercase tracking-[0.14em] text-gold">About us</span>
              <h1 className="mt-3.5 font-display text-[clamp(30px,4.4vw,44px)] font-extrabold tracking-tight">
                Resumes that get past the bots — and impress the humans.
              </h1>
            </div>
          </Reveal>
          <Reveal>
            <div className="space-y-5 text-[16px] leading-relaxed text-white/60">
              <p>
                ResumeForX started with a simple frustration: talented people — especially freshers and early-career professionals — were getting rejected before a recruiter ever read their resume. Not because they weren&apos;t good enough, but because their resume wasn&apos;t built for the software that screens it first.
              </p>
              <p>
                We fix that. We write resumes that are structured to pass Applicant Tracking Systems (ATS) while still reading beautifully to the human recruiter on the other side. Clear formatting, the right keywords, and achievements that actually stand out.
              </p>
              <p>
                We&apos;re a small, focused team — which means every resume gets real attention, fast turnaround, and honest advice about what will and won&apos;t help you.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {values.map((v) => (
              <Reveal key={v.t}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                  <div className="mb-3 h-8 w-8 rounded-lg gold-grad-bg" />
                  <h3 className="mb-1.5 text-[15px] font-semibold">{v.t}</h3>
                  <p className="text-[13.5px] leading-[1.55] text-white/60">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </PageShell>
  );
}
