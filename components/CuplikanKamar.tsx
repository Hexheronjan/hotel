import Image from "next/image";
import Link from "next/link";
import { usaha } from "@/data/usaha";
import { formatRupiah } from "@/lib/util";
import { IkonBintang, IkonTamu } from "./Ikon";
import { Muncul } from "./Muncul";
import { Tombol } from "./Tombol";

// Tiap kamar punya bentuk dan posisi sendiri agar tidak terasa seperti deret kartu
const gaya = [
  { jarak: "lg:mt-16", bentuk: "rounded-t-full", rasio: "aspect-[3/4]", varian: "kiri" as const },
  { jarak: "lg:mt-0", bentuk: "rounded-t-full", rasio: "aspect-[3/4.4]", varian: "dalam" as const },
  {
    jarak: "lg:mt-24",
    bentuk: "rounded-tr-[9rem] rounded-bl-[0.4rem]",
    rasio: "aspect-[3/4]",
    varian: "kanan" as const,
  },
];

/** Cuplikan tiga kamar di beranda. Daftar lengkap ada di halaman Kamar. */
export function CuplikanKamar() {
  return (
    <section className="bg-kabut-tua overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <Muncul varian="naik">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div aria-hidden="true" className="mb-6 h-px w-16 bg-emas" />
              <h2 className="text-[2.25rem] font-semibold leading-[1.08] text-hutan sm:text-5xl">
                Tiga kamar untuk istirahat yang tenang
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-kayu/80 lg:col-span-5 lg:justify-self-end">
              Harga per malam. Pilih yang paling pas, lalu tanyakan ketersediaannya
              lewat WhatsApp.
            </p>
          </div>
        </Muncul>

        <ul className="mt-14 grid gap-14 sm:grid-cols-3 sm:gap-6 lg:gap-12">
          {usaha.kamar.map((k, i) => (
            <li key={k.slug} className={gaya[i].jarak}>
              <Muncul varian={gaya[i].varian} jedaMs={i * 120}>
                <Link href={`/kamar#${k.slug}`} className="group block">
                  <div
                    className={`relative overflow-hidden bg-kabut shadow-sm group-hover:shadow-md transition-shadow duration-300 ${gaya[i].bentuk} ${gaya[i].rasio}`}
                  >
                    <Image
                      src={k.foto}
                      alt={`Foto kamar ${k.nama}`}
                      fill
                      sizes="(min-width: 640px) 30vw, 90vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-3 border-b border-emas/60 pb-4">
                    <div>
                      <h3 className="text-[1.75rem] font-semibold leading-none text-hutan group-hover:text-bata transition-colors duration-200">
                        {k.nama}
                      </h3>
                      <p className="mt-2 inline-flex items-center gap-1.5 text-[0.92rem] text-kayu/85">
                        <IkonTamu width={17} height={17} className="text-hutan" />
                        Untuk {k.kapasitas}
                      </p>
                    </div>
                    {k.favorit && (
                      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-bata/70 bg-bata/10 px-2.5 py-1 text-[0.78rem] font-semibold text-bata">
                        <IkonBintang width={12} height={12} />
                        Favorit
                      </span>
                    )}
                  </div>
                  <p className="mt-3 font-judul text-2xl font-semibold tracking-rapat text-hutan">
                    {formatRupiah(k.harga)}
                    <span className="ml-1.5 font-isi text-sm font-normal tracking-normal text-kayu/75">
                      per malam
                    </span>
                  </p>
                </Link>
              </Muncul>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex justify-center">
          <Tombol href="/kamar" variant="sekunder">
            Lihat semua kamar
          </Tombol>
        </div>
      </div>
    </section>
  );
}
