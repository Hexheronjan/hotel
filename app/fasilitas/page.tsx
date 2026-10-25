import type { Metadata } from "next";
import { Fasilitas } from "@/components/Fasilitas";
import { Galeri } from "@/components/Galeri";
import { Kontak } from "@/components/Kontak";
import { PageHeader } from "@/components/PageHeader";
import { usaha } from "@/data/usaha";

export const metadata: Metadata = {
  title: "Fasilitas",
  description: `Fasilitas ${usaha.nama}: Wi-Fi, parkir luas, dapur bersama, teras duduk, dan sarapan.`,
};

export default function HalamanFasilitas() {
  return (
    <main>
      <PageHeader
        judul="Fasilitas"
        deskripsi="Wi-Fi, parkir luas, dapur bersama, teras duduk, dan sarapan. Semua kami siapkan agar Anda betah."
        foto={usaha.galeri[0].src}
        alt={usaha.galeri[0].alt}
      />
      <Fasilitas />
      <Galeri />
      <Kontak hanyaPita />
    </main>
  );
}
