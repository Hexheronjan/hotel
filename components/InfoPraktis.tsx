import { usaha } from "@/data/usaha";
import { IkonJam, IkonKeluar, IkonMasuk, IkonParkir } from "./Ikon";

const butir = [
  { ikon: IkonMasuk, label: "Check-in mulai", nilai: usaha.checkIn },
  { ikon: IkonKeluar, label: "Check-out sebelum", nilai: usaha.checkOut },
  { ikon: IkonJam, label: "Layanan", nilai: usaha.jamLayanan },
  { ikon: IkonParkir, label: "Parkir", nilai: "Luas" },
];

export function InfoPraktis() {
  return (
    <section
      aria-label="Informasi praktis"
      className="relative bg-kabut-tua pb-12 pt-[6.25rem] sm:pt-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {butir.map((b, i) => (
            <li
              key={b.label}
              className={`flex items-center gap-3.5 border-emas/60 py-4 pl-4 pr-2 sm:pl-6 ${
                i % 2 === 1 ? "border-l" : ""
              } ${i > 0 ? "lg:border-l" : "lg:pl-0"} ${
                i >= 2 ? "border-t lg:border-t-0" : ""
              }`}
            >
              <b.ikon width={30} height={30} className="shrink-0 text-hutan" />
              <div>
                <p className="text-sm text-kayu/75">{b.label}</p>
                <p className="font-judul text-xl font-medium leading-tight text-hutan">
                  {b.nilai}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
