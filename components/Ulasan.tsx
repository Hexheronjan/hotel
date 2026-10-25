import { usaha } from "@/data/usaha";
import { formatRating } from "@/lib/util";
import { Bintang } from "./Bintang";

export function Ulasan() {
  const [utama, ...lain] = usaha.ulasan;

  return (
    <section id="ulasan" className="bg-kabut-tua">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <h2 className="max-w-xl text-[2.25rem] font-semibold leading-[1.08] text-hutan sm:text-5xl">
            Kata mereka yang pernah menginap
          </h2>
          <div className="flex items-center gap-3">
            <Bintang jumlah={usaha.rating} ukuran={20} />
            <p className="text-[0.95rem] text-kayu/85">
              <span className="font-judul text-xl font-semibold text-hutan">
                {formatRating(usaha.rating)}
              </span>{" "}
              dari {usaha.jumlahUlasan} ulasan
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <figure className="relative lg:col-span-7">
            <span
              aria-hidden="true"
              className="absolute -top-10 left-0 font-judul text-[8rem] font-semibold leading-none text-emas sm:-top-14 sm:text-[10rem]"
            >
              &ldquo;
            </span>
            <blockquote className="relative pt-12 font-judul text-[1.65rem] font-medium leading-[1.35] tracking-rapat text-hutan sm:text-[2.1rem]">
              {utama.isi}
            </blockquote>
            <figcaption className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-emas/60 pt-5">
              <Bintang jumlah={utama.bintang} ukuran={20} />
              <p className="text-[0.98rem] text-kayu/85">
                <span className="font-semibold text-kayu">{utama.nama}</span>,{" "}
                {utama.keterangan.toLowerCase()}
              </p>
            </figcaption>
          </figure>

          <div className="flex flex-col justify-center lg:col-span-5">
            {lain.map((u, i) => (
              <figure
                key={u.nama}
                className={`py-7 ${
                  i === 0 ? "border-y" : "border-b"
                } border-emas/60`}
              >
                <Bintang jumlah={u.bintang} ukuran={16} />
                <blockquote className="mt-3 text-[1.05rem] leading-relaxed text-kayu/90">
                  &ldquo;{u.isi}&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-[0.92rem] text-kayu/80">
                  <span className="font-semibold text-kayu">{u.nama}</span>,{" "}
                  {u.keterangan.toLowerCase()}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <p className="mt-10 text-sm text-kayu/75">
          Contoh ulasan, ganti dengan ulasan asli.
        </p>
      </div>
    </section>
  );
}
