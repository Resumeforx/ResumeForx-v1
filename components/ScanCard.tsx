const beforeBars = [
  { w: "70%", flag: false }, { w: "92%", flag: true }, { w: "55%", flag: false },
  { w: "80%", flag: true }, { w: "64%", flag: false }, { w: "88%", flag: true }, { w: "48%", flag: false },
];
const chips = ["Python", "Data Analysis", "Leadership", "SQL"];

export default function ScanCard() {
  return (
    <div className="mx-auto max-w-[780px]">
      <div className="relative grid grid-cols-1 overflow-hidden rounded-[20px] border border-charcoal/10 bg-panel shadow-[0_40px_80px_-40px_rgba(43,43,43,0.3)] sm:grid-cols-2">
        <div className="pointer-events-none absolute left-0 right-0 z-10 h-[120px] animate-sweep bg-gradient-to-b from-transparent via-gold/45 to-transparent shadow-[0_0_30px_rgba(229,168,40,0.3)]" />
        {/* before */}
        <div className="bg-bg-2 p-7">
          <span className="mb-[18px] block font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft">Before</span>
          {beforeBars.map((b, i) => (
            <div key={i} className="relative mb-[11px] h-[9px] rounded" style={{ width: b.w, background: "#CFCEC8" }}>
              {b.flag && <span className="absolute -right-0.5 -top-[3px] text-[10px] font-bold text-[#C0392B]">✕</span>}
            </div>
          ))}
        </div>
        {/* after */}
        <div className="p-7">
          <span className="mb-[18px] block font-mono text-[11px] uppercase tracking-[0.08em] text-gold-dark">After — ATS optimized</span>
          <div className="mb-[11px] h-[9px] rounded" style={{ width: "85%", background: "#FBF1DC" }} />
          <div className="mb-[11px] h-[9px] rounded" style={{ width: "92%", background: "#E0DED6" }} />
          <div className="mb-[11px] h-[9px] rounded" style={{ width: "78%", background: "#E0DED6" }} />
          <div className="mb-[11px] h-[9px] rounded" style={{ width: "88%", background: "#E0DED6" }} />
          <div className="mt-4 flex flex-wrap gap-1.5">
            {chips.map((c) => (
              <span key={c} className="rounded-md border border-gold/25 bg-gold-tint px-[9px] py-1 font-mono text-[10.5px] font-medium text-gold-dark">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-[22px] text-center text-sm text-ink-soft">
        Same experience, restructured to pass ATS scanners and catch a recruiter&apos;s eye.
      </p>
    </div>
  );
}
