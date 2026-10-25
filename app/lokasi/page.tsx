import type { Metadata } from "next";
import { Kontak } from "@/components/Kontak";
import { Lokasi } from "@/components/Lokasi";
import { PageHeader } from "@/components/PageHeader";
import { usaha } from "@/data/usaha";

export const metadata: Metadata = {
  title: "Lokasi",
  description: `Alamat dan peta ${usaha.nama}: ${usaha.alamat}. Layanan ${usaha.jamLayanan}.`,
};

export default function HalamanLokasi() {
  return (
    <main>
      <PageHeader
        judul="Lokasi"
        deskripsi={`${usaha.alamat}. Layanan ${usaha.jamLayanan}, jadi Anda bebas datang kapan saja.`}
        foto={usaha.fotoHero}
        alt="Foto bangunan pendopo Prajalinks"
      />
      <Lokasi />
      <Kontak hanyaPita />
    </main>
  );
}
