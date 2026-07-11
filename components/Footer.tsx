import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pb-24 pt-10">
      <div className="mx-auto max-w-[1180px] px-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="ResumeForX logo" width={32} height={32} className="rounded-full ring-1 ring-white/10" />
            <span className="font-display text-[17px] font-extrabold tracking-tight text-white">
              Resume<span className="text-gold">ForX</span>
            </span>
          </Link>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/pricing" className="text-[13.5px] text-white/55 hover:text-white">Pricing</Link>
            <Link href="/samples" className="text-[13.5px] text-white/55 hover:text-white">Samples</Link>
            <Link href="/faq" className="text-[13.5px] text-white/55 hover:text-white">FAQ</Link>
            <Link href="/about" className="text-[13.5px] text-white/55 hover:text-white">About</Link>
            <Link href="/contact" className="text-[13.5px] text-white/55 hover:text-white">Contact</Link>
          </div>
        </div>
        <p className="mt-5 text-[12.5px] text-white/35">© 2026 {site.name} · {site.tagline}</p>
      </div>
    </footer>
  );
}
