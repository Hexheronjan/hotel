"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { usaha } from "@/data/usaha";
import { Lightbox } from "./Lightbox";

// Tata letak asimetris: tiap foto punya bentuk dan ukuran sendiri
const tata = [
  "col-span-2 aspect-[4/3] md:col-span-7 md:row-start-1 md:aspect-auto rounded-tl-[4rem] rounded-br-[0.5rem]",
  "col-span-1 aspect-[3/4] md:col-span-5 md:col-start-8 md:row-span-2 md:row-start-1 md:aspect-auto rounded-t-full",
  "col-span-1 aspect-[3/4] md:col-span-3 md:row-start-2 md:aspect-auto rounded-[0.35rem]",
  "col-span-2 aspect-[16/9] md:col-span-4 md:row-start-2 md:aspect-auto rounded-br-[4rem] rounded-tl-[0.5rem]",
];

export function Galeri() {
  const [terbuka, setTerbuka] = useState<number | null>(null);
  const pemicu = useRef<HTMLElement | null>(null);

  const tutup = useCallback(() => {
    setTerbuka(null);
    // Kembalikan fokus ke foto yang tadi diklik
    pemicu.current?.focus();
  }, []);

  return (
    <section
      id="galeri"
      className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28"
    >
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2 className="text-[2.25rem] font-semibold leading-[1.08] text-hutan sm:text-5xl">
            Sekilas suasana di {usaha.nama}
          </h2>
          <div aria-hidden="true" className="mt-5 h-px w-16 bg-emas" />
        </div>
        <p className="max-w-md text-[0.95rem] leading-relaxed text-kayu/80 lg:col-span-5 lg:justify-self-end">
          Sudut-sudut tenang untuk melepas lelah. Ketuk foto untuk melihatnya lebih
          besar.
        </p>
      </div>

      <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-12 md:grid-rows-[20rem_16rem] md:gap-4 lg:grid-rows-[27rem_20rem]">
        {usaha.galeri.map((f, i) => (
          <li key={f.src} className={`contents`}>
            <button
              type="button"
              aria-label={`Buka ${f.alt} dalam ukuran besar`}
              onClick={(e) => {
                pemicu.current = e.currentTarget;
                setTerbuka(i);
              }}
              className={`relative block overflow-hidden bg-kabut-tua ${tata[i]}`}
            >
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="(min-width: 768px) 50vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {terbuka !== null && (
        <Lightbox
          foto={usaha.galeri}
          indeks={terbuka}
          onTutup={tutup}
          onUbah={setTerbuka}
        />
      )}
    </section>
  );
}
