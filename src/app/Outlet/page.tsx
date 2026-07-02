// Data lokasi
const LOCATIONS = [
  {
    image: '/lokasi-1.png',
    label: 'Jl. Bunga Kumis Kucing No.21 Blok A, Jatimulyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65141',
    title: 'Outlet 1',
 
    alt: 'Lokasi toko Baznet Print tampak dalam'
  },
  {
    image: '/lokasi-2.png',
    label: 'Jl. Pisang Kipas, Jatimulyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65141',
    title: 'Outlet 2',
   
    alt: 'Lokasi area produksi Baznet Print'
  },
  {
    image: '/lokasi-3.png',
    label: 'Jl. Raya Sekarpuro, Sekaran, Sekarpuro, Kec. Pakis, Kabupaten Malang, Jawa Timur 65154',
    title: 'Outlet 3',
    alt: 'Lokasi area produksi Baznet Print'
  }
];

// Kartu lokasi bergaya label pengiriman / tiket cetak
function LocationCard({ image, label, title, code, alt }) {
  return (
    <div className="relative rounded-sm bg-[#FBF9F3] shadow-[0_1px_0_rgba(0,0,0,0.04)] ring-1 ring-black/10 dark:bg-[#161420] dark:ring-white/10">
      {/* lubang perforasi ala label cetak */}
      <div className="absolute -left-[5px] top-6 h-[10px] w-[10px] rounded-full bg-white ring-1 ring-black/10 dark:bg-[#0B0A10] dark:ring-white/10" />
      <div className="absolute -right-[5px] top-6 h-[10px] w-[10px] rounded-full bg-white ring-1 ring-black/10 dark:bg-[#0B0A10] dark:ring-white/10" />

      <div className="relative overflow-hidden border-b border-dashed border-black/15 dark:border-white/15">
        <img
          src={image}
          alt={alt}
          className="h-52 w-full object-cover grayscale-[15%] transition-all duration-300 hover:grayscale-0 sm:h-60"
          loading="lazy"
        />
      </div>

      <div className="px-5 py-5">
        <div className="flex items-baseline justify-between gap-3 border-b border-black/10 pb-3 dark:border-white/10">
          <h3 className="text-lg font-semibold text-[#1A1A1A] dark:text-white">
            {title}
          </h3>
          <span className="text-[11px] tracking-widest text-[#00833D] dark:text-[#7FE6AD]">
            {code}
          </span>
        </div>
        <p className="mt-3 text-[13px] leading-relaxed text-gray-600 dark:text-gray-400">
          {label}
        </p>
      </div>
    </div>
  );
}

// Komponen Utama
export default function LokasiPage() {
  return (
    <main className="bg-[#F4F1EA] text-gray-900 transition-colors duration-300 dark:bg-[#0B0A10] dark:text-white">
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#1A1A1A] sm:text-5xl dark:text-white">
          Tiga titik outlet
        </h2>
        <p className="mt-4 max-w-xl text-gray-600 dark:text-gray-400">
          Dari pemesanan di toko sampai hasil cetak besar, ini alamat lengkap setiap titik Baznet Print yang bisa kamu datangi langsung.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <LocationCard key={loc.code} {...loc} />
          ))}
        </div>
      </section>
    </main>
  );
}