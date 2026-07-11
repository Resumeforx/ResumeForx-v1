"use client";
import { useEffect, useRef, useState } from "react";

// A real (anonymized) fresher resume, before and after our rewrite.
const before = [
  { text: "Objective: Seeking a challenging role to utilize my skills and grow with the company.", issue: "generic filler" },
  { text: "Worked on a project using Python and did some data analysis.", issue: "vague, no result" },
  { text: "Was responsible for making reports and maintaining Excel sheets.", issue: "duty, not impact" },
  { text: "Completed a 2-month internship at a startup.", issue: "no outcome" },
  { text: "Hardworking, quick learner and a good team player.", issue: "cliché" },
];

const chips = ["Python", "Data Analysis", "SQL", "Leadership"];

// Counts from 0 to `to` once `start` flips true. Respects reduced-motion.
function Stat({ to, start, format }: { to: number; start: boolean; format: (v: number) => string }) {
  // initialise at the FINAL value so SSR / no-JS / throttled tabs always show the
  // real number — the count-up below is a progressive enhancement, never required.
  const [val, setVal] = useState(to);
  const ran = useRef(false);
  useEffect(() => {
    if (!start || ran.current) return;
    ran.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(to);
      return;
    }
    setVal(0); // start the count from zero, then animate up
    const dur = 1300;
    let raf = 0;
    let t0 = 0;
    const tick = (t: number) => {
      if (!t0) t0 = t;
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setVal(to);
    };
    raf = requestAnimationFrame(tick);
    // safety net: always land on the final value even if rAF never fires
    // (background/throttled tab) so the number can never get stuck at 0
    const settle = setTimeout(() => setVal(to), dur + 300);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(settle);
    };
  }, [start, to]);
  return <>{format(val)}</>;
}

