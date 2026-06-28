import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outlet - Baznet Print",
  description: "Profil, visi misi, dan keunggulan Baznet Print.",
};

const VALUES = [
  { code: "1", title: "Akurasi warna", desc: "Setiap mesin cetak kami dikalibrasi rutin supaya warna di layar dan di kertas tidak meleset jauh." },
  { code: "2", title: "Tepat waktu", desc: "Estimasi selesai yang kami berikan di awal adalah komitmen, bukan perkiraan kasar." },
  { code: "3", title: "Transparan harga", desc: "Tidak ada biaya tersembunyi. Apa yang dihitung di kalkulator, itu yang Anda bayar." },
  { code: "4", title: "Detail finishing", desc: "Potongan presisi, laminasi rapi, jilid kuat — bagian kecil yang menentukan kesan akhir." },
];

export default function TentangPage() {
  return (
    // Gunakan bg-paper (light) dan dark:bg-ink (dark)
    <main className="bg-paper text-ink dark:bg-ink dark:text-paper transition-colors duration-300">
      
      {/* SECTION HERO */}
      <section className="noise-overlay relative overflow-hidden border-b border-gray-200 dark:border-ink-line">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-10 dark:opacity-30" />
        
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:flex lg:items-center lg:justify-between gap-12">
          <div className="z-10 lg:w-1/2">
            <p className="font-mono text-xs uppercase tracking-widest text-ink/40 dark:text-paper/40">
              Tentang Baznet Print
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Percetakan keluarga yang tumbuh bersama pelanggan
            </h1>
            <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-ink/60 dark:text-paper/60">
              Kami percaya hasil cetak yang baik dimulai dari komunikasi yang jelas: 
              file yang tepat, proof yang disetujui, dan tenggat yang dihormati. Sejak 2016, itulah yang kami jaga.
            </p>
          </div>

          <div className="relative mt-12 flex justify-center lg:mt-0 lg:w-1/2 lg:justify-end">
            <div className="relative w-full max-w-sm xl:max-w-md">
              <img src="9.png" alt="Maskot 3D Baznet Print" className="h-auto w-full object-contain drop-shadow-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION VISI MISI */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-2 md:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-cyan">Visi</p>
          <p className="mt-3 font-display text-xl font-medium leading-snug sm:text-2xl">
            Jadi mitra cetak yang paling dipercaya pelaku usaha kecil di Malang Raya dan sekitarnya.
          </p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-magenta">Misi</p>
          <ul className="mt-3 space-y-2.5 font-body text-sm leading-relaxed text-ink/70 dark:text-paper/65 sm:text-base">
            <li>1. Menjaga akurasi warna di setiap hasil cetak.</li>
            <li>2. Memberi estimasi harga yang jujur sejak awal.</li>
            <li>3. Menyelesaikan pesanan sesuai waktu yang dijanjikan.</li>
            <li>4. Mendukung pertumbuhan UMKM lewat harga bersahabat.</li>
          </ul>
        </div>
      </section>

      {/* SECTION PRINSIP */}
      <section className="border-y border-gray-200 dark:border-ink-line bg-gray-50 dark:bg-ink-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-ink/40 dark:text-paper/40">
            Yang kami pegang teguh
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Empat prinsip, seperti empat plat warna.
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="crop-marks rounded-2xl border border-gray-200 dark:border-ink-line bg-white dark:bg-ink-card p-6 transition-colors">
                <span className="font-display text-2xl font-bold text-ink/20 dark:text-paper/25">
                  {v.code}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink/60 dark:text-paper/55">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}