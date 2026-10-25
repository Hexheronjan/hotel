import Image from "next/image";
import { usaha } from "@/data/usaha";
import { Muncul } from "./Muncul";
import { Tombol } from "./Tombol";

/** Pengantar suasana di beranda: dua foto berlapis dan kalimat yang hangat */
export function Pengantar() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-32 overflow-hidden">
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="relative lg:col-span-6">
          <Muncul varian="kiri">
            <div className="relative mx-auto w-[82%] max-w-md lg:mx-0 lg:ml-6">
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-3 h-full w-full rounded-t-full border border-b-0 border-emas"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-kabut-tua shadow-md">
                <Image
                  src={usaha.galeri[1].src}
                  alt={usaha.galeri[1].alt}
                  fill
                  sizes="(min-width: 1024px) 28rem, 70vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-8 right-0 w-[52%] max-w-[16rem] border-[6px] border-kabut bg-kabut shadow-lg sm:-bottom-10 lg:right-4 lg:w-[48%]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-br-[2.5rem] bg-kabut-tua">
                <Image
                  src={usaha.galeri[0].src}
                  alt={usaha.galeri[0].alt}
                  fill
                  sizes="(min-width: 1024px) 14rem, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Muncul>
        </div>

        <div className="mt-6 lg:col-span-6 lg:mt-0">
          <Muncul varian="kanan" jedaMs={150}>
            <div aria-hidden="true" className="mb-6 h-px w-16 bg-emas" />
            <h2 className="text-[2.2rem] font-semibold leading-[1.12] text-hutan sm:text-[2.9rem]">
              Kayu tua yang hangat, daun hijau di pagi hari, cahaya sore yang
              lembut.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-kayu/85">
              Datang larut malam, singgah sebentar, atau menginap bersama
              keluarga, di {usaha.nama} Anda disambut dengan tenang. Layanan{" "}
              {usaha.jamLayanan}, parkir luas, dan sarapan tersedia untuk Anda.
            </p>
            <div className="mt-8">
              <Tombol href="/fasilitas" variant="garis">
                Lihat fasilitas
              </Tombol>
            </div>
          </Muncul>
        </div>
      </div>
    </section>
  );
}
