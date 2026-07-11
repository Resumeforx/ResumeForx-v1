"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/#how", label: "How it works" },
  { href: "/samples", label: "Samples" },
  { href: "/#proof", label: "Reviews" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-all ${
        scrolled ? "border-b border-white/10 bg-[#131110]/85 shadow-[0_4px_30px_-14px_rgba(0,0,0,0.6)]" : "border-b border-transparent bg-[#131110]/70"
      }`}
    >
      <div className="mx-auto max-w-[1180px] px-5">
        <nav className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="ResumeForX logo" width={38} height={38} className="rounded-full ring-1 ring-white/10" />
            <span className="font-display text-[19px] font-extrabold tracking-tight text-white">
              Resume<span className="text-gold">ForX</span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-[13.5px] font-medium text-white/60 transition-colors hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3.5">
            <Link href="/checkout" className="hidden gold-grad-bg rounded-full px-5 py-2 text-[13px] font-bold text-[#3A2705] transition-transform hover:-translate-y-0.5 sm:inline-flex">
              Get my resume →
            </Link>
            <button aria-label="Menu" onClick={() => setOpen((v) => !v)} className="flex flex-col gap-[5px] p-1.5 lg:hidden">
              <span className="h-0.5 w-[22px] rounded bg-white" />
              <span className="h-0.5 w-[22px] rounded bg-white" />
              <span className="h-0.5 w-[22px] rounded bg-white" />
            </button>
          </div>
        </nav>

        {open && (
          <div className="flex flex-col gap-0.5 pb-4 pt-1.5 lg:hidden">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/[0.08] py-3 text-[15px] font-medium text-white/80"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/checkout" onClick={() => setOpen(false)} className="mt-3 gold-grad-bg inline-flex justify-center rounded-full px-5 py-2.5 text-sm font-bold text-[#3A2705] sm:hidden">
              Get my resume →
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
