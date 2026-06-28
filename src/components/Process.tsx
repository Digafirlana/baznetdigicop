"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Produk Berkualitas",
    desc: "",
  },
  {
    n: "02",
    title: "Pelayanan yang Baik dan Responsif",
    desc: "",
  },
  {
    n: "03",
    title: "Komitmen Kepuasan",
    desc: "",
  },
];

export default function Process() {
  // 1. Varian untuk container atas (Text Reveal)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // 2. Varian item teks meluncur dari bawah dengan halus
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  // 3. Varian grid langkah (Muncul bergantian saat di-scroll)
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
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
          
          {/* Sisi Kiri: Teks dengan Animasi Reveal */}
          <motion.div 
            className="flex-1 max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* H1 YANG DISESUAIKAN DENGAN GAMBAR */}
            <motion.h1 
              className="font-sans text-4xl font-extrabold tracking-tight text-[#212529] dark:text-white sm:text-5xl leading-tight"
              variants={textVariants}
            >
              Spesialis grosir Alat Tulis & Kantor <span className="text-[#00B956]">Lengkap</span>
            </motion.h1>
            
            <motion.h2 
              className="mt-4 font-sans text-lg font-normal leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl opacity-90"
              variants={textVariants}
            >
              Menjadi perusahaan digital printing yang profesional, religius, dicintai, dan selalu progresif.
            </motion.h2>
          </motion.div>

          {/* Sisi Kanan: Gambar Ilustrasi dengan Animasi Melayang */}
          <motion.div 
            className="flex-shrink-0 mx-auto md:mx-0"
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0] // Efek floating halus naik turun otomatis
            }}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }
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

        {/* Konten Bawah: Grid Steps dengan Garis Horizontal & Animasi Stagger */}
        <motion.div 
          className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          
          {/* Garis Horizontal Background dengan Animasi Melebar (Scale-X) */}
          <motion.div
            aria-hidden
            className="absolute left-0 right-0 top-[10px] hidden h-px bg-gray-200 dark:bg-gray-800 lg:block origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          />
          
          {STEPS.map((step) => (
            <motion.div 
              key={step.n} 
              className="relative z-10"
              variants={stepVariants}
            >
              {/* Nomor Urut */}
              <span className="inline-block bg-white dark:bg-[#121117] pr-4 font-mono text-xs tracking-wider text-gray-400 dark:text-gray-500 transition-colors duration-300">
                {step.n}
              </span>
              
              {/* Judul Langkah */}
              <h3 className="mt-3 font-sans text-base font-medium text-gray-800 dark:text-gray-200">
                {step.title}
              </h3>
              
              {/* Deskripsi */}
              {step.desc && (
                <p className="mt-2 font-sans text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {step.desc}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}