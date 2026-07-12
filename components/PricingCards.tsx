import Link from "next/link";
import { plans, waLink } from "@/lib/site";
import Reveal from "./Reveal";

export default function PricingCards({ showAll = false }: { showAll?: boolean }) {
  const list = showAll ? plans : plans.slice(0, 3);
  return (
    <div className={`mx-auto grid max-w-[940px] gap-5 ${showAll ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
      {list.map((p) => (
        <Reveal key={p.name}>
          <div
            className={`relative flex h-full flex-col rounded-[18px] bg-panel p-7 transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(43,43,43,0.35)] ${
              p.popular ? "border-[1.5px] border-gold shadow-[0_24px_48px_-26px_rgba(229,168,40,0.55)]" : "border border-charcoal/10"
            }`}
          >
            {p.popular && (
              <span className="absolute -top-[13px] left-6 gold-grad-bg rounded-full px-[13px] py-[5px] font-mono text-[11px] font-bold text-[#3A2705]">
                Most popular
              </span>
            )}
            <h3 className="mb-2 text-[15px] font-semibold text-ink-soft">{p.name}</h3>
            <div className="mb-1 font-display text-[38px] font-extrabold tracking-tight text-charcoal">{p.price}</div>
            <p className="mb-5 text-[13px] text-ink-soft">{p.desc}</p>
            <div className="flex-1">
              {p.features.map((f) => (
                <div key={f} className="mb-2.5 flex items-start gap-2.5 text-[13.5px] text-charcoal">
                  <span className="mt-px font-bold text-gold-deep">✓</span>
                  {f}
                </div>
              ))}
            </div>
            <Link
              href={`/checkout?plan=${p.id}`}
              className={`mt-[18px] flex w-full items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                p.popular ? "gold-grad-bg text-[#3A2705]" : "border border-charcoal/10 text-charcoal hover:border-charcoal"
              }`}
            >
              Choose {p.name}
            </Link>
            <a
              href={waLink(`Hi ResumeForX, I have a question about the ${p.name} plan.`)}
              className="mt-2 text-center text-[12.5px] font-medium text-ink-soft underline decoration-charcoal/20 underline-offset-2 hover:text-charcoal"
            >
              or enquire first
            </a>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
