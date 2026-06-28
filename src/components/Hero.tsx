import Link from "next/link";

export default function Hero() {
  // 1. PERBAIKAN STATS: Dipisah menjadi 2 objek agar tampil rapi berdampingan,
  // tidak bertumpuk aneh seperti di foto.
  const stats = [
    { value: "Buka Setiap Hari", label: "Jam Operasional" },
    { value: "3 Outlet", label: "Tersebar di Malang" },
  ];

  return (
    <section className="relative overflow-hidden border-b border-gray-200 dark:border-ink-line bg-paper dark:bg-ink transition-colors duration-300">
      
      {/* Efek gradasi super halus di background agar tidak terlihat polos/flat */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-8 sm:pb-24 lg:flex lg:items-center lg:justify-between gap-16">
        
        {/* Kolom Kiri */}
        <div className="lg:w-1/2 flex flex-col justify-center relative z-10">
          
     

          {/* Heading: Pengaturan spasi (leading) dan ketebalan huruf diperbaiki */}
          <h1 className="font-display text-4xl font-bold leading-[1.2] tracking-tight text-ink dark:text-paper sm:text-5xl md:text-6xl lg:leading-[1.15]">
            Sahabat Kebutuhan <br className="hidden sm:block" />
            <span className="text-ink/60 dark:text-paper/60">Printing & ATK</span> <br />
            Di Wilayah Malang
          </h1>

          {/* Description: Teks dibuat lebih mudah dibaca (max-width) */}
          <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-ink/70 dark:text-paper/70 sm:text-lg">
            Kami mengutamakan pelanggan dengan memberikan pelayanan yang ramah, proses yang cepat, dan kualitas yang terjamin.
          </p>

          {/* Buttons: Desain tombol dibuat lebih menonjol dengan efek saat disentuh */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/kalkulator"
              className="inline-flex items-center justify-center rounded-full bg-ink dark:bg-paper px-8 py-3.5 font-mono text-sm font-semibold uppercase tracking-wider text-paper dark:text-ink shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
            >
              Pesan Sekarang
            </Link>
            <Link
              href="/daftarharga"
              className="inline-flex items-center justify-center rounded-full border-2 border-ink/20 dark:border-paper/20 px-8 py-3.5 font-mono text-sm font-semibold uppercase tracking-wider text-ink dark:text-paper transition-all hover:border-ink/50 dark:hover:border-paper/50 hover:bg-ink/5 dark:hover:bg-paper/5"
            >
              Lihat Harga
            </Link>
          </div>

          {/* Stats: Sekarang dirender menjadi grid yang rapi ke samping */}
          <div className="mt-14 border-t border-ink/10 dark:border-paper/10 pt-8">
            <dl className="grid grid-cols-2 gap-8 sm:grid-cols-2 max-w-md">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <dt className="font-display text-2xl font-bold text-ink dark:text-paper sm:text-3xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 font-mono text-xs font-semibold uppercase tracking-widest text-ink/50 dark:text-paper/50">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className="relative mt-16 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
          {/* Lingkaran blur di belakang gambar untuk memberikan dimensi (depth) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] rounded-full bg-ink/5 dark:bg-paper/5 blur-3xl pointer-events-none" />
          
          <div className="relative w-full max-w-md xl:max-w-xl transition-transform duration-700 hover:scale-[1.02]">
            <img
              src="/home.png" 
              alt="Ilustrasi Produk Cetak BaznetPrint"
              className="h-auto w-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}