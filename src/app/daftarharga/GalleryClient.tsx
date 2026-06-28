"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import PortfolioGallery from "@/components/PortfolioGallery";

export default function GalleryClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      if (search) {
        params.set("search", search);
      } else {
        params.delete("search");
      }

      router.replace(`?${params.toString()}`);
    }, 300);

    return () => clearTimeout(timeout);
  }, [search, router, searchParams]);

  return (
    <section className="min-h-screen bg-paper dark:bg-ink transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

        {/* Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-ink/40 dark:text-paper/40">
              Galeri Kami
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-ink dark:text-paper">
              Daftar Harga
            </h1>

            <p className="mt-3 max-w-lg text-sm text-gray-500 dark:text-gray-400">
              Temukan berbagai layanan percetakan dengan cepat melalui fitur
              pencarian.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-96">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari banner, stiker, kartu nama..."
              className="
                h-12
                w-full
                rounded-full
                border
                border-gray-200
                bg-white
                pl-11
                pr-4
                text-sm
                shadow-sm
                outline-none
                transition-all

                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-100

                dark:border-zinc-700
                dark:bg-zinc-900
                dark:text-white
                dark:focus:ring-cyan-900
              "
            />

          </div>
        </div>

        {/* Gallery */}
        <div className="mt-12">
          <PortfolioGallery searchQuery={search} />
        </div>

      </div>
    </section>
  );
}