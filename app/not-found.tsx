import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="px-6 py-32 text-center">
        <div className="mx-auto max-w-[480px]">
          <div className="font-display text-[80px] font-extrabold leading-none gold-text">404</div>
          <h1 className="mt-4 font-display text-2xl font-bold">Page not found</h1>
          <p className="mt-3 text-white/60">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
          <Link href="/" className="mt-6 inline-flex gold-grad-bg rounded-lg px-6 py-3 text-sm font-semibold text-[#3A2705]">
            Back home
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
