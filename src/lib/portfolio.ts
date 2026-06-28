export type PortfolioItem = {

  title: string;
  category: "Dokumen" | "Banner" | "Kartu Nama" | "Stiker" | "Undangan" | "Menu";
  image: string;
  note: string;
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "dokumen-1",
    title: "Laporan Tahunan — CV Mitra Jaya",
    category: "Dokumen",
    image: "/portfolio/dokumen-1.svg",
    note: "120 hlm, jilid lakban, cover art carton.",
  },
  {
    id: "buku-1",
    title: "Buku Panduan Operasional",
    category: "Dokumen",
    image: "/portfolio/buku-1.svg",
    note: "Spiral kawat, cover mika bening.",
  },
  {
    id: "dokumen-2",
    title: "Proposal Bisnis — Startup Lokal",
    category: "Dokumen",
    image: "/portfolio/dokumen-2.svg",
    note: "Cetak warna, jilid soft cover.",
  },
  {
    id: "banner-1",
    title: "Banner Grand Opening — Resto Nusantara",
    category: "Banner",
    image: "/portfolio/banner-1.svg",
    note: "3x1,5 m, flexi outdoor, mata ayam tiap 50cm.",
  },
  {
    id: "banner-2",
    title: "Banner Promo — Diskon 50%",
    category: "Banner",
    image: "/portfolio/banner-2.svg",
    note: "2x1 m, indoor, finishing lipat tepi.",
  },
  {
    id: "kartu-1",
    title: "Kartu Nama — Studio Kreatif",
    category: "Kartu Nama",
    image: "/portfolio/kartu-1.svg",
    note: "Art carton 260gsm, laminasi doff.",
  },
  {
    id: "kartu-2",
    title: "Kartu Nama — Biro Arsitek",
    category: "Kartu Nama",
    image: "/portfolio/kartu-2.svg",
    note: "Glossy, sudut potong rounded.",
  },
  {
    id: "stiker-1",
    title: "Label Produk — Kopi Nusantara",
    category: "Stiker",
    image: "/portfolio/stiker-1.svg",
    note: "Vinyl kiss-cut, bentuk lingkaran custom.",
  },
  {
    id: "stiker-2",
    title: "Stiker Logo — Batch Custom",
    category: "Stiker",
    image: "/portfolio/stiker-2.svg",
    note: "A3, vinyl outdoor tahan air.",
  },
  {
    id: "undangan-1",
    title: "Undangan Pernikahan — A & B",
    category: "Undangan",
    image: "/portfolio/undangan-1.svg",
    note: "Art paper 190gsm, foil emas.",
  },
  {
    id: "undangan-2",
    title: "Undangan Ulang Tahun Anak",
    category: "Undangan",
    image: "/portfolio/undangan-2.svg",
    note: "Cetak dupleks, bentuk custom die-cut.",
  },
  {
    id: "menu-1",
    title: "Menu Kafe — Edisi Musim",
    category: "Menu",
    image: "/portfolio/menu-1.svg",
    note: "Laminasi glossy, tahan air & noda.",
  },
];

export const CATEGORIES = [
  "Semua",
  "Dokumen",
  "Banner",
  "Kartu Nama",
  "Stiker",
  "Undangan",
  "Menu",
] as const;
