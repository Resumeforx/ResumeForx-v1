import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import { faqs } from "@/lib/site";

export const metadata: Metadata = { title: "FAQ — ResumeForX" };

export default function FaqPage() {
  return (
    <PageShell>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1140px]">
          <Reveal>
            <div className="mx-auto mb-12 max-w-[600px] pt-5 text-center">
              <span className="font-mono text-[11.5px] font-medium uppercase tracking-[0.14em] text-gold-dark">Questions</span>
              <h1 className="mt-3.5 font-display text-[clamp(30px,4.4vw,44px)] font-extrabold tracking-tight">Frequently asked questions</h1>
              <p className="mt-3.5 text-[17px] text-ink-soft">Everything you might want to know before getting started.</p>
            </div>
          </Reveal>
          <FaqAccordion items={faqs} />
        </div>
      </section>
      <CtaBanner />
    </PageShell>
  );
}
