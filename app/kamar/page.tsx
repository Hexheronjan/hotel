import type { Metadata } from "next";
import { Kamar } from "@/components/Kamar";
import { Kontak } from "@/components/Kontak";
import { PageHeader } from "@/components/PageHeader";
import { usaha } from "@/data/usaha";

export const metadata: Metadata = {
  title: "Kamar",
  description: `Pilihan kamar ${usaha.nama} di Ponorogo: Standar, Deluxe, dan Keluarga. ${usaha.deskripsi}`,
};

export default function HalamanKamar() {
  return (
    <main>
      <PageHeader
        judul="Kamar"
        deskripsi="Tiga pilihan kamar dengan harga per malam. Sebutkan tanggal menginap, kami bantu cek kamar yang masih kosong lewat WhatsApp."
        foto={usaha.kamar[1].foto}
        alt="Foto kamar Deluxe dengan balkon kecil"
      />
      <Kamar />
      <Kontak hanyaPita />
    </main>
  );
}
