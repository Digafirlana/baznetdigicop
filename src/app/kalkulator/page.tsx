import type { Metadata } from "next";
import PriceCalculator from "@/components/PriceCalculator";

export const metadata: Metadata = {
  title: "Pesan sekarang — Baznet Print",
  description: "Hitung estimasi biaya cetak dokumen, banner, kartu nama, dan stiker.",
};

export default function KalkulatorPage() {
  return (
    // BG adaptif: bg-paper (terang), bg-ink (gelap)
    <section className="min-h-screen bg-paper dark:bg-ink px-5 py-14 transition-colors duration-300 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        
        {/* Label atas */}
        <p className="font-mono text-xs uppercase tracking-widest text-ink/40 dark:text-paper/40">
          Pesanan
        </p>

        {/* Judul adaptif */}
        <h1 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
          Hitung estimasi biaya cetak Anda.
        </h1>

        {/* Deskripsi (pastikan ada teks jika diperlukan) */}
        <p className="mt-4 max-w-lg font-body text-sm leading-relaxed text-ink/60 dark:text-paper/60 sm:text-base">
          Masukkan detail spesifikasi cetakan Anda di bawah ini untuk melihat estimasi harga.
        </p>

        {/* Komponen Kalkulator */}
        <div className="mt-12">
          <PriceCalculator />
        </div>
        
      </div>
    </section>
  );
}