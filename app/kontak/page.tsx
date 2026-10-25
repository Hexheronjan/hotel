import type { Metadata } from "next";
import { FormCekKetersediaan } from "@/components/FormCekKetersediaan";
import { IkonInstagram, IkonJam, IkonLokasi, IkonTelepon, IkonWhatsApp } from "@/components/Ikon";
import { Kontak } from "@/components/Kontak";
import { PageHeader } from "@/components/PageHeader";
import { Tombol } from "@/components/Tombol";
import { usaha } from "@/data/usaha";
import { linkWhatsApp, pesanUmum } from "@/lib/util";

export const metadata: Metadata = {
  title: "Kontak",
  description: `Hubungi ${usaha.nama} lewat WhatsApp, telepon, atau Instagram. Layanan ${usaha.jamLayanan}.`,
};

const baris = [
  { ikon: IkonLokasi, label: "Alamat", nilai: usaha.alamat, href: null },
  { ikon: IkonJam, label: "Jam layanan", nilai: `${usaha.jamLayanan}, setiap hari`, href: null },
  { ikon: IkonTelepon, label: "Telepon", nilai: usaha.telepon, href: `tel:${usaha.telepon}` },
  {
    ikon: IkonInstagram,
    label: "Instagram",
    nilai: `@${usaha.instagram}`,
    href: `https://instagram.com/${usaha.instagram}`,
  },
];

export default function HalamanKontak() {
  return (
    <main>
      <PageHeader
        judul="Kontak"
        deskripsi="Tanyakan kamar, tanggal, atau apa saja. Cara tercepat adalah lewat WhatsApp."
        foto={usaha.galeri[3].src}
        alt={usaha.galeri[3].alt}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <div aria-hidden="true" className="mb-6 h-px w-16 bg-emas" />
            <h2 className="text-[2.25rem] font-semibold leading-[1.08] text-hutan sm:text-5xl">
              Kami siap membalas kapan saja
            </h2>
            <ul className="mt-10 border-b border-emas/60">
              {baris.map((b) => {
                const isi = (
                  <>
                    <b.ikon width={28} height={28} className="mt-1 shrink-0 text-hutan" />
                    <span>
                      <span className="block text-sm text-kayu/75">{b.label}</span>
                      <span className="mt-0.5 block font-judul text-[1.4rem] font-medium leading-snug tracking-rapat text-hutan">
                        {b.nilai}
                      </span>
                    </span>
                  </>
                );
                return (
                  <li key={b.label} className="border-t border-emas/60">
                    {b.href ? (
                      <a
                        href={b.href}
                        {...(b.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="flex gap-4 py-5 hover:bg-kabut-tua"
                      >
                        {isi}
                      </a>
                    ) : (
                      <div className="flex gap-4 py-5">{isi}</div>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="mt-8">
              <Tombol
                href={linkWhatsApp(pesanUmum)}
                eksternal
                ikon={<IkonWhatsApp width={20} height={20} />}
              >
                Chat WhatsApp
              </Tombol>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="mx-auto max-w-md lg:max-w-none">
              <FormCekKetersediaan />
            </div>
          </div>
        </div>
      </section>

      <Kontak hanyaPita />
    </main>
  );
}
