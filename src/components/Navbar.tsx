"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const NAV_ITEMS = [
  { href: "/", label: "Beranda" },
  { href: "/Outlet", label: "Outlet" },
  { href: "/daftarproduk", label: "Daftar Jasa & Produk" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/85 dark:border-gray-900/85 dark:bg-[#121117]/85 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        
        {/* Logo */}
         

        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>

          <Image 

            src="/logorevisi.png" 

            alt="Logo Baznet Digicop" 

            width={70} 

            height={70} 

            className="object-contain transition-transform duration-300 group-hover:scale-105"

          />

          <span className="font-display text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100 transition-colors duration-300">

            Baznet<span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Digicop</span>

          </span>

        </Link>
        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 font-sans text-sm font-normal transition-colors ${
                  active 
                    ? "text-white dark:text-[#212529]"
                    : "text-gray-600 hover:text-[#212529] dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                {active && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-[#212529] dark:bg-white transition-colors duration-300" />
                )}
                {item.label}
              </Link>
            );
          })}
          
          <Link
            href="/kalkulator"
            className="ml-2 rounded-full border border-yellow-500/70 px-5 py-2.5 font-sans text-sm font-normal text-yellow-600 dark:text-yellow-400 transition-colors hover:bg-yellow-500 hover:text-white dark:hover:text-[#212529]"
          >
            Tanya Harga 
          </Link>

          {/* Desktop Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-[#212529] dark:text-yellow-400 transition-all duration-300 hover:opacity-80"
              aria-label="Toggle Mode"
            >
              {theme === 'dark' ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          )}
        </nav>

        {/* Mobile area */}
        <div className="flex items-center gap-4 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-[#212529] dark:text-yellow-400 transition-colors"
              aria-label="Toggle Mode"
            >
              {theme === 'dark' ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          )}

          <button
            aria-label="Buka menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`h-[1.5px] w-6 bg-[#212529] dark:bg-white transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span className={`h-[1.5px] w-6 bg-[#212529] dark:bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-[1.5px] w-6 bg-[#212529] dark:bg-white transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121117] px-5 pb-5 pt-3 md:hidden transition-colors duration-300">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-3 font-sans text-sm font-normal transition-colors duration-300 ${
                pathname === item.href 
                  ? "bg-[#212529] text-white dark:bg-white dark:text-[#212529]" 
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kalkulator"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-lg border border-yellow-500/70 px-3 py-3 font-sans text-sm font-normal text-center text-yellow-600 dark:text-yellow-400 transition-colors hover:bg-yellow-500 hover:text-white dark:hover:text-[#212529]"
          >
            Pesan Sekarang
          </Link>
        </nav>
      )}
    </header>
  );
}