"use client";

import { FormEvent, useState } from "react";
import { feedbackMailto, site, waLink } from "@/lib/site";

const ratingLabels = ["Very poor", "Needs work", "Good", "Very good", "Excellent"];

type FormState = {
  name: string;
  role: string;
  rating: number;
  review: string;
  consent: boolean;
};

export default function FeedbackForm() {
  const [form, setForm] = useState<FormState>({ name: "", role: "", rating: 0, review: "", consent: false });
  const [attempted, setAttempted] = useState(false);
  const [sent, setSent] = useState(false);

  const nameValid = form.name.trim().length >= 2;
  const ratingValid = form.rating >= 1 && form.rating <= 5;
  const reviewValid = form.review.trim().length >= 10;
  const consentValid = form.consent;
  const canSubmit = nameValid && ratingValid && reviewValid && consentValid;

  const set = <Key extends keyof FormState>(key: Key, value: FormState[Key]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAttempted(true);
    if (!canSubmit) return;

    window.location.href = feedbackMailto(form.name.trim(), form.role.trim(), form.rating, form.review.trim());
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-[20px] border border-gold/35 bg-gold/[0.08] p-7 text-center sm:p-8">
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full gold-grad-bg text-xl font-bold text-[#3A2705]">✓</div>
        <h2 className="mt-4 font-display text-2xl font-bold text-white">Thank you for sharing this.</h2>
        <p className="mx-auto mt-2 max-w-[420px] text-[14px] leading-relaxed text-white/65">
          Your email app should be open with your feedback ready to send to {site.email}. We&apos;ll review it and only publish it with your approval.
        </p>
        <button
          type="button"
          onClick={() => { setSent(false); setAttempted(false); }}
          className="mt-5 text-[13px] font-semibold text-gold underline underline-offset-4"
        >
          Submit another review
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="rounded-[20px] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
      <div className="mb-6">
        <label className="mb-2 block text-[13px] font-semibold text-white" htmlFor="feedback-name">
          Your name <span className="text-white/45">*</span>
        </label>
        <input
          id="feedback-name"
          value={form.name}
          onChange={(event) => set("name", event.target.value)}
          placeholder="How should we credit you?"
          autoComplete="name"
          aria-invalid={attempted && !nameValid}
          className="w-full rounded-lg border border-white/15 bg-white/[0.06] px-3.5 py-3 text-[14px] outline-none transition-colors placeholder:text-white/30 focus:border-gold"
        />
        {attempted && !nameValid && <p className="mt-1.5 text-[12px] text-[#E08B7C]">Please enter at least 2 characters.</p>}
      </div>

      <div className="mb-6">
        <label className="mb-2 block text-[13px] font-semibold text-white" htmlFor="feedback-role">
          Role or industry <span className="font-normal text-white/40">(optional)</span>
        </label>
        <input
          id="feedback-role"
          value={form.role}
          onChange={(event) => set("role", event.target.value)}
          placeholder="e.g. Marketing fresher, Banking analyst"
          className="w-full rounded-lg border border-white/15 bg-white/[0.06] px-3.5 py-3 text-[14px] outline-none transition-colors placeholder:text-white/30 focus:border-gold"
        />
      </div>

      <fieldset className="mb-6">
        <legend className="mb-2 block text-[13px] font-semibold text-white">
          How would you rate the service? <span className="text-white/45">*</span>
        </legend>
        <div className="flex flex-wrap items-center gap-1" role="radiogroup" aria-label="Service rating">
          {ratingLabels.map((label, index) => {
            const rating = index + 1;
            return (
              <label key={label} className="group cursor-pointer rounded-md p-1.5 outline-none focus-within:ring-2 focus-within:ring-gold/70" title={label}>
                <input
                  type="radio"
                  name="feedback-rating"
                  value={rating}
                  checked={form.rating === rating}
                  onChange={() => set("rating", rating)}
                  className="sr-only"
                />
                <span className={`text-[29px] leading-none transition-colors ${rating <= form.rating ? "text-gold" : "text-white/20 group-hover:text-white/45"}`} aria-hidden="true">★</span>
                <span className="sr-only">{rating} out of 5, {label}</span>
              </label>
            );
          })}
          <span className="ml-2 text-[12px] text-white/45">{form.rating ? `${form.rating}/5 · ${ratingLabels[form.rating - 1]}` : "Choose a rating"}</span>
        </div>
        {attempted && !ratingValid && <p className="mt-1.5 text-[12px] text-[#E08B7C]">Please choose a rating.</p>}
      </fieldset>

      <div className="mb-5">
        <label className="mb-2 block text-[13px] font-semibold text-white" htmlFor="feedback-review">
          Your feedback <span className="text-white/45">*</span>
        </label>
        <textarea
          id="feedback-review"
          value={form.review}
          onChange={(event) => set("review", event.target.value.slice(0, 600))}
          rows={5}
          placeholder="What did you find helpful about the service?"
          aria-invalid={attempted && !reviewValid}
          className="w-full resize-none rounded-lg border border-white/15 bg-white/[0.06] px-3.5 py-3 text-[14px] outline-none transition-colors placeholder:text-white/30 focus:border-gold"
        />
        <div className="mt-1 flex justify-between text-[11px] text-white/35">
          <span>{attempted && !reviewValid ? "Please write at least 10 characters." : "A few honest sentences help most."}</span>
          <span>{form.review.length}/600</span>
        </div>
      </div>

      <label className="flex cursor-pointer items-start gap-2.5 rounded-xl border border-white/10 p-3.5 transition-colors has-[:checked]:border-gold/60 has-[:checked]:bg-gold/[0.08]">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(event) => set("consent", event.target.checked)}
          className="mt-0.5 h-4 w-4 accent-gold"
        />
        <span className="text-[12.5px] leading-relaxed text-white/65">I&apos;m happy for ResumeForX to publish this review after confirming it with me.</span>
      </label>
      {attempted && !consentValid && <p className="mt-1.5 text-[12px] text-[#E08B7C]">Please confirm publication consent.</p>}

      <button type="submit" className="gold-grad-bg mt-5 flex w-full items-center justify-center rounded-lg px-6 py-3.5 text-sm font-semibold text-[#3A2705] transition-transform hover:-translate-y-0.5">
        Email my feedback →
      </button>
      <a
        href={waLink(`Hi ${site.name}, I'd like to share feedback after using your service.`)}
        className="mt-3 flex justify-center text-[12px] font-medium text-white/50 underline underline-offset-4 hover:text-white"
      >
        Prefer WhatsApp? Send it there instead
      </a>
      <p className="mt-3 text-center text-[11.5px] leading-relaxed text-white/40">Your review is not published automatically. We approve genuine feedback manually.</p>
    </form>
  );
}
