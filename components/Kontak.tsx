import { usaha } from "@/data/usaha";
import { linkWhatsApp, pesanUmum } from "@/lib/util";
import { IkonDaun, IkonInstagram, IkonTelepon, IkonWhatsApp } from "./Ikon";
import { Tombol } from "./Tombol";

/** Pita ajakan selebar layar. `hanyaPita` menyembunyikan telepon dan Instagram. */
export function Kontak({ hanyaPita = false }: { hanyaPita?: boolean }) {
  return (
    <section id="kontak">
      <div className="gelap relative overflow-hidden bg-hutan text-kabut">
        <IkonDaun
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 -bottom-6 h-44 w-44 -scale-x-100 text-emas opacity-40 md:bottom-0 md:left-16 md:h-72 md:w-72"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-8 hidden h-[20rem] w-[15rem] rounded-t-full border border-b-0 border-emas/50 md:block lg:right-24"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-14 hidden h-[17rem] w-[12rem] rounded-t-full border border-b-0 border-emas/30 md:block lg:right-[7.4rem]"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center md:px-8 md:py-28">
          <div aria-hidden="true" className="mx-auto mb-6 h-px w-16 bg-emas" />
          <h2 className="mx-auto max-w-2xl text-[2.4rem] font-semibold leading-[1.06] sm:text-6xl">
            Cek ketersediaan kamar hari ini
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-kabut/90">
            Layanan {usaha.jamLayanan}. Kirim tanggal menginap Anda, kami balas
            secepatnya.
          </p>
          <div className="mt-9 flex justify-center">
            <Tombol
              href={linkWhatsApp(pesanUmum)}
              eksternal
              ikon={<IkonWhatsApp width={20} height={20} />}
              className="w-full sm:w-auto sm:min-w-[18rem]"
            >
              Chat WhatsApp sekarang
            </Tombol>
          </div>
        </div>
      </div>

      {!hanyaPita && (
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
          <ul className="grid gap-5 sm:grid-cols-2 sm:gap-0">
            <li className="sm:border-r sm:border-emas/60 sm:pr-8">
              <a
                href={`tel:${usaha.telepon}`}
                className="group flex items-center gap-4 py-2"
              >
                <IkonTelepon width={30} height={30} className="shrink-0 text-hutan" />
                <span>
                  <span className="block text-sm text-kayu/75">Telepon</span>
                  <span className="relative font-judul text-2xl font-medium tracking-rapat text-hutan">
                    {usaha.telepon}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-emas transition-transform duration-300 group-hover:scale-x-100"
                    />
                  </span>
                </span>
              </a>
            </li>
            <li className="border-t border-emas/60 pt-5 sm:border-t-0 sm:pl-8 sm:pt-0">
              <a
                href={`https://instagram.com/${usaha.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-2"
              >
                <IkonInstagram width={30} height={30} className="shrink-0 text-hutan" />
                <span>
                  <span className="block text-sm text-kayu/75">Instagram</span>
                  <span className="relative font-judul text-2xl font-medium tracking-rapat text-hutan">
                    @{usaha.instagram}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-emas transition-transform duration-300 group-hover:scale-x-100"
                    />
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}
