"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import QRCode from "qrcode";
import { plans, findPlan, upiLink, waLink, site } from "@/lib/site";

type Step = "details" | "pay";

type Details = {
  name: string;
  phone: string;
  email: string;
  plan: string;
  role: string;
  notes: string;
};

type Touched = { name: boolean; phone: boolean; email: boolean };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Checkout({ initialPlan }: { initialPlan: string | null }) {
  const [step, setStep] = useState<Step>("details");
  const [d, setD] = useState<Details>({
    name: "",
    phone: "",
    email: "",
    plan: findPlan(initialPlan)?.id ?? "pro",
    role: "",
    notes: "",
  });
  const [touched, setTouched] = useState<Touched>({ name: false, phone: false, email: false });
  const [attempted, setAttempted] = useState(false);
  const [qr, setQr] = useState("");
  const [qrFailed, setQrFailed] = useState(false);
  const [paid, setPaid] = useState(false);
  const [copied, setCopied] = useState(false);

  const wrapRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);

  const plan = useMemo(() => findPlan(d.plan) ?? plans[1], [d.plan]);

  const nameValid = d.name.trim().length >= 2;
  const phoneValid = d.phone.length === 10;
  const emailValid = d.email.trim() === "" || EMAIL_RE.test(d.email.trim());
  const canProceed = nameValid && phoneValid && emailValid;

  const note = `ResumeForX ${plan.name} - ${d.name.trim() || "order"}`;
  const payLink = useMemo(() => upiLink(plan.amount, note), [plan, note]);

  // Scroll the card into view on step change so the payment step isn't
  // half off-screen if the details form pushed the page down.
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    wrapRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step]);

  useEffect(() => {
    if (step !== "pay") return;
    let cancelled = false;
    setQr("");
    setQrFailed(false);
    QRCode.toDataURL(upiLink(plan.amount, note), {
      width: 224,
      margin: 1,
      color: { dark: "#2B2B2B", light: "#FFFFFF" },
    })
      .then((url) => { if (!cancelled) setQr(url); })
      .catch(() => { if (!cancelled) setQrFailed(true); });
    return () => { cancelled = true; };
  }, [step, plan, note]);

  const set = (k: keyof Details, v: string) => setD((p) => ({ ...p, [k]: v }));
  const blur = (k: keyof Touched) => setTouched((p) => ({ ...p, [k]: true }));

  const showErr = (k: keyof Touched) => (touched[k] || attempted);

  const goToPayment = () => {
    setAttempted(true);
    setTouched({ name: true, phone: true, email: true });
    if (canProceed) setStep("pay");
  };

  const copyUpi = async () => {
    try {
      await navigator.clipboard.writeText(site.upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable -- the UPI ID is still visible as plain text.
    }
  };

  const waSummary = () => {
    const lines = [
      `Hi ${site.name}, I've placed an order:`,
      ``,
      `*Plan:* ${plan.name} (${plan.price})`,
      `*Name:* ${d.name.trim()}`,
      `*Phone:* +91 ${d.phone}`,
      d.email.trim() ? `*Email:* ${d.email.trim()}` : "",
      d.role.trim() ? `*Target role:* ${d.role.trim()}` : "",
      d.notes.trim() ? `*Notes:* ${d.notes.trim()}` : "",
      ``,
      paid ? "I've completed the UPI payment -- sharing the screenshot next." : "I'll complete the payment now.",
    ].filter(Boolean);
    return waLink(lines.join("\n"));
  };

  return (
    <div ref={wrapRef} className="mx-auto max-w-[560px] scroll-mt-24">
      <Stepper step={step} />

      {step === "details" && (
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            goToPayment();
          }}
          className="rounded-[20px] border border-white/10 bg-white/[0.035] p-6 sm:p-7"
        >
          <span className="mb-2.5 block text-[13px] font-semibold text-white">Choose your plan</span>
          <div className="mb-5 grid grid-cols-2 gap-2.5">
            {plans.map((p) => (
              <label
                key={p.id}
                className="relative flex cursor-pointer flex-col rounded-xl border border-white/12 bg-white/[0.06] px-3.5 py-3 transition-colors has-[:checked]:border-gold has-[:checked]:bg-gold/15 hover:border-white/30"
              >
                <input
                  type="radio"
                  name="plan"
                  value={p.id}
                  checked={d.plan === p.id}
                  onChange={() => set("plan", p.id)}
                  className="sr-only"
                />
                {p.popular && (
                  <span className="gold-grad-bg absolute -top-2 right-2.5 rounded-full px-2 py-[3px] font-mono text-[9px] font-bold uppercase tracking-[0.06em] text-[#3A2705]">
                    Popular
                  </span>
                )}
                <span className="text-[12.5px] font-semibold leading-tight text-white">{p.name}</span>
                <span className="mt-0.5 font-display text-[17px] font-bold leading-tight">{p.price}</span>
              </label>
            ))}
          </div>

          <Field
            label="Full name"
            required
            value={d.name}
            onChange={(v) => set("name", v)}
            onBlur={() => blur("name")}
            placeholder="Your name"
            autoComplete="name"
            error={showErr("name") && !nameValid ? "Please enter your name." : undefined}
          />

          <div className="mb-5">
            <label htmlFor="field-phone" className="mb-1.5 block text-[13px] font-semibold text-white">
              WhatsApp number <span className="text-white/45">*</span>
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[14px] text-white/60">
                +91
              </span>
              <input
                id="field-phone"
                value={d.phone}
                onChange={(e) => set("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
                onBlur={() => blur("phone")}
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                placeholder="10-digit mobile number"
                aria-invalid={showErr("phone") && !phoneValid}
                aria-describedby={showErr("phone") && !phoneValid ? "phone-error" : undefined}
                className="w-full rounded-lg border border-white/15 bg-white/[0.06] py-3 pl-12 pr-3.5 text-[14px] outline-none focus:border-gold"
              />
            </div>
            {showErr("phone") && !phoneValid && (
              <p id="phone-error" className="mt-1.5 text-[12px] text-[#C0392B]">Enter a valid 10-digit number.</p>
            )}
          </div>

          <Field
            label="Email (optional)"
            value={d.email}
            onChange={(v) => set("email", v)}
            onBlur={() => blur("email")}
            placeholder="you@example.com"
            type="email"
            autoComplete="email"
            error={showErr("email") && !emailValid ? "That email doesn't look right." : undefined}
          />
          <Field
            label="Target role / industry (optional)"
            value={d.role}
            onChange={(v) => set("role", v)}
            placeholder="e.g. Data Analyst, Marketing"
          />

          <label className="mb-1.5 block text-[13px] font-semibold text-white">
            Anything we should know? (optional)
          </label>
          <textarea
            value={d.notes}
            onChange={(e) => set("notes", e.target.value)}
            rows={3}
            placeholder="Link to current resume, deadlines, specific companies…"
            className="mb-5 w-full resize-none rounded-lg border border-white/15 bg-white/[0.06] px-3.5 py-3 text-[14px] outline-none focus:border-gold"
          />

          <button
            type="submit"
            className="gold-grad-bg flex w-full items-center justify-center rounded-lg px-6 py-3.5 text-sm font-semibold text-[#3A2705] transition-transform hover:-translate-y-0.5"
          >
            Continue to payment →
          </button>
          <p className="mt-3 text-center text-[12px] text-white/45">
            Prefer to talk first?{" "}
            <a href={waLink()} className="font-medium text-gold underline">Enquire on WhatsApp</a>
          </p>
        </form>
      )}

      {step === "pay" && (
        <div className="rounded-[20px] border border-white/10 bg-white/[0.035] p-6 text-center sm:p-7">
          <div className="mb-1 text-[13px] text-white/60">Paying for</div>
          <div className="mb-1 font-display text-[22px] font-bold">{plan.name}</div>
          <div className="mb-1 font-display text-[36px] font-extrabold gold-text">{plan.price}</div>
          <div className="mb-6 text-[12px] text-white/45">One-time payment · {d.name.trim() || "your order"}</div>

          {/* primary action: a real payment link -- opens the customer's own UPI app
              (GPay / PhonePe / Paytm / BHIM) with the amount pre-filled. No camera,
              no second device -- this is what actually works when someone is
              checking out on the same phone they'd otherwise have to scan with. */}
          <a
            href={payLink}
            className="gold-grad-bg flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-[15px] font-bold text-[#3A2705] transition-transform hover:-translate-y-0.5"
          >
            Pay {plan.price} via UPI →
          </a>
          <p className="mt-2.5 text-[11.5px] text-white/40">Opens GPay, PhonePe, Paytm or any UPI app on your phone.</p>

          <div className="my-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.08em] text-white/35">
            <span className="h-px flex-1 bg-white/10" />
            or scan from another device
            <span className="h-px flex-1 bg-white/10" />
          </div>

          {qrFailed ? (
            <div className="mx-auto flex h-36 w-36 flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed border-white/20 px-3 text-[11.5px] text-white/45">
              <span>Couldn&apos;t generate the QR.</span>
              <span>Use the UPI ID below instead.</span>
            </div>
          ) : qr ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={qr}
              alt="UPI payment QR code"
              width={144}
              height={144}
              className="mx-auto rounded-xl border border-white/10 p-2"
            />
          ) : (
            <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-xl border border-white/10 bg-white/[0.05]">
              <div className="absolute inset-x-0 -top-[80px] h-[80px] animate-sweep bg-gradient-to-b from-transparent via-gold/35 to-transparent" />
              <span className="absolute inset-0 flex items-center justify-center px-3 text-center text-[11px] text-white/45">
                Generating…
              </span>
            </div>
          )}

          <button
            type="button"
            onClick={copyUpi}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white/[0.05] p-4 text-[13px] transition-colors hover:bg-white/[0.08]"
          >
            <span className="flex flex-col items-start">
              <span className="text-white/60">Or pay manually to</span>
              <span className="font-mono text-[15px] font-medium text-white">{site.upiId}</span>
            </span>
            <span className="ml-auto shrink-0 rounded-md border border-white/15 px-2.5 py-1 font-mono text-[11px] font-medium text-white/60">
              {copied ? "Copied ✓" : "Copy"}
            </span>
          </button>

          <details className="mt-4 rounded-xl border border-white/10 p-3.5 text-left">
            <summary className="cursor-pointer text-[13px] font-medium text-white/60">
              Payment link not opening? Use our Paytm QR
            </summary>
            <div className="mt-3 flex flex-col items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/paytm-qr.jpg" alt="ResumeForX Paytm UPI QR code" width={220} height={240} className="rounded-lg" />
              <p className="mt-2 text-center text-[12px] text-white/45">
                Enter the amount ({plan.price}) manually when paying with this QR.
              </p>
            </div>
          </details>

          <label className="mt-5 flex cursor-pointer items-start gap-2.5 rounded-xl border border-white/10 p-3.5 text-left transition-colors has-[:checked]:border-gold has-[:checked]:bg-gold/15">
            <input
              type="checkbox"
              checked={paid}
              onChange={(e) => setPaid(e.target.checked)}
              className="mt-0.5 h-4 w-4 accent-gold"
            />
            <span className="text-[13px] text-white">I&apos;ve completed the payment</span>
          </label>

          {paid && (
            <p className="mt-3 rounded-lg bg-gold/15 px-3.5 py-2.5 text-left text-[12.5px] text-gold">
              📎 Don&apos;t forget to attach your payment screenshot in WhatsApp -- that&apos;s how we confirm it.
            </p>
          )}

          <a
            href={waSummary()}
            className={`mt-4 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
              paid ? "gold-grad-bg text-[#3A2705]" : "border border-white/15 text-white"
            }`}
          >
            💬 {paid ? "Send order + payment on WhatsApp" : "Send my details on WhatsApp"}
          </a>

          <button
            type="button"
            onClick={() => setStep("details")}
            className="mt-4 text-[13px] text-white/60 underline"
          >
            ← Back to details
          </button>
        </div>
      )}

      <p className="mt-6 text-center text-[12px] text-white/45">
        Secure UPI payment. We never store your card or bank details.
      </p>
    </div>
  );
}