export default function ScanCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      // fire as soon as the card's top edge scrolls into the lower part of the
      // viewport — reliable for both the short desktop card and the tall stacked
      // mobile card, unlike a fixed visibility fraction.
      { threshold: 0, rootMargin: "0px 0px -15% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // reveal helper — staggered fade/slide, driven by `shown` + a per-item delay
  const rev = (delay: number, from = "y") =>
    ({
      style: { transitionDelay: `${delay}ms` },
      className: `transition-all duration-[600ms] ease-out will-change-transform ${
        shown
          ? "opacity-100 translate-x-0 translate-y-0"
          : from === "l"
          ? "opacity-0 -translate-x-2"
          : from === "r"
          ? "opacity-0 translate-x-2"
          : "opacity-0 translate-y-2"
      }`,
    } as const);

  return (
    <div ref={ref} className="relative mx-auto max-w-[820px]">
      {/* ambient gold glow behind the card */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -inset-x-6 -inset-y-8 -z-10 rounded-[40px] bg-[radial-gradient(60%_60%_at_50%_40%,rgba(229,168,40,0.16),transparent_70%)] blur-2xl transition-opacity duration-1000 ${
          shown ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`group relative grid grid-cols-1 overflow-hidden rounded-[20px] border border-charcoal/10 bg-panel shadow-[0_40px_80px_-40px_rgba(43,43,43,0.3)] transition-all duration-700 ease-out sm:grid-cols-2 ${
          shown ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-[0.985] opacity-0"
        }`}
      >
        {/* scanning beam — the ATS reading the resume */}
        <div className="pointer-events-none absolute left-0 right-0 z-20 h-[2px] animate-sweep bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_0_22px_6px_rgba(229,168,40,0.45)]" />
        {/* soft trailing band under the beam */}
        <div className="pointer-events-none absolute left-0 right-0 z-10 h-[110px] animate-sweep bg-gradient-to-b from-gold/15 to-transparent" />

        {/* before */}
        <div className="relative border-b border-charcoal/10 bg-bg-2 p-6 sm:border-b-0 sm:border-r sm:p-7">
          {/* faint scanline texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:repeating-linear-gradient(0deg,#2B2B2B_0,#2B2B2B_1px,transparent_1px,transparent_6px)]"
          />
          <span {...rev(0)} className={`mb-4 block font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft ${rev(0).className}`}>
            Before
          </span>
          <div className="relative space-y-3">
            {before.map((b, i) => (
              <div key={i} {...rev(120 + i * 90, "l")}>
                <p className="text-[12.5px] leading-[1.5] text-ink-soft">{b.text}</p>
                <span
                  style={{ transitionDelay: `${260 + i * 90}ms` }}
                  className={`mt-1 inline-flex items-center gap-1 font-mono text-[10px] font-medium text-[#C0392B] transition-all duration-500 ${
                    shown ? "scale-100 opacity-100" : "scale-90 opacity-0"
                  }`}
                >
                  <span aria-hidden>✕</span> {b.issue}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* after */}
        <div className="relative p-6 sm:p-7">
          <span {...rev(200)} className={`mb-4 block font-mono text-[11px] uppercase tracking-[0.08em] text-gold-dark ${rev(200).className}`}>
            After — ATS optimized
          </span>

          <p {...rev(300, "r")} className={`mb-3 text-[13px] font-semibold text-charcoal ${rev(300, "r").className}`}>
            Data Analyst <span className="text-ink-faint">—</span> <span className="text-gold-dark">Python · SQL · Power BI</span>
          </p>

          <div className="space-y-2">
            {/* bullet 1 */}
            <div {...rev(420, "r")} className={`group/row flex gap-2 rounded-lg p-1.5 transition-colors hover:bg-gold-tint/60 ${rev(420, "r").className}`}>
              <Check />
              <p className="text-[12.5px] leading-[1.5] text-charcoal">
                Analyzed{" "}
                <span className="font-semibold text-charcoal">
                  <Stat to={50000} start={shown} format={(v) => Math.round(v).toLocaleString("en-US") + "+"} /> records
                </span>{" "}
                in Python to surface trends, cutting reporting time by{" "}
                <span className="rounded bg-gold-tint px-1 font-semibold text-gold-dark">
                  <Stat to={60} start={shown} format={(v) => Math.round(v).toString()} />%
                </span>
                .
              </p>
            </div>
            {/* bullet 2 */}
            <div {...rev(520, "r")} className={`group/row flex gap-2 rounded-lg p-1.5 transition-colors hover:bg-gold-tint/60 ${rev(520, "r").className}`}>
              <Check />
              <p className="text-[12.5px] leading-[1.5] text-charcoal">
                Built{" "}
                <span className="font-semibold text-charcoal">
                  <Stat to={8} start={shown} format={(v) => Math.round(v).toString()} /> SQL dashboards
                </span>{" "}
                used weekly by a <span className="font-semibold text-charcoal">5-person</span> team.
              </p>
            </div>
            {/* bullet 3 */}
            <div {...rev(620, "r")} className={`group/row flex gap-2 rounded-lg p-1.5 transition-colors hover:bg-gold-tint/60 ${rev(620, "r").className}`}>
              <Check />
              <p className="text-[12.5px] leading-[1.5] text-charcoal">
                Automated Excel reporting, saving{" "}
                <span className="rounded bg-gold-tint px-1 font-semibold text-gold-dark">
                  ~<Stat to={10} start={shown} format={(v) => Math.round(v).toString()} /> hrs/month
                </span>{" "}
                of manual work.
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {chips.map((c, i) => (
              <span
                key={c}
                style={{ transitionDelay: `${780 + i * 70}ms` }}
                className={`cursor-default rounded-md border border-gold/25 bg-gold-tint px-[9px] py-1 font-mono text-[10.5px] font-medium text-gold-dark transition-all duration-500 hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-[0_6px_14px_-6px_rgba(229,168,40,0.7)] ${
                  shown ? "scale-100 opacity-100" : "scale-90 opacity-0"
                }`}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p
        style={{ transitionDelay: "1000ms" }}
        className={`mt-[22px] text-center text-sm text-ink-soft transition-all duration-700 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}
      >
        Same experience, restructured to pass ATS scanners and catch a recruiter&apos;s eye.
      </p>
    </div>
  );
}

// gold check that pops in
function Check() {
  return (
    <span className="mt-[3px] shrink-0 text-[11px] font-bold text-gold-deep" aria-hidden>
      ✓
    </span>
  );
}
