import { usaha } from "@/data/usaha";
import { linkGoogleMaps } from "@/lib/util";
import { IkonJam, IkonLokasi } from "./Ikon";
import { Tombol } from "./Tombol";

export function Lokasi() {
  return (
    <section
      id="lokasi"
      className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="text-[2.25rem] font-semibold leading-[1.08] text-hutan sm:text-5xl">
            Mudah ditemukan di Ponorogo
          </h2>
          <div aria-hidden="true" className="mt-5 h-px w-16 bg-emas" />

          <dl className="mt-9 space-y-6">
            <div className="flex gap-4">
              <IkonLokasi width={26} height={26} className="mt-0.5 shrink-0 text-hutan" />
              <div>
                <dt className="text-sm text-kayu/75">Alamat</dt>
                <dd className="mt-0.5 text-lg leading-snug text-kayu">
                  {usaha.alamat}
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <IkonJam width={26} height={26} className="mt-0.5 shrink-0 text-hutan" />
              <div>
                <dt className="text-sm text-kayu/75">Jam layanan</dt>
                <dd className="mt-0.5 text-lg leading-snug text-kayu">
                  {usaha.jamLayanan}, setiap hari
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-8 border-t border-emas/60 pt-6">
            <p className="text-sm text-kayu/75">Lokasi terdekat</p>
            <ul className="mt-2 space-y-1.5">
              {usaha.lokasiTerdekat.map((l) => (
                <li key={l} className="text-[1.02rem] text-kayu">
                  {l}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-kayu/75">
              Jarak hanya contoh, sesuaikan dengan kondisi sebenarnya.
            </p>
          </div>

          <Tombol
            href={linkGoogleMaps}
            eksternal
            variant="garis"
            ikon={<IkonLokasi width={19} height={19} />}
            className="mt-8"
          >
            Buka di Google Maps
          </Tombol>
        </div>

        <div className="relative lg:col-span-7">
          <div
            aria-hidden="true"
            className="absolute -left-3 -top-3 hidden h-full w-full rounded-t-[10rem] border border-b-0 border-emas sm:block"
          />
          <div className="relative overflow-hidden rounded-t-[7rem] rounded-b-[0.5rem] bg-kabut-tua sm:rounded-t-[10rem]">
            <iframe
              title={`Peta lokasi ${usaha.nama} di Google Maps`}
              src={usaha.petaEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block h-[26rem] w-full border-0 sm:h-[32rem] lg:h-[34rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
