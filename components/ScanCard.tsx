// A real (anonymized) fresher resume, before and after our rewrite.
const before = [
  { text: "Objective: Seeking a challenging role to utilize my skills and grow with the company.", issue: "generic filler" },
  { text: "Worked on a project using Python and did some data analysis.", issue: "vague, no result" },
  { text: "Was responsible for making reports and maintaining Excel sheets.", issue: "duty, not impact" },
  { text: "Completed a 2-month internship at a startup.", issue: "no outcome" },
  { text: "Hardworking, quick learner and a good team player.", issue: "cliché" },
];

const chips = ["Python", "Data Analysis", "SQL", "Leadership"];

export default function ScanCard() {
  return (
    <div className="mx-auto max-w-[820px]">
      <div className="relative grid grid-cols-1 overflow-hidden rounded-[20px] border border-charcoal/10 bg-panel shadow-[0_40px_80px_-40px_rgba(43,43,43,0.3)] sm:grid-cols-2">
        <div className="pointer-events-none absolute left-0 right-0 z-10 h-[120px] animate-sweep bg-gradient-to-b from-transparent via-gold/40 to-transparent shadow-[0_0_30px_rgba(229,168,40,0.3)]" />

        {/* before */}
        <div className="border-b border-charcoal/10 bg-bg-2 p-6 sm:border-b-0 sm:border-r sm:p-7">
          <span className="mb-4 block font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft">Before</span>
          <div className="space-y-3">
            {before.map((b, i) => (
              <div key={i}>
                <p className="text-[12.5px] leading-[1.5] text-ink-soft">{b.text}</p>
                <span className="mt-1 inline-flex items-center gap-1 font-mono text-[10px] font-medium text-[#C0392B]">
                  <span aria-hidden>✕</span> {b.issue}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* after */}
        <div className="p-6 sm:p-7">
          <span className="mb-4 block font-mono text-[11px] uppercase tracking-[0.08em] text-gold-dark">After — ATS optimized</span>

          <p className="mb-3 text-[13px] font-semibold text-charcoal">
            Data Analyst <span className="text-ink-faint">—</span> <span className="text-gold-dark">Python · SQL · Power BI</span>
          </p>

          <div className="space-y-3">
            <div className="flex gap-2">
              <span className="mt-[3px] shrink-0 text-[11px] font-bold text-gold-deep" aria-hidden>✓</span>
              <p className="text-[12.5px] leading-[1.5] text-charcoal">
                Analyzed <span className="font-semibold text-charcoal">50,000+ records</span> in Python to surface trends, cutting reporting time by{" "}
                <span className="rounded bg-gold-tint px-1 font-semibold text-gold-dark">60%</span>.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="mt-[3px] shrink-0 text-[11px] font-bold text-gold-deep" aria-hidden>✓</span>
              <p className="text-[12.5px] leading-[1.5] text-charcoal">
                Built <span className="font-semibold text-charcoal">8 SQL dashboards</span> used weekly by a{" "}
                <span className="font-semibold text-charcoal">5-person</span> team.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="mt-[3px] shrink-0 text-[11px] font-bold text-gold-deep" aria-hidden>✓</span>
              <p className="text-[12.5px] leading-[1.5] text-charcoal">
                Automated Excel reporting, saving{" "}
                <span className="rounded bg-gold-tint px-1 font-semibold text-gold-dark">~10 hrs/month</span> of manual work.
              </p>
            </div>
          </div>

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
