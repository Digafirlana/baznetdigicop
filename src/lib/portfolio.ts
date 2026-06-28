// lib/portfolio.ts

export interface PortofolioItem {
  id: string;
  nama: string;
  kategori: string;
  note: string;
  gambar: string;
}

const SPREADSHEET_ID = "1SIXNntmWUXvVIm2nibYZX4d_JUP-WbA8rL-cYkVjQ14";
const SHEET_NAME = "daftar harga";

// Gambar lokal per produk — sesuaikan path dengan file di folder public/
const GAMBAR_MAP: Record<string, string> = {
  "Cetak Buku": "/foto/cetak-buku.jpg",
  "Cetak Poster": "/foto/cetak-poster.jpg",
  "Cetak Undangan": "/foto/cetak-undangan.jpg",
  "Cutting Cutter": "/foto/cutting.jpg",
  "ATK (Alat Tulis Kantor)": "/foto/atk.jpg",
  "Desain Grafis": "/foto/desain.jpg",
  "Pengetikan": "/foto/pengetikan.jpg",
  "Jilid Hardcover": "/jilid.jpg",
  "Jilid Softcover (Lem Panas)": "/jilid-lem-panas.jpg",
  "Fotocopy": "/foto/fotocopy.jpg",
  "Print Dokumen": "/foto/print.jpg",
  "Laminating": "/foto/laminating.jpg",
  "Burning CD/DVD": "/foto/burning.jpg",
  "Buku Yasin": "/foto/buku-yasin.jpg",
};

function getGambar(nama: string): string {
  return GAMBAR_MAP[nama] ?? "";
}

function parseRow(row: (string | null)[], index: number): PortofolioItem | null {
  const nama = row[1]?.trim() ?? "";
  if (!nama || nama.toLowerCase() === "title") return null;

  return {
    id: `item-${index}`,
    note: row[0]?.trim() ?? "",
    nama,
    kategori: row[2]?.trim() || "Umum",
    // Pakai gambar dari spreadsheet jika ada, fallback ke GAMBAR_MAP
    gambar: row[3]?.trim() || getGambar(nama),
  };
}

export async function fetchPortofolio(): Promise<PortofolioItem[]> {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME)}`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`Fetch gagal: ${res.status}`);

    const text = await res.text();
    const jsonString = text.replace(/^[^\(]+\(/, "").replace(/\);?\s*$/, "");
    const json = JSON.parse(jsonString);

    const rows: (string | null)[][] = json.table.rows.map(
      (row: { c: ({ v: string | null } | null)[] }) =>
        row.c.map((cell) => (cell?.v != null ? String(cell.v) : null))
    );

    const items = rows
      .map((row, i) => parseRow(row, i))
      .filter((item): item is PortofolioItem => item !== null);

    return items.length > 0 ? items : DUMMY_DATA;
  } catch (error) {
    console.error("Gagal fetch spreadsheet:", error);
    return DUMMY_DATA;
  }
}

export function getKategori(items: PortofolioItem[]): string[] {
  const set = new Set(items.map((i) => i.kategori));
  return ["Semua", ...Array.from(set).sort()];
}

export const DUMMY_DATA: PortofolioItem[] = [
  { id: "d1", nama: "Cetak Buku", kategori: "Cetak", note: "hubungi nomer cs", gambar: getGambar("Cetak Buku") },
  { id: "d2", nama: "Cetak Poster", kategori: "Cetak", note: "hubungi nomer cs", gambar: getGambar("Cetak Poster") },
  { id: "d3", nama: "Cetak Undangan", kategori: "Cetak", note: "hubungi nomer cs", gambar: getGambar("Cetak Undangan") },
  { id: "d4", nama: "Cutting Cutter", kategori: "Finishing", note: "hubungi nomer cs", gambar: getGambar("Cutting Cutter") },
  { id: "d5", nama: "ATK (Alat Tulis Kantor)", kategori: "ATK", note: "hubungi nomer cs", gambar: getGambar("ATK (Alat Tulis Kantor)") },
  { id: "d6", nama: "Desain Grafis", kategori: "Desain", note: "hubungi nomer cs", gambar: getGambar("Desain Grafis") },
  { id: "d7", nama: "Pengetikan", kategori: "Desain", note: "hubungi nomer cs", gambar: getGambar("Pengetikan") },
  { id: "d8", nama: "Jilid Hardcover", kategori: "Jilid", note: "hubungi nomer cs", gambar: getGambar("Jilid Hardcover") },
  { id: "d9", nama: "Jilid Softcover (Lem Panas)", kategori: "Jilid", note: "hubungi nomer cs", gambar: getGambar("Jilid Softcover (Lem Panas)") },
  { id: "d10", nama: "Fotocopy", kategori: "Cetak", note: "hubungi nomer cs", gambar: getGambar("Fotocopy") },
  { id: "d11", nama: "Print Dokumen", kategori: "Cetak", note: "hubungi nomer cs", gambar: getGambar("Print Dokumen") },
  { id: "d12", nama: "Laminating", kategori: "Finishing", note: "hubungi nomer cs", gambar: getGambar("Laminating") },
  { id: "d13", nama: "Burning CD/DVD", kategori: "Lainnya", note: "hubungi nomer cs", gambar: getGambar("Burning CD/DVD") },
  { id: "d14", nama: "Buku Yasin", kategori: "Cetak", note: "hubungi nomer cs", gambar: getGambar("Buku Yasin") },
];