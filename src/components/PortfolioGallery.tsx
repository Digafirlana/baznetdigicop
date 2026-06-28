"use client";

import { useState } from "react";
import Image from "next/image";
import { PORTFOLIO, CATEGORIES } from "@/lib/portfolio";

export default function PortfolioGallery() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("Semua");

  const filtered =
    active === "Semua"
      ? PORTFOLIO
      : PORTFOLIO.filter((item) => item.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors ${
              active === cat
                ? "border-paper bg-paper text-ink"
                : "border-ink-line text-paper/55 hover:border-paper/40 hover:text-paper"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <figure
            key={item.id}
            className="crop-marks group overflow-hidden rounded-2xl border border-ink-line bg-ink-card"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <figcaption className="p-5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-paper/35">
                {item.category}
              </span>
              <h3 className="mt-1.5 font-display text-base font-semibold leading-snug text-paper">
                {item.title}
              </h3>
              <p className="mt-1.5 font-body text-xs leading-relaxed text-paper/50">
                {item.note}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center font-body text-sm text-paper/40">
          Belum ada contoh untuk kategori ini.
        </p>
      )}
    </div>
  );
}
