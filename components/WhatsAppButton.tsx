import { waLink } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={waLink()}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-charcoal text-[25px] text-white shadow-[0_12px_28px_-8px_rgba(43,43,43,0.5)]"
    >
      <span className="absolute inset-0 animate-pulse2 rounded-full border-2 border-gold" />
      💬
    </a>
  );
}
