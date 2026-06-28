import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers"; // 1. Import Providers

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Baznet Digicop",
  description:
    "Baznet Print adalah jasa percetakan dokumen, banner, kartu nama, dan kebutuhan cetak lainnya dengan kualitas warna akurat dan proses cepat.",
  icons: {
    icon: "/logo1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 2. Tambahkan suppressHydrationWarning di tag <html>
    <html lang="id" suppressHydrationWarning>
      <body
      
  className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body bg-paper text-ink dark:bg-ink dark:text-paper antialiased transition-colors duration-300`}
>
        {/* 3. Bungkus semua komponen UI dengan Providers */}
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}