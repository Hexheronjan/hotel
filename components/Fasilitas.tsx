import { usaha, type IkonFasilitas } from "@/data/usaha";
import { IkonDapur, IkonDaun, IkonParkir, IkonSarapan, IkonTeras, IkonWifi } from "./Ikon";

const peta: Record<IkonFasilitas, typeof IkonWifi> = {
  wifi: IkonWifi,
  parkir: IkonParkir,
  dapur: IkonDapur,
  teras: IkonTeras,
  sarapan: IkonSarapan,
};

export function Fasilitas() {
  return (
    <section
      id="fasilitas"
      className="gelap relative overflow-hidden rounded-t-[2.5rem] bg-hutan text-kabut md:rounded-t-[5rem]"
    >
      <IkonDaun
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-6 h-40 w-40 text-emas opacity-40 md:right-12 md:top-8 md:h-52 md:w-52"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <h2 className="max-w-xl text-[2.25rem] font-semibold leading-[1.08] sm:text-5xl">
          Yang kami siapkan agar Anda betah
        </h2>
        <div aria-hidden="true" className="mt-5 h-px w-16 bg-emas" />

        <ul className="mt-12 grid grid-cols-2 border-l border-t border-emas/50 sm:grid-cols-3 lg:grid-cols-5">
          {usaha.fasilitas.map((f) => {
            const Ikon = peta[f.ikon];
            return (
              <li
                key={f.nama}
                className="flex min-h-[10.5rem] flex-col justify-between border-b border-r border-emas/50 p-5 sm:p-6"
              >
                <Ikon width={38} height={38} strokeWidth={1.1} className="text-emas" />
                <p className="mt-8 font-judul text-[1.35rem] font-medium leading-tight tracking-rapat">
                  {f.nama}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
