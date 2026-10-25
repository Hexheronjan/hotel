import Image from "next/image";
import { usaha } from "@/data/usaha";
import { formatRating, linkWhatsApp, pesanUmum } from "@/lib/util";
import { Bintang } from "./Bintang";
import { FormCekKetersediaan } from "./FormCekKetersediaan";
import { IkonJam, IkonWhatsApp } from "./Ikon";
import { Tombol } from "./Tombol";

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative z-10 overflow-x-clip pt-[5.75rem] lg:pt-28"
    >
      {/* Punggung gunung: satu bidang datar yang menyambung ke strip informasi */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-32 w-full fill-kabut-tua sm:h-44 lg:h-56"
      >
        <path d="M0 220V150c70-30 120-96 200-96 60 0 92 50 150 56 70 8 104-62 190-66 92-4 134 74 230 74 78 0 108-44 176-44 86 0 114 66 200 64 80-2 116-58 294-58V220z" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl gap-x-12 px-5 md:px-8 lg:grid-cols-12">
        <div className="self-center pb-10 lg:col-span-7 lg:pb-24 animate-slide-kiri">
          <h1 className="font-judul text-[2.5rem] font-semibold leading-[1.04] text-hutan sm:text-[4rem] lg:text-[4.5rem]">
            Singgah sebentar, rasanya seperti{" "}
            <em className="font-medium italic underline decoration-emas decoration-1 underline-offset-[0.28em]">
              pulang.
            </em>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-kayu/85">
            {usaha.deskripsi}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <Bintang jumlah={usaha.rating} ukuran={22} />
            <p className="text-[0.95rem] text-kayu/85">
              <span className="font-judul text-xl font-semibold text-hutan">
                {formatRating(usaha.rating)}
              </span>{" "}
              dari {usaha.jumlahUlasan} ulasan tamu
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Tombol
              href={linkWhatsApp(pesanUmum)}
              eksternal
              ikon={<IkonWhatsApp width={20} height={20} />}
            >
              Pesan via WhatsApp
            </Tombol>
            <Tombol href="/kamar" variant="garis">
              Lihat kamar
            </Tombol>
          </div>
        </div>

        <div className="lg:col-span-5 lg:flex lg:flex-col lg:items-end animate-slide-kanan">
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-[26rem]">
            {/* Garis emas tipis yang bergeser di belakang lengkung foto */}
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-full w-full rounded-t-full border border-b-0 border-emas"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-kabut-tua">
              <Image
                src={usaha.fotoHero}
                alt="Foto contoh penginapan Prajalinks"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, (min-width: 448px) 448px, 100vw"
                className="animate-mengecil object-cover"
              />
            </div>
            <div className="absolute left-2 top-[22%] z-20 flex h-[5.5rem] w-[5.5rem] flex-col items-center justify-center rounded-full border border-emas bg-kabut text-center text-hutan sm:-left-6">
              <IkonJam width={22} height={22} />
              <span className="mt-0.5 text-[0.78rem] font-semibold leading-tight">
                Buka
                <br />
                {usaha.jamLayanan}
              </span>
            </div>
          </div>

          <div className="relative z-20 -mb-14 -mt-36 w-full px-3 sm:-mt-40 sm:px-0 lg:-mt-44 lg:-mr-4 lg:max-w-[30rem] lg:px-0">
            <div className="mx-auto max-w-md lg:max-w-none">
              <FormCekKetersediaan />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
