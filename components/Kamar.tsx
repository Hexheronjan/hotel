import Image from "next/image";
import { usaha } from "@/data/usaha";
import { formatRupiah, linkWhatsApp, pesanKamar } from "@/lib/util";
import { IkonBintang, IkonCentang, IkonTamu, IkonWhatsApp } from "./Ikon";
import { Muncul } from "./Muncul";
import { Tombol } from "./Tombol";

export function Kamar() {
  return (
    <section id="kamar" className="mx-auto max-w-7xl px-5 pb-20 pt-6 md:px-8 lg:pb-32 lg:pt-10 overflow-hidden">
      <ul className="border-b border-emas/60">
        {usaha.kamar.map((k, i) => (
          <li
            key={k.slug}
            id={k.slug}
            className={`scroll-mt-24 border-t border-emas/60 py-8 lg:py-10 ${
              k.favorit
                ? "relative bg-kabut-tua lg:-mx-8 lg:px-8"
                : ""
            }`}
          >
            <Muncul varian={i % 2 === 0 ? "kiri" : "kanan"}>
              <article className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center lg:gap-10">
                <div
                  className={`relative aspect-[4/3] overflow-hidden bg-kabut-tua shadow-sm lg:col-span-5 ${
                    i % 2 === 0
                      ? "rounded-tl-[3.5rem] rounded-br-[0.5rem]"
                      : "rounded-tr-[3.5rem] rounded-bl-[0.5rem]"
                  }`}
                >
                  <Image
                    src={k.foto}
                    alt={`Foto kamar ${k.nama}`}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="lg:col-span-4">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <h3 className="text-[2rem] font-semibold leading-none text-hutan sm:text-4xl">
                      {k.nama}
                    </h3>
                    {k.favorit && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-bata/70 bg-bata/10 px-3 py-1 text-[0.82rem] font-semibold text-bata">
                        <IkonBintang width={13} height={13} />
                        Pilihan favorit
                      </span>
                    )}
                  </div>

                  <p className="mt-3 inline-flex items-center gap-2 text-[0.95rem] font-medium text-kayu/85">
                    <IkonTamu width={19} height={19} className="text-hutan" />
                    Untuk {k.kapasitas}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {k.fasilitas.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-[0.98rem] text-kayu/85"
                      >
                        <IkonCentang
                          width={18}
                          height={18}
                          className="mt-0.5 shrink-0 text-hutan"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap items-end justify-between gap-4 border-t border-emas/40 pt-5 lg:col-span-3 lg:flex-col lg:items-start lg:justify-center lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <div>
                    <p className="font-judul text-[2.1rem] font-semibold leading-none tracking-rapat text-hutan sm:text-4xl">
                      {formatRupiah(k.harga)}
                    </p>
                    <p className="mt-1.5 text-sm text-kayu/75">per malam</p>
                  </div>
                  <Tombol
                    href={linkWhatsApp(pesanKamar(k.nama))}
                    eksternal
                    variant="sekunder"
                    ikon={<IkonWhatsApp width={18} height={18} />}
                    className="lg:w-full"
                  >
                    Tanya ketersediaan
                  </Tombol>
                </div>
              </article>
            </Muncul>
          </li>
        ))}
      </ul>
    </section>
  );
}