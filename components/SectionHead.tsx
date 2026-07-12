import Reveal from "./Reveal";

export default function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <Reveal>
      <div className="mx-auto mb-[46px] max-w-[600px] text-center">
        <span className="font-mono text-[11.5px] font-medium uppercase tracking-[0.14em] text-gold">{eyebrow}</span>
        <h2 className="mt-3 font-display text-[clamp(28px,3.6vw,40px)] font-bold tracking-tight">{title}</h2>
        {sub && <p className="mt-3.5 text-base text-white/60">{sub}</p>}
      </div>
    </Reveal>
  );
}
