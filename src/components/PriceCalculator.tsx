"use client";

import { useState, useEffect } from "react";
import { PRODUCTS, type PrintProduct } from "@/lib/pricing";

type CartLine = {
  productId: string;
  qty: number;
};

function emptyLine(product: PrintProduct): CartLine {
  return { productId: product.id, qty: product.minQty };
}

const BRANCHES = [
  { id: "Outlet", name: "Cabang 1 - Lowokwaru", address: "Jl. Bunga Kumis Kucing No.21 Blok A", phone: "628988075928" },
  { id: "cabang2", name: "Cabang 2 - Lowokwaru", address: "Jl. Pisang Kipas", phone: "6285792079661" },
] as const;

export default function PriceCalculator() {
  const [lines, setLines] = useState<CartLine[]>([emptyLine(PRODUCTS[0])]);
  const [selectedBranch, setSelectedBranch] = useState<string>(BRANCHES[0].id);
  const [isDark, setIsDark] = useState(false);

  // Toggle dark mode
  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("dark", isDark);
  }, [isDark]);

  const productMap = new Map(PRODUCTS.map((p) => [p.id, p]));

  function updateLine(index: number, patch: Partial<CartLine>) {
    setLines((prev) => prev.map((line, i) => (i === index ? { ...line, ...patch } : line)));
  }

  function addLine() {
    setLines((prev) => [...prev, emptyLine(PRODUCTS[0])]);
  }
  function removeLine(index: number) {
    setLines((prev) => prev.filter((_, i) => i !== index));
  }

  const branch = BRANCHES.find((b) => b.id === selectedBranch) ?? BRANCHES[0];

  // Daftar barang untuk pesan WA
  const itemList = lines
    .map((line) => {
      const product = productMap.get(line.productId);
      if (!product) return "";
      const qty = Math.max(product.minQty, line.qty || product.minQty);
      return `- ${product.name} x${qty} ${product.unit}`;
    })
    .filter(Boolean)
    .join("\n");

  const csMessage = encodeURIComponent(
    `Halo Baznet Print (${branch.name}), saya ingin pesan:\n${itemList}\n\nKira-kira berapa harganya?`
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 p-6 md:p-12">
      {/* Toggle Dark Mode */}
      <div className="mx-auto max-w-5xl mb-6 flex justify-end">
      
      </div>

      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
            Pesanan
          </p>
          <h2 className="text-3xl font-bold">
            Pilih barang yang ingin dicetak.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          {/* Form */}
          <div className="space-y-5">
            {lines.map((line, index) => (
              <div
                key={index}
                className="relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-sm transition-colors"
              >
                {lines.length > 1 && (
                  <button
                    onClick={() => removeLine(index)}
                    className="absolute right-6 top-6 text-xs uppercase text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  >
                    Hapus
                  </button>
                )}
                <div className="grid gap-4 sm:grid-cols-2">
                  <label>
                    <span className="font-mono text-[11px] uppercase text-gray-500 dark:text-gray-400">
                      Barang
                    </span>
                    <select
                      value={line.productId}
                      onChange={(e) => updateLine(index, { productId: e.target.value })}
                      className="mt-2 w-full rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 px-3 py-2.5 text-sm text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    <span className="font-mono text-[11px] uppercase text-gray-500 dark:text-gray-400">
                      Jumlah ({productMap.get(line.productId)?.unit || "lembar"})
                    </span>
                    <input
                      type="number"
                      value={line.qty}
                      onChange={(e) => updateLine(index, { qty: Number(e.target.value) })}
                      className="mt-2 w-full rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 px-3 py-2.5 text-sm text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </label>
                </div>
              </div>
            ))}
            <button
              onClick={addLine}
              className="w-full rounded-2xl border border-dashed border-gray-300 dark:border-gray-600 py-4 text-xs uppercase text-gray-500 dark:text-gray-400 hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors"
            >
              + Tambah jenis barang
            </button>
          </div>

          {/* Ringkasan – tanpa harga */}
          <div className="sticky top-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-7 shadow-sm transition-colors">
            <p className="font-mono text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-5">
              Ringkasan Pesanan
            </p>
            <div className="space-y-3">
              {lines.map((line, i) => {
                const product = productMap.get(line.productId);
                if (!product) return null;
                const qty = Math.max(product.minQty, line.qty || product.minQty);
                return (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">
                      {product.name}
                    </span>
                    <span className="font-mono text-gray-900 dark:text-gray-100">
                      x{qty} {product.unit}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-5 space-y-4">
              <select
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="w-full rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 px-3 py-2.5 text-sm text-gray-900 dark:text-gray-100 outline-none"
              >
                {BRANCHES.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                ))}
              </select>

              <a
                href={`https://wa.me/${branch.phone}?text=${csMessage}`}
                target="_blank"
                className="block w-full rounded-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white py-3.5 text-center text-sm font-medium uppercase tracking-wider transition-colors shadow-md"
              >
                 Tanya CS via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}