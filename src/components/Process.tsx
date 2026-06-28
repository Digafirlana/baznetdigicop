const STEPS = [
  {
    n: "01",
    title: "Produk Berkualitas",
    desc: "Mengutamakan hasil cetak yang tajam, presisi, dan tahan lama dengan standar kualitas terbaik.",
  },
  {
    n: "02",
    title: "Pelayanan yang Baik dan Responsif",
    desc: "Kami hadir untuk mendengarkan kebutuhan Anda dengan cepat, ramah, dan solusi yang tepat.",
  },
  {
    n: "03",
    title: "Komitmen Kepuasan",
    desc: "Salam adalah doa dan penghormatan. Membiasakan salam membangun hubungan manusiawi dan memastikan setiap pelanggan merasa dihargai.",
  },
];

export default function Process() {
  return (
    <section className="border-y border-gray-200 dark:border-ink-line bg-white dark:bg-ink-surface transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        
        {/* Sub-header */}
        <p className="font-mono text-xs uppercase tracking-widest text-ink/40 dark:text-paper/40">
          Layanan Prima
        </p>
        
        {/* Title */}
        <h1 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
          Komitmen Kami
        </h1>
        
        {/* Sub-title */}
        <h2 className="mt-3 max-w-3xl font-display text-2xl font-medium leading-snug text-ink/80 dark:text-paper/80 sm:text-3xl">
          Menjadi perusahaan digital printing yang profesional, religius, dicintai, dan selalu progresif.
        </h2>

        {/* Steps Grid */}
        <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Garis Horizontal Background */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[22px] hidden h-px bg-gray-200 dark:bg-ink-line lg:block"
          />
          
          {STEPS.map((step) => (
            <div key={step.n} className="relative">
              {/* Nomor */}
              <span className="relative z-10 inline-block bg-white dark:bg-ink-surface pr-3 font-mono text-sm text-ink/30 dark:text-paper/35">
                {step.n}
              </span>
              
              {/* Judul */}
              <h3 className="mt-4 font-display text-lg font-semibold text-ink dark:text-paper">
                {step.title}
              </h3>
              
              {/* Deskripsi */}
              <p className="mt-2 font-body text-sm leading-relaxed text-ink/60 dark:text-paper/55">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}