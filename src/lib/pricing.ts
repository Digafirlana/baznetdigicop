export type PrintProduct = {
  id: string;
  name: string;
  unit: string;
  pricePerUnit: number;
  minQty: number;
  step: number;
  desc: string;
};

export const PRODUCTS: PrintProduct[] = [
  {
    id: "cetak-buku",
    name: "Cetak Buku",
    unit: "lembar",
    pricePerUnit: 0,
    minQty: 1,
    step: 1,
    desc: "Cetak buku hitam-putih/ warna (tanya CS untuk detail).",
  },
  {
    id: "cetak-poster",
    name: "Cetak Poster",
    unit: "lembar",
    pricePerUnit: 0,
    minQty: 1,
    step: 1,
    desc: "Poster ukuran A3, A2, atau custom.",
  },
  {
    id: "cetak-undangan",
    name: "Cetak Undangan",
    unit: "lembar",
    pricePerUnit: 0,
    minQty: 1,
    step: 1,
    desc: "Undangan pernikahan, khitanan, dll.",
  },
  {
    id: "cutting-cutter",
    name: "Cutting Cutter",
    unit: "pcs",
    pricePerUnit: 0,
    minQty: 1,
    step: 1,
    desc: "Jasa potong kertas/ karton presisi.",
  },
  {
    id: "atk",
    name: "ATK (Alat Tulis Kantor)",
    unit: "pcs",
    pricePerUnit: 0,
    minQty: 1,
    step: 1,
    desc: "Pulpen, pensil, penghapus, buku tulis, dll.",
  },
  {
    id: "desain",
    name: "Desain Grafis",
    unit: "file/proyek",
    pricePerUnit: 0,
    minQty: 1,
    step: 1,
    desc: "Desain logo, banner, brosur, dll.",
  },
  {
    id: "pengetikan",
    name: "Pengetikan",
    unit: "halaman",
    pricePerUnit: 0,
    minQty: 1,
    step: 1,
    desc: "Ketik ulang dokumen, skripsi, proposal.",
  },
  {
    id: "jilid-hardcover",
    name: "Jilid Hardcover",
    unit: "buku",
    pricePerUnit: 0,
    minQty: 1,
    step: 1,
    desc: "Jilid tebal cover keras, cocok untuk skripsi.",
  },
  {
    id: "jilid-softcover",
    name: "Jilid Softcover (Lem Panas)",
    unit: "buku",
    pricePerUnit: 0,
    minQty: 1,
    step: 1,
    desc: "Jilid lem panas dengan cover warna.",
  },
  {
    id: "fotocopy",
    name: "Fotocopy",
    unit: "lembar",
    pricePerUnit: 0,
    minQty: 1,
    step: 1,
    desc: "Fotocopy hitam-putih/ warna ukuran A4/F4.",
  },
  {
    id: "print",
    name: "Print Dokumen",
    unit: "lembar",
    pricePerUnit: 0,
    minQty: 1,
    step: 1,
    desc: "Cetak dari file, hitam-putih atau warna.",
  },
  {
    id: "laminating",
    name: "Laminating",
    unit: "lembar",
    pricePerUnit: 0,
    minQty: 1,
    step: 1,
    desc: "Laminasi dokumen ukuran KTP hingga A3.",
  },
  {
    id: "burning",
    name: "Burning CD/DVD",
    unit: "keping",
    pricePerUnit: 0,
    minQty: 1,
    step: 1,
    desc: "Salin data ke CD/ DVD + label.",
  },
  {
    id: "buku-yasin",
    name: "Buku Yasin",
    unit: "buku",
    pricePerUnit: 0,
    minQty: 1,
    step: 1,
    desc: "Cetak buku yasin custom cover.",
  },
];

export const FINISHING_OPTIONS = [
  { id: "none", label: "⭐", extra: 0 },
] as const;

export const RUSH_FEE_PERCENT = 25;