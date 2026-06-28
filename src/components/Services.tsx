"use client";

import React from "react";
import { motion } from "framer-motion";

const REVIEWS = [
  { name: "Hanafah", rating: 5, text: "super lengkap banget! sering ngeprint disini dan super cepat, mas-masnya ramah dan membantu banget🥳", date: "5 bulan lalu" },
  { name: "Muhammad Raja Hamonangan Pasaribu", rating: 5, text: "Udah langganan. Bisa pesen melalui WA, jadi kesana tinggal ambil aja.. lalu bisa bawa kertas sendiri jugaaaaaa", date: "5 bulan lalu" },
  { name: "Mita Sania Qurrota Ayunin", rating: 5, text: "Mas nya sat set ngeprintnya, terus cetakannya bagus banget, jilid tanpa ada yang cacat, terus mas nya fast respon kalau di chat. Toko cetakan paling sip ndak mantap", date: "5 bulan lalu" },
  { name: "dharren", rating: 5, text: "Lokasinya di tepi jalan raya. Pelayanan bagus, ramah dan cepat.", date: "2 minggu lalu" },
  { name: "Juan Pakpahan", rating: 5, text: "Harga bersaing, kualitas cetak bagus. Pengiriman tepat waktu.", date: "1 minggu lalu" },
  { name: "Dewi Lestari", rating: 5, text: "Stiker vinyl untuk produk saya cetaknya presisi, lengketnya kuat. Rekomendasi banget!", date: "2 bulan lalu" },
  { name: "F_TAUFIK HIDAYAT", rating: 5, text: "Pelayanan sangat ramah, bales chat nya cepat, mudah dikomunikasikan sehingga sangat membantu dan rekomendasi untuk tempat Print", date: "3 bulan lalu" },
  { name: "Siti Rahma", rating: 5, text: "Banner untuk acara kantor selesai dalam 3 jam, kualitas cetak tajam dan warnanya terang.", date: "1 bulan lalu" },
  { name: "Adelfia Mars Sekar Arum", rating: 5, text: "udah langganan dari magang sampe skripsian, pengerjaannya rapi, mas”nya sabar, bisa dikirim lewat wa terus tinggal ngambil", date: "3 minggu lalu" },
  { name: "Alfaridha Shinta Pangesti", rating: 5, text: "Pengerjaan cepat dan ramah sekali kakaknya, untuk fotokopi, print, jilid disini mantabbb!!", date: "3 bulan lalu" },
  { name: "Ashfil Ashfiya", rating: 5, text: "pengalaman baikk bangett, fast respon, dan udh jadi langganan banget kalo butuh print pasti disini", date: "3 bulan lalu" },
];

const ratingMap = { 5: "★★★★★", 4: "★★★★☆", 3: "★★★☆☆", 2: "★★☆☆☆", 1: "★☆☆☆☆" };

export default function ReviewsMarquee() {
  return (
    <section className="mx-auto max-w-full overflow-hidden py-20 sm:py-28 bg-white dark:bg-[#121117] transition-colors duration-300">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl px-5 sm:px-8"
      >
        {/* FONT & WARNA HEADER DISESUAIKAN */}
        <h2 className="font-sans text-3xl font-extrabold tracking-tight sm:text-4xl text-[#212529] dark:text-white transition-colors duration-300">
          Apa kata pelanggan kami.
        </h2>
      </motion.div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="group relative mt-12 flex w-full overflow-hidden"
      >
        {/* List */}
        {[1, 2].map((listIndex) => (
          <div
            key={listIndex}
            className="flex shrink-0 animate-marquee gap-5 pr-5 group-hover:[animation-play-state:paused]"
            aria-hidden={listIndex === 2}
          >
            {REVIEWS.map((r, index) => (
              <div
                key={`review-${listIndex}-${index}`}
                className="w-[320px] shrink-0 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1A1921] p-6 transition-all hover:-translate-y-1 sm:w-[400px]"
              >
                <div className="flex items-start justify-between">
                  <div>
                    {/* FONT NAMA DISESUAIKAN */}
                    <h3 className="font-sans text-lg font-extrabold text-[#212529] dark:text-white">
                      {r.name}
                    </h3>
                    <div className="mt-1 font-mono text-sm text-yellow-500 dark:text-yellow-400">
                      {ratingMap[r.rating as keyof typeof ratingMap]}
                    </div>
                  </div>
                  <span className="ml-4 whitespace-nowrap font-mono text-[11px] text-gray-400 dark:text-gray-500">
                    {r.date}
                  </span>
                </div>
                {/* FONT REVIEW DISESUAIKAN */}
                <p className="mt-3 font-sans text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  "{r.text}"
                </p>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}