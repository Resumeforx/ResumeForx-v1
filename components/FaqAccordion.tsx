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
          <div key={i} className="border-b border-white/10">
            <button
              onClick={() => setOpenIdx(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-1 py-[20px] text-left font-sans text-[16px] font-semibold text-white"
            >
              {item.q}
              <span className={`flex-none font-mono text-[18px] text-gold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                +
              </span>
            </button>
            <div
              className="overflow-hidden transition-[max-height] duration-300"
              style={{ maxHeight: isOpen ? "220px" : "0px" }}
            >
              <p className="max-w-[580px] px-1 pb-[20px] text-[14.5px] leading-relaxed text-white/60">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
