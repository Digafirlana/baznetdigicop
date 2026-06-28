import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 py-24 text-center">
      <span className="font-display text-7xl font-bold text-cmyk-gradient">404</span>
      <h1 className="mt-4 font-display text-2xl font-semibold text-paper">
        sedang maintance
      </h1>
      <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-paper/55">
        sedang maintance
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-paper px-7 py-3.5 font-mono text-sm font-medium uppercase tracking-wider text-ink transition-transform hover:-translate-y-0.5"
      >
        Kembali ke Beranda
      </Link>
    </section>
  );
}
