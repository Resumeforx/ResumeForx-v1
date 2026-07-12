"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const rows = [
  { before: "Generic resume", after: "ATS-optimized resume" },
  { before: "Low ATS score", after: "Keyword-rich resume" },
  { before: "Messy format", after: "Clean, professional design" },
  { before: "No interview calls", after: "More interview opportunities" },
];

const RED = "#F26D6D";
const GREEN = "#4ADE80";

export default function ScanCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -12% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative mx-auto max-w-[720px]">
      {/* ambient glow */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -inset-x-6 -inset-y-8 -z-10 rounded-[40px] bg-[radial-gradient(60%_60%_at_50%_40%,rgba(229,168,40,0.12),transparent_70%)] blur-2xl transition-opacity duration-1000 ${
          shown ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)] transition-all duration-700 ease-out ${
          shown ? "translate-y-0 scale-100 opacity-100" : "translate-y-5 scale-[0.98] opacity-0"
        }`}
      >
        {/* top strip: Before → After */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-b border-white/10 px-6 py-4">
          <span className="font-display text-[19px] font-bold" style={{ color: RED }}>Before</span>
          <span className="text-white/30">→</span>
          <span className="text-right font-display text-[19px] font-bold" style={{ color: GREEN }}>After</span>
        </div>

        {/* column headers */}
        <div className="grid grid-cols-2 text-[15px] font-semibold text-white">
          <div className="flex items-center gap-2 border-b border-r border-white/10 px-5 py-3" style={{ background: "rgba(242,109,109,0.07)" }}>
            <span aria-hidden>❌</span> Before
          </div>
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3" style={{ background: "rgba(74,222,128,0.07)" }}>
            <span aria-hidden>✅</span> After
          </div>
        </div>

        {/* comparison rows */}
        {rows.map((r, i) => (
          <div
            key={i}
            style={{ transitionDelay: `${140 + i * 90}ms` }}
            className={`grid grid-cols-2 transition-opacity duration-500 ${shown ? "opacity-100" : "opacity-0"}`}
          >
            <div className="border-b border-r border-white/[0.07] px-5 py-4 text-[15px] text-white/85" style={{ background: "rgba(242,109,109,0.04)" }}>
              {r.before}
            </div>
            <div className="border-b border-white/[0.07] px-5 py-4 text-[15px] text-white/85" style={{ background: "rgba(74,222,128,0.04)" }}>
              {r.after}
            </div>
          </div>
        ))}

        {/* footer: heading + sub + CTA */}
        <div className="px-6 py-6">
          <h3 className="font-display text-[clamp(20px,3.6vw,26px)] font-extrabold leading-tight text-white">
            Your resume, before vs after ResumeForX
          </h3>
          <p className="mt-2 text-[14.5px] leading-snug text-white/60">
            See the transformation in minutes — optimized for ATS and recruiters.
          </p>
          <Link
            href="/checkout"
            className="mt-4 flex items-center justify-between gap-2 rounded-xl border border-white/[0.12] bg-white/[0.04] px-5 py-3.5 text-[15px] font-bold text-white transition-all hover:-translate-y-0.5 hover:border-[#4ADE80]/50 hover:bg-[#4ADE80]/[0.07]"
          >
            <span className="flex items-center gap-2">
              <span style={{ color: GREEN }} aria-hidden>✓</span> Get My Resume Upgraded
            </span>
            <span className="text-white/50">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
