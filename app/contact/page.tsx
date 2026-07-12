import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = { title: "Contact — ResumeForX" };

export default function ContactPage() {
  return (
    <PageShell>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[620px]">
          <Reveal>
            <div className="mb-12 pt-5 text-center">
              <span className="font-mono text-[11.5px] font-medium uppercase tracking-[0.14em] text-gold">Get in touch</span>
              <h1 className="mt-3.5 font-display text-[clamp(30px,4.4vw,44px)] font-extrabold tracking-tight">Let&apos;s get you hired</h1>
              <p className="mt-3.5 text-[17px] text-white/60">
                The fastest way to start is WhatsApp — send your current resume or just say hi, and we&apos;ll take it from there.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-[20px] border border-white/10 bg-white/[0.035] p-8 text-center">
              <a
                href={waLink()}
                className="inline-flex items-center gap-2 gold-grad-bg rounded-lg px-7 py-3.5 text-[15px] font-semibold text-[#3A2705] transition-transform hover:-translate-y-0.5"
              >
                💬 Message us on WhatsApp
              </a>
              <div className="mt-8 space-y-3 text-sm text-white/60">
                <p>
                  Email:{" "}
                  <a href={`mailto:${site.email}`} className="font-medium text-white underline decoration-gold/50 underline-offset-2">
                    {site.email}
                  </a>
                </p>
                <p className="text-[13px] text-white/45">Typical reply time: within a few hours, 7 days a week.</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-8 rounded-2xl border border-dashed border-white/20 bg-white/[0.02] p-6 text-center">
              <p className="text-[13.5px] text-white/60">
                <span className="font-semibold text-white">What to send:</span> your current resume (if you have one), the roles or companies you&apos;re targeting, and any specific achievements you want highlighted. That&apos;s enough for us to get started.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
