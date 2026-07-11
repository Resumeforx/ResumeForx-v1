import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description:
    "Professionally designed, ATS-optimized resumes for freshers and early-career professionals. Delivered in 24–48 hours.",
  keywords: ["ATS resume", "resume writing India", "fresher resume", "CV writing", "LinkedIn optimization"],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: "ATS-optimized resumes that get you noticed. Built for freshers & early-career professionals.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
