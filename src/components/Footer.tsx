import Link from "next/link";

export default function Footer() {
  return (
  
    <footer className="border-t border-gray-200 dark:border-ink-line bg-gray-50 dark:bg-ink-surface transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          
          {/* Bagian Logo & Deskripsi */}
          <div className="md:col-span-2">
            <span className="font-display text-lg font-semibold text-ink dark:text-paper">
              Baznet<span className="animate-gradient bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Digicorp</span>
            </span>
          
          </div>

          {/* Bagian Navigasi */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-ink/40 dark:text-paper/40">
              Navigasi
            </p>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-ink/70 dark:text-paper/70">
              <li><Link href="/" className="hover:text-cyan transition-colors">Beranda</Link></li>
              <li><Link href="/Outlet" className="hover:text-cyan transition-colors">Outlet</Link></li>
              <li><Link href="/daftarproduk" className="hover:text-cyan transition-colors">Daftar Jasa & Produk</Link></li>
            </ul>
          </div>

          {/* Bagian Kontak */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-ink/40 dark:text-paper/40">
              Kontak & Alamat
            </p>
            <ul className="mt-4 space-y-4 font-body text-sm text-ink/70 dark:text-paper/70">
              <li>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-ink/40 dark:text-paper/40">Cabang 1</span>
                Jl. Bunga Kumis Kucing No.21 Blok A, Lowokwaru, Malang
              </li>
              <li>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-ink/40 dark:text-paper/40">Cabang 2</span>
                Jl. Pisang Kipas, Lowokwaru, Malang
              </li>
              <li className="pt-2 border-t border-gray-200 dark:border-ink-line/30">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-ink/40 dark:text-paper/40">Cabang 3</span>
                Jl. Ikan Kakap, Tunjungsekar, Lowokwaru
              </li>
              <li className="pt-2 border-t border-gray-200 dark:border-ink-line/30">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-ink/40 dark:text-paper/40">Telepon & Jam Buka</span>
                <span className="block mt-1">(0898) 807-5928</span>
                <span className="block text-ink/50 dark:text-paper/50">Senin–Minggu, 06.00–23.00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
