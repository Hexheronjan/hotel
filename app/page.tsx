import { Galeri } from "@/components/Galeri";
import { Hero } from "@/components/Hero";
import { InfoPraktis } from "@/components/InfoPraktis";
import { CuplikanKamar } from "@/components/CuplikanKamar";
import { Kontak } from "@/components/Kontak";
import { Pengantar } from "@/components/Pengantar";
import { Ulasan } from "@/components/Ulasan";

export default function Beranda() {
  return (
    <main>
      <Hero />
      <InfoPraktis />
      <Pengantar />
      <CuplikanKamar />
      <Galeri />
      <Ulasan />
      <Kontak />
    </main>
  );
}
