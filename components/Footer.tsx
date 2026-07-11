import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 pb-24 pt-10">
      <div className="mx-auto max-w-[1140px] px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="ResumeForX logo" width={34} height={34} className="rounded-full" />
            <span className="font-display text-[17px] font-extrabold tracking-tight">
              Resume<span className="text-gold-deep">ForX</span>
            </span>
          </Link>
          <div className="flex gap-6">
            <Link href="/pricing" className="text-[13.5px] text-ink-soft hover:text-charcoal">Pricing</Link>
            <Link href="/samples" className="text-[13.5px] text-ink-soft hover:text-charcoal">Samples</Link>
            <Link href="/faq" className="text-[13.5px] text-ink-soft hover:text-charcoal">FAQ</Link>
            <Link href="/about" className="text-[13.5px] text-ink-soft hover:text-charcoal">About</Link>
            <Link href="/contact" className="text-[13.5px] text-ink-soft hover:text-charcoal">Contact</Link>
          </div>
        </div>
        <p className="mt-5 text-[12.5px] text-ink-faint">© 2026 {site.name} · {site.tagline}</p>
      </div>
    </footer>
  );
}
