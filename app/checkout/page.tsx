import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import Checkout from "@/components/Checkout";

export const metadata: Metadata = { title: "Checkout — ResumeForX" };

export default function CheckoutPage({ searchParams }: { searchParams: { plan?: string } }) {
  return (
    <PageShell>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1140px]">
          <Reveal>
            <div className="mx-auto mb-10 max-w-[560px] pt-5 text-center">
              <span className="font-mono text-[11.5px] font-medium uppercase tracking-[0.14em] text-gold">Get started</span>
              <h1 className="mt-3.5 font-display text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight">Order your resume</h1>
              <p className="mt-3.5 text-[15px] text-white/60">Fill in a few details, pay securely via UPI, and we&apos;ll start right away.</p>
            </div>
          </Reveal>
          <Reveal>
            <Checkout initialPlan={searchParams.plan ?? null} />
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
