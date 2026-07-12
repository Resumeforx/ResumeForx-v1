import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import PricingCards from "@/components/PricingCards";
import CtaBanner from "@/components/CtaBanner";
import { plans } from "@/lib/site";

export const metadata: Metadata = { title: "Pricing — ResumeForX" };

const rows = [
  { label: "ATS-optimized resume", vals: [true, true, true, true] },
  { label: "Cover letter", vals: [false, true, true, true] },
  { label: "LinkedIn optimization", vals: [false, false, true, true] },
  { label: "Revisions", vals: ["1", "2", "2", "Unlimited"] },
  { label: "Delivery time", vals: ["48 hr", "24 hr", "24 hr", "24 hr"] },
  { label: "Support window", vals: ["—", "7 days", "7 days", "30 days"] },
  { label: "1:1 WhatsApp consult", vals: [false, false, false, true] },
];

function Cell({ v }: { v: boolean | string }) {
  if (typeof v === "boolean")
    return v ? <span className="text-[15px] text-gold-deep">✓</span> : <span className="text-[15px] text-white/30">—</span>;
  return <span>{v}</span>;
}

export default function PricingPage() {
  return (
    <PageShell>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1140px]">
          <Reveal>
            <div className="mx-auto mb-12 max-w-[600px] pt-5 text-center">
              <span className="font-mono text-[11.5px] font-medium uppercase tracking-[0.14em] text-gold">Pricing</span>
              <h1 className="mt-3.5 font-display text-[clamp(30px,4.4vw,44px)] font-extrabold tracking-tight">Simple, honest pricing</h1>
              <p className="mt-3.5 text-[17px] text-white/60">No hidden fees. No confusing add-ons. Pick what you need, upgrade any time.</p>
            </div>
          </Reveal>

          <PricingCards showAll />

          <Reveal>
            <div className="mt-16 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse">
                <thead>
                  <tr>
                    <th className="border-b border-white/10 px-4 py-3.5 text-left font-mono text-[11px] font-medium uppercase tracking-[0.04em] text-white/60">Feature</th>
                    {plans.map((p) => (
                      <th key={p.name} className="border-b border-white/10 px-4 py-3.5 text-center font-mono text-[11px] font-medium uppercase tracking-[0.04em] text-white/60">
                        {p.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.label}>
                      <td className="border-b border-white/10 px-4 py-3.5 text-[13.5px] font-medium text-white/60">{r.label}</td>
                      {r.vals.map((v, i) => (
                        <td key={i} className="border-b border-white/10 px-4 py-3.5 text-center text-[13.5px]">
                          <Cell v={v} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>
      <CtaBanner />
    </PageShell>
  );
}
