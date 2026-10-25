import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  judul: string;
  deskripsi: ReactNode;
  foto: string;
  alt: string;
};

/** Pembuka halaman dalam: judul serif di kiri, foto berbentuk lengkung di kanan */
export function PageHeader({ judul, deskripsi, foto, alt }: Props) {
  return (
    <section className="relative overflow-hidden bg-kabut-tua pt-[6.5rem] lg:pt-32">
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-24 w-full fill-kabut sm:h-36 lg:h-44"
      >
        <path d="M0 220V130c90-40 150-86 240-86 80 0 110 46 190 54 80 8 118-52 210-52 100 0 140 70 250 70 84 0 120-52 200-52 90 0 124 54 190 54 70 0 120-30 160-48V220z" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-end gap-10 px-5 pb-24 md:px-8 lg:grid-cols-12 lg:pb-32">
        <div className="lg:col-span-7 lg:pb-6">
          <div aria-hidden="true" className="mb-6 h-px w-16 bg-emas" />
          <h1 className="text-[3rem] font-semibold leading-[1.02] text-hutan sm:text-[4.25rem] lg:text-[5.25rem]">
            {judul}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-kayu/85">
            {deskripsi}
          </p>
        </div>

        <div className="relative lg:col-span-5 lg:justify-self-end">
          <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:w-[22rem]">
            <div
              aria-hidden="true"
              className="absolute -left-3 -top-3 h-full w-full rounded-t-full border border-b-0 border-emas"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-kabut">
              <Image
                src={foto}
                alt={alt}
                fill
                priority
                sizes="(min-width: 1024px) 352px, 384px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
