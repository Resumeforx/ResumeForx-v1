import { waLink } from "@/lib/site";
import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <div className="mx-auto max-w-[1140px] px-6">
      <Reveal>
        <div className="relative mb-16 overflow-hidden rounded-[24px] bg-charcoal px-10 py-[66px] text-center">
          <div className="pointer-events-none absolute -top-1/2 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full" style={{ background: "radial-gradient(circle, rgba(229,168,40,0.16), transparent 62%)" }} />
          <h2 className="relative font-display text-[clamp(28px,3.8vw,40px)] font-bold text-white">Ready to get noticed?</h2>
          <p className="relative mx-auto mt-3.5 text-base text-[#B4B4AE]">Get an ATS-optimized resume in as little as 24 hours.</p>
          <div className="relative mt-7 flex flex-wrap justify-center gap-3.5">
            <a href={waLink()} className="gold-grad-bg rounded-lg px-[26px] py-3.5 text-sm font-semibold text-[#3A2705] transition-transform hover:-translate-y-0.5">
              Get my resume now
            </a>
            <a href={waLink()} className="rounded-lg border border-white/[0.28] px-[26px] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]">
              Message on WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
