"use client";

import { useState, useMemo, useEffect } from "react";
import { PortofolioItem, getKategori, fetchPortofolio, DUMMY_DATA } from "@/lib/portfolio";

function highlight(text: string, query: string) {
  if (!query.trim()) return <>{text}</>;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? <mark key={i} className="pg-mark">{part}</mark> : part
      )}
    </>
  );
}

function ProductCard({ item, query }: { item: PortofolioItem; query: string }) {
  const [imgError, setImgError] = useState(false);
  const hasImg = item.gambar && !imgError;

  return (
    <article className="pg-card group">
      <div className="pg-card-img">
        {hasImg ? (
          <img 
            src={item.gambar} 
            alt={item.nama} 
            onError={() => setImgError(true)} 
            className="pg-img group-hover:scale-105 transition-transform duration-300" 
            loading="lazy"
          />
        ) : (
          <span className="pg-img-fallback">🖨️</span>
        )}
        <span className="pg-badge">{item.kategori}</span>
      </div>
      
      <div className="pg-card-body">
        <h3 className="pg-card-name">{highlight(item.nama, query)}</h3>
        <p className="pg-card-note">{item.note || "Hubungi CS untuk harga"}</p>
        
        <a 
          href={`https://wa.me/6285792079661?text=Halo Baznet%2C%20%20berapa%20harga%20${encodeURIComponent(item.nama)}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white rounded-xl font-semibold text-sm hover:from-[#128C7E] hover:to-[#075E54] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/40 transition-all duration-300 mt-auto"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            aria-hidden="true"
            className="group-hover:scale-110 group-hover:-rotate-5 transition-transform duration-300"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span>Chat via WhatsApp</span>
        </a>
      </div>
    </article>
  );
}

export default function PortfolioGallery() {
  const [items, setItems] = useState<PortofolioItem[]>(DUMMY_DATA);
  const [query, setQuery] = useState("");
  const [activeKategori, setActiveKategori] = useState("Semua");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortofolio()
      .then(setItems)
      .catch(() => setItems(DUMMY_DATA))
      .finally(() => setLoading(false));
  }, []);

  const kategoriList = useMemo(() => getKategori(items), [items]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return items.filter(item => {
      const matchK = activeKategori === "Semua" || item.kategori === activeKategori;
      const matchQ = !q || [item.nama, item.kategori, item.note].some(s => 
        s?.toLowerCase().includes(q)
      );
      return matchK && matchQ;
    });
  }, [items, query, activeKategori]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-white/95 dark:bg-[#0a0a0f]/95 backdrop-blur-xl py-4 border-b border-gray-200/80 dark:border-gray-800/80 mb-8 transition-colors duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-[480px]">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none transition-colors duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx={11} cy={11} r={8} />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </span>
            <input
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Cari produk atau kategori..."
              className="w-full pl-11 pr-10 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-green-500 dark:focus:border-green-400 focus:bg-white dark:focus:bg-gray-900 focus:ring-4 focus:ring-green-500/10 outline-none transition-all duration-200"
              aria-label="Cari produk"
            />
       
          </div>

          {/* Filters */}
          <div className="flex gap-2 flex-wrap" role="tablist" aria-label="Filter kategori">
            {kategoriList.map(kat => (
              <button
                key={kat}
                onClick={() => setActiveKategori(kat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all duration-200 whitespace-nowrap
                  ${activeKategori === kat 
                    ? 'bg-green-500 border-green-500 text-white shadow-lg shadow-green-500/25' 
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent text-gray-600 dark:text-gray-400 hover:border-green-500 dark:hover:border-green-400 hover:text-green-600 dark:hover:text-green-400'
                  }`}
                role="tab"
                aria-selected={activeKategori === kat}
              >
                {kat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-[400px]">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 transition-colors duration-300">
          {loading ? " Memuat data..." :
            filtered.length === 0 ? " Tidak ada produk ditemukan." :
              ` Menampilkan ${filtered.length} dari ${items.length} produk${query ? ` untuk "${query}"` : ""}`
          }
        </p>

        {loading ? (
          <div className="pg-grid">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="pg-card pointer-events-none">
                <div className="pg-card-img">
                  <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 bg-[length:200%_100%] animate-shimmer" />
                </div>
                <div className="pg-card-body">
                  <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded bg-[length:200%_100%] animate-shimmer" />
                  <div className="h-4 w-3/5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded bg-[length:200%_100%] animate-shimmer mt-2" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center py-20 text-center text-gray-400 dark:text-gray-500 transition-colors duration-300">
  {/* Ikon Pencarian Kosong (SVG) */}
  <span className="mb-6 block">
    <svg 
      className="w-24 h-24 text-gray-200 dark:text-gray-800 transition-colors duration-300" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      {/* Tambahkan garis silang kecil di dalam lingkaran sebagai indikator 'kosong' */}
      <line x1="8" y1="8" x2="14" y2="14" />
      <line x1="14" y1="8" x2="8" y2="14" />
    </svg>
  </span>

  <p className="text-lg font-medium mb-6">Tidak ada produk yang cocok</p>

  <button 
    onClick={() => { setQuery(""); setActiveKategori("Semua"); }} 
    className="px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/25"
  >
    Reset Pencarian
  </button>
</div>
        ) : (
          <div className="pg-grid">
            {filtered.map(item => (
              <ProductCard key={item.id} item={item} query={query} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}