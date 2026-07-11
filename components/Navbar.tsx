"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { site, waLink } from "@/lib/site";

const links = [
  { href: "/#pain", label: "Why it matters" },
  { href: "/#how", label: "How it works" },
  { href: "/samples", label: "Samples" },
  { href: "/#testimonials", label: "Reviews" },
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
        scrolled ? "bg-bg/85 border-b border-charcoal/10 shadow-[0_4px_30px_-14px_rgba(43,43,43,0.18)]" : "bg-bg/80 border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1140px] px-6">
        <nav className="flex items-center justify-between py-3.5">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="ResumeForX logo" width={40} height={40} className="rounded-full shadow-[0_2px_10px_-3px_rgba(43,43,43,0.3)]" />
            <span className="font-display text-[19px] font-extrabold tracking-tight">
              Resume<span className="text-gold-deep">ForX</span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm font-medium text-ink-soft transition-colors hover:text-charcoal">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3.5">
            <a href={waLink()} className="hidden gold-grad-bg rounded-lg px-4 py-2 text-[13px] font-semibold text-[#3A2705] transition-transform hover:-translate-y-0.5 sm:inline-flex">
              Get my resume →
            </a>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="flex flex-col gap-[5px] p-1.5 lg:hidden"
            >
              <span className="h-0.5 w-[22px] rounded bg-charcoal" />
              <span className="h-0.5 w-[22px] rounded bg-charcoal" />
              <span className="h-0.5 w-[22px] rounded bg-charcoal" />
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
                className="border-b border-charcoal/[0.07] py-3 text-[15px] font-medium"
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
