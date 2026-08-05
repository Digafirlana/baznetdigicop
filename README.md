# Baznet Print — Website (Next.js)

Website untuk jasa percetakan **Baznet Print**: cetak dokumen, banner, kartu nama, stiker, dan kebutuhan cetak lainnya.

## Halaman

- `/` — Beranda
- `/tentang` — Profil, visi misi, nilai, dan timeline perusahaan
- `/kalkulator` — Kalkulator estimasi harga cetak (interaktif)
- `/dokumentasi` — Galeri portofolio hasil cetak (dengan filter kategori)

## Cara menjalankan di komputer Anda

Pastikan **Node.js versi 18 ke atas** sudah terpasang ([download di sini](https://nodejs.org)).

1. Ekstrak file ZIP ini.
2. Buka folder hasil ekstrak lewat terminal/Command Prompt.
3. Install semua dependency:
   ```bash
   npm install
   ```
4. Jalankan mode development:
   ```bash
   npm run dev
   ```
5. Buka browser ke **http://localhost:3000**

## Build untuk produksi

```bash
npm run build
npm start
```

## Struktur penting

```
src/
  app/
    page.tsx              -> Halaman Beranda
    tentang/page.tsx       -> Halaman Tentang
    kalkulator/page.tsx    -> Halaman Kalkulator
    dokumentasi/page.tsx   -> Halaman Dokumentasi
    layout.tsx             -> Layout utama (Navbar + Footer + font)
    globals.css            -> Style global & utilities
  components/               -> Semua komponen UI (Hero, Navbar, Footer, dll)
  lib/
    pricing.ts              -> Data produk & harga kalkulator (EDIT DI SINI)
    portfolio.ts             -> Data galeri dokumentasi (EDIT DI SINI)
public/
  portfolio/                -> Gambar/SVG contoh hasil cetak
```

## Mengubah harga & produk kalkulator

Edit langsung file `src/lib/pricing.ts` — tambah, ubah, atau hapus item di
array `PRODUCTS`, ubah `pricePerUnit` sesuai harga riil Anda.

## Mengganti nomor WhatsApp

Cari teks `6281234567890` di `src/components/PriceCalculator.tsx` dan ganti
dengan nomor WhatsApp bisnis Anda (format: kode negara tanpa tanda +, contoh
`62812xxxxxxx`).

## Mengganti gambar portofolio

File contoh saat ini berupa SVG placeholder bergaya swatch warna di folder
`public/portfolio/`. Ganti dengan foto asli hasil cetak Anda (JPG/PNG/WebP),
lalu update path gambar di `src/lib/portfolio.ts`.

## Teknologi

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Font: Space Grotesk, Inter, JetBrains Mono (via next/font/google)