function Stepper({ step }: { step: Step }) {
  return (
    <div className="mb-8 flex items-center justify-center gap-3">
      <StepDot n="1" label="Your details" state={step === "details" ? "active" : "done"} />
      <span className={`h-px w-10 ${step === "pay" ? "bg-gold" : "bg-white/15"}`} />
      <StepDot n="2" label="Payment" state={step === "pay" ? "active" : "upcoming"} />
    </div>
  );
}

function StepDot({ n, label, state }: { n: string; label: string; state: "active" | "done" | "upcoming" }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full font-display text-[12px] font-bold ${
          state === "upcoming"
            ? "border border-white/20 text-white/45"
            : "gold-grad-bg text-[#3A2705]"
        }`}
      >
        {state === "done" ? "✓" : n}
      </span>
      <span className={`font-mono text-[11px] uppercase tracking-[0.08em] ${state === "upcoming" ? "text-white/45" : "text-white"}`}>
        {label}
      </span>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  type = "text",
  autoComplete,
  required,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  error?: string;
}) {
  const id = `field-${label.replace(/\W+/g, "-").toLowerCase()}`;
  return (
    <div className="mb-5">
      <label htmlFor={id} className="mb-1.5 block text-[13px] font-semibold text-white">
        {label} {required && <span className="text-white/45">*</span>}
      </label>
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full rounded-lg border border-white/15 bg-white/[0.06] px-3.5 py-3 text-[14px] outline-none focus:border-gold"
      />
      {error && <p id={`${id}-error`} className="mt-1.5 text-[12px] text-[#C0392B]">{error}</p>}
    </div>
  );
}
