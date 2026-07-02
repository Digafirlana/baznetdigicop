"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const STEPS = [
  { title: "Produk Berkualitas" },
  { title: "Pelayanan yang Baik dan Responsif" },
  { title: "Komitmen Kepuasan" },
];

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white dark:bg-[#121117] text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">

        {/* Konten Atas: Teks (Kiri) dan Gambar (Kanan) */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

          {/* Sisi Kiri: Teks */}
          <motion.div
            className="flex-1 max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h1
              className="font-sans text-4xl font-extrabold tracking-tight text-[#212529] dark:text-white sm:text-5xl leading-tight"
              variants={textVariants}
            >
              Spesialis grosir Alat Tulis & Kantor{" "}
              <span className="text-[#00B956]">Lengkap</span>
            </motion.h1>

            <motion.h2
              className="mt-4 font-sans text-lg font-normal leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl opacity-90"
              variants={textVariants}
            >
              Menjadi perusahaan digital printing yang profesional, religius,
              dicintai, dan selalu progresif.
            </motion.h2>

            {/* List dengan ikon centang hijau */}
            <motion.div
              className="mt-6 flex flex-col gap-3"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  variants={stepVariants}
                >
                  {/* Ikon centang hijau */}
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#00B956]">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="font-sans text-sm text-gray-700 dark:text-gray-300">
                    {step.title}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Sisi Kanan: Gambar */}
          <motion.div
            className="flex-shrink-0 mx-auto md:mx-0"
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Image
              src="/komitmenkami.png"
              alt="Ilustrasi Komitmen"
              width={380}
              height={380}
              className="object-contain drop-shadow-xl"
              priority
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}