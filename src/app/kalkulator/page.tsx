import type { Metadata } from "next";
import PriceCalculator from "@/components/PriceCalculator";

export const metadata: Metadata = {
  title: "Pesan sekarang",
  description: "Hitung estimasi biaya cetak dokumen, banner, kartu nama, dan stiker.",
};

export default function KalkulatorPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-paper/40">
       pesanan
      </p>
      <h1 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Hitung estimasi biaya cetak Anda.
      </h1>
      <p className="mt-4 max-w-lg font-body text-sm leading-relaxed text-paper/55 sm:text-base">
       
      </p>

      <div className="mt-12">
        <PriceCalculator />
      </div>
    </section>
  );
}
