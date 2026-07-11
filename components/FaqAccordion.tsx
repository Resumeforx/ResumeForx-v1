"use client";
import { useState } from "react";

type Faq = { q: string; a: string };

export default function FaqAccordion({ items }: { items: Faq[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-[700px]">
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={i} className="border-b border-charcoal/10">
            <button
              onClick={() => setOpenIdx(isOpen ? null : i)}
              className="flex w-full items-center justify-between px-1 py-[22px] text-left font-sans text-[15.5px] font-semibold text-charcoal"
            >
              {item.q}
              <span className={`ml-4 flex-none font-mono text-[18px] text-gold-deep transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                +
              </span>
            </button>
            <div
              className="overflow-hidden transition-[max-height] duration-300"
              style={{ maxHeight: isOpen ? "200px" : "0px" }}
            >
              <p className="max-w-[580px] px-1 pb-[22px] text-[14.5px] text-ink-soft">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
