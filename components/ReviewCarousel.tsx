"use client";

import { useEffect, useState } from "react";
import type { Testimonial } from "@/lib/site";

type ReviewCarouselProps = {
  reviews: Testimonial[];
};

export default function ReviewCarousel({ reviews }: ReviewCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reviews.length < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 6200);

    return () => window.clearInterval(timer);
  }, [paused, reviews.length]);

  if (!reviews.length) return null;

  const review = reviews[activeIndex % reviews.length];
  const move = (direction: number) => {
    setPaused(true);
    setActiveIndex((current) => (current + direction + reviews.length) % reviews.length);
  };

  return (
    <div
      className="relative rounded-[20px] border border-gold/25 bg-[linear-gradient(135deg,rgba(229,168,40,0.1),rgba(255,255,255,0.035)_42%)] p-6 shadow-[0_24px_70px_-36px_rgba(229,168,40,0.6)] sm:p-7"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
      aria-live="polite"
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.15em] text-gold">Approved client feedback</span>
        <span className="font-mono text-[11px] text-white/35">{String(activeIndex + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}</span>
      </div>

      <div className="min-h-[190px]">
        <div className="mb-3 flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
          <span className="tracking-[3px] text-gold" aria-hidden="true">{"★".repeat(review.rating)}</span>
          <span className="ml-1 text-[12px] font-semibold text-white/60">{review.rating}/5</span>
        </div>
        <p className="text-[16px] leading-relaxed text-white/85">&ldquo;{review.quote}&rdquo;</p>
        <div className="mt-6 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 font-mono text-[11px] font-bold text-gold">{review.initials}</span>
          <div>
            <div className="flex items-center gap-1.5 text-[13px] font-semibold text-white">
              {review.name}
              {review.verified && <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-[#3A2705]" title="Verified client review" aria-label="Verified client review">✓</span>}
            </div>
            <div className="text-[12px] text-white/45">{review.role}</div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
        <button type="button" onClick={() => setPaused((current) => !current)} className="text-[12px] font-medium text-white/55 underline underline-offset-4 hover:text-white" aria-label={paused ? "Resume review rotation" : "Pause review rotation"}>
          {paused ? "Resume rotation" : "Pause rotation"}
        </button>
        <div className="flex gap-2">
          <button type="button" onClick={() => move(-1)} className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/65 transition-colors hover:border-gold hover:text-gold" aria-label="Previous review">←</button>
          <button type="button" onClick={() => move(1)} className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/65 transition-colors hover:border-gold hover:text-gold" aria-label="Next review">→</button>
        </div>
      </div>
    </div>
  );
}
