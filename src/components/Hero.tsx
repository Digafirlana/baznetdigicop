"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const words = [
    "Printing & ATK",
    "Fotocopy & Jilid",
    "Digital Printing",
    "Hardcover",
    "Softcover",
    "Jilid Spiral",
    "Sticker & ID Card",
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 40 : 90;
    const pauseTime = 1500;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // sedang mengetik
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // sedang menghapus
        setDisplayText(currentWord.slice(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText, isDeleting, wordIndex]);

  const stats = [
    { value: "Buka Setiap Hari", label: "Jam Operasional" },
    { value: "3 Outlet", label: "Tersebar di Malang" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const textUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 60,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative overflow-hidden border-b border-gray-200 dark:border-ink-line bg-paper dark:bg-ink transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-8 sm:py-24 lg:flex lg:items-center lg:justify-between gap-16">
        {/* Kolom Kiri */}
        <motion.div
          className="lg:w-1/2 flex flex-col justify-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-sans text-4xl font-extrabold leading-[1.2] tracking-tight text-[#212529] dark:text-white sm:text-5xl md:text-6xl lg:leading-[1.15]"
            variants={textUpVariants}
          >
            Sahabat Kebutuhan <br className="hidden sm:block" />
            <span className="inline-block text-[#00B956] min-h-[1.2em]">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block w-[3px] h-[0.9em] bg-[#00B956] ml-1 align-middle"
              />
            </span>{" "}
            <br />
            <span className="bg-gradient-to-r from-[#00B956] to-[#00B956] bg-clip-text text-transparent">
              Malang
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-lg font-sans text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg"
            variants={textUpVariants}
          >
            Kami mengutamakan pelanggan dengan memberikan pelayanan yang ramah,
            proses yang cepat, dan kualitas yang terjamin.
          </motion.p>

          {/* Tombol */}
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            variants={textUpVariants}
          >
            <Link
              href="/kalkulator"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white px-8 py-3 font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300"
            >
              <motion.span
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center"
              >
                <svg
                  className="mr-2.5 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hubungi Kami
              </motion.span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-14 border-t border-ink/10 dark:border-paper/10 pt-8"
            variants={textUpVariants}
          >
            <dl className="grid grid-cols-2 gap-8 max-w-md">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <dt className="font-sans text-2xl font-extrabold text-[#212529] dark:text-white sm:text-3xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 font-mono text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </motion.div>

        {/* Kolom Kanan */}
        <div className="relative mt-16 lg:mt-0 lg:-mt-10 xl:-mt-16 lg:w-1/2 flex justify-center lg:justify-end lg:items-start">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] rounded-full bg-ink/5 dark:bg-paper/5 blur-3xl pointer-events-none" />

          <motion.div
            className="relative w-full max-w-lg xl:max-w-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
            transition={{
              opacity: { duration: 1 },
              scale: { duration: 1 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Image
              src="/mainmenu1.png"
              alt="Ilustrasi Produk Cetak BaznetPrint"
              width={800}
              height={600}
              className="h-auto w-full object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
