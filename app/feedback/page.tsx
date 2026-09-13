import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import FeedbackForm from "@/components/FeedbackForm";
import ReviewCarousel from "@/components/ReviewCarousel";
import { testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Share feedback — ResumeForX",
  description: "Tell ResumeForX how your resume service experience went.",
};

export default function FeedbackPage() {
  return (
    <PageShell>
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-[980px]">
          <Reveal>
            <div className="mx-auto mb-12 max-w-[680px] text-center">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">Your experience matters</span>
              <h1 className="mt-3.5 font-display text-[clamp(30px,5vw,54px)] font-extrabold leading-[1.02] tracking-tight text-white">
                How did we do?
              </h1>
              <p className="mt-4 text-[16px] leading-relaxed text-white/60 sm:text-[17px]">
                A short, honest review helps us improve and helps the next person choose with confidence. Thank you for taking the time.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.75fr)] lg:items-start">
            <Reveal>
              <FeedbackForm />
            </Reveal>
            <Reveal>
              <div className="lg:sticky lg:top-24">
                <ReviewCarousel reviews={testimonials} />
                <p className="mt-4 text-center text-[11.5px] leading-relaxed text-white/35">
                  Reviews are published only after we confirm the service and your permission.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact" className="text-[13px] font-medium text-white/55 underline decoration-white/25 underline-offset-4 hover:text-white">
              Need help first? Contact us →
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
