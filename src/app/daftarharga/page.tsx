import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Daftar Harga",
  description: "Daftar harga percetakan dan galeri hasil cetakan.",
};

export default function Page() {
  return <GalleryClient />;
}