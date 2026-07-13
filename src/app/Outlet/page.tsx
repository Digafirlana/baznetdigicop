import React from 'react';
import Image from 'next/image';

const OUTLETS = [
  {
    image: '/foto/baznet1.jpeg',
    label:
      'Jl. Bunga Kumis Kucing No.21 Blok A, Jatimulyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65141',
    title: 'Outlet 1',
    code: 'OUTLET-001',
    alt: 'Lokasi area produksi Baznet Print',
    csName: 'CS Kumis Kucing',
    csNumber: '08988075928',
  },
  {
    image: '/foto/baznet2.jpeg',
    label:
      'Jl. Pisang Kipas, Jatimulyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65141',
    title: 'Outlet 2',
    code: 'OUTLET-002',
    alt: 'Lokasi area produksi Baznet Print',
    link: null,
    csName: 'CS Pisang Kipas',
    csNumber: '085792079661',
  },
  {
    image: '/foto/baznet3.webp',
    label:
      'Jl. Raya Sekarpuro, Sekaran, Sekarpuro, Kec. Pakis, Kabupaten Malang, Jawa Timur 65154',
    title: 'Outlet 3',
    code: 'OUTLET-003',
    alt: 'Lokasi area produksi Baznet Print',
    link: null,
    csName: 'CS Sekarpuro',
    csNumber: '0881036669464',
  },
];

interface LocationCardProps {
  image: string;
  label: string;
  title: string;
  code: string;
  alt: string;
  link?: string | null;
}

function LocationCard({ image, label, title, code, alt, link }: LocationCardProps) {
  const content = (
    <div className="relative rounded-sm bg-[#FBF9F3] shadow-[0_1px_0_rgba(0,0,0,0.04)] ring-1 ring-black/10 transition-all duration-300 hover:shadow-md dark:bg-[#161420] dark:ring-white/10">
      <div className="absolute -left-[5px] top-6 h-[10px] w-[10px] rounded-full bg-white ring-1 ring-black/10 dark:bg-[#0B0A10] dark:ring-white/10" />
      <div className="absolute -right-[5px] top-6 h-[10px] w-[10px] rounded-full bg-white ring-1 ring-black/10 dark:bg-[#0B0A10] dark:ring-white/10" />

      <div className="relative overflow-hidden border-b border-dashed border-black/15 dark:border-white/15">
        <Image
          src={image}
          alt={alt}
          width={400}
          height={250}
          className="h-52 w-full object-cover grayscale-[15%] transition-all duration-300 hover:grayscale-0 sm:h-60"
          loading="lazy"
        />
      </div>

      <div className="px-5 py-5">
        <div className="flex items-baseline justify-between gap-3 border-b border-black/10 pb-3 dark:border-white/10">
          <h3 className="text-lg font-semibold text-[#1A1A1A] dark:text-white">{title}</h3>
          <span className="text-[11px] tracking-widest text-[#00833D] dark:text-[#7FE6AD]">{code}</span>
        </div>
        <p className="mt-3 text-[13px] leading-relaxed text-gray-600 dark:text-gray-400">{label}</p>
      </div>
    </div>
  );

  if (link) {
    return <a href={link}>{content}</a>;
  }
  return content;
}

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
          {OUTLETS.map((loc) => (
            <LocationCard
              key={loc.code}
              image={loc.image}
              label={loc.label}
              title={loc.title}
              code={loc.code}
              alt={loc.alt}
              link={loc.link}
            />
          ))}
        </div>

        <div className="mt-20 border-t border-black/10 pt-16 dark:border-white/10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] sm:text-4xl dark:text-white">
              Jasa Print, Fotocopy, Jilid & ATK Malang
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Melayani area Malang dan sekitarnya. Silakan pilih nomor WhatsApp Customer Service terdekat dari tempat Anda berada.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {OUTLETS.map((loc) => (
              <a
                key={loc.code}
                href={`https://wa.me/${loc.csNumber.replace(/^0/, '62')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center rounded-2xl border-2 border-[#00833D]/20 bg-[#FBF9F3] p-6 text-center transition-all duration-300 hover:border-[#00833D] hover:bg-[#00833D]/5 hover:shadow-lg hover:shadow-[#00833D]/10 dark:border-[#7FE6AD]/20 dark:bg-[#161420] dark:hover:border-[#7FE6AD] dark:hover:bg-[#7FE6AD]/5"
              >
                <span className="inline-block rounded-full bg-[#00833D] px-4 py-1.5 text-[11px] font-semibold tracking-widest text-white dark:bg-[#7FE6AD] dark:text-[#0B0A10]">
                  {loc.code}
                </span>
                <h4 className="mt-3 text-lg font-semibold text-[#1A1A1A] dark:text-white">
                  {loc.csName}
                </h4>
                <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {loc.csNumber.replace(/(\d{4})(\d{4})(\d+)/, '$1-$2-$3')}
                </p>

                <div className="mt-4 flex items-center justify-center rounded-full bg-[#00833D]/10 p-3 text-[#00833D] transition-all duration-300 group-hover:bg-[#00833D] group-hover:text-white dark:bg-[#7FE6AD]/10 dark:text-[#7FE6AD] dark:group-hover:bg-[#7FE6AD] dark:group-hover:text-[#0B0A10]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
