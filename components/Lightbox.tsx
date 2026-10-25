"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import type { FotoGaleri } from "@/data/usaha";
import { IkonKanan, IkonKiri, IkonTutup } from "./Ikon";

type Props = {
  foto: readonly FotoGaleri[];
  indeks: number;
  onTutup: () => void;
  onUbah: (indeksBaru: number) => void;
};

const tombolBulat =
  "inline-flex h-12 w-12 items-center justify-center rounded-full border border-kabut/60 text-kabut transition-colors duration-300 hover:bg-kabut hover:text-kayu";

export function Lightbox({ foto, indeks, onTutup, onUbah }: Props) {
  const kotak = useRef<HTMLDivElement>(null);
  const tombolTutup = useRef<HTMLButtonElement>(null);

  const sebelumnya = useCallback(
    () => onUbah((indeks - 1 + foto.length) % foto.length),
    [indeks, foto.length, onUbah],
  );
  const berikutnya = useCallback(
    () => onUbah((indeks + 1) % foto.length),
    [indeks, foto.length, onUbah],
  );

  useEffect(() => {
    const tekan = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onTutup();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        sebelumnya();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        berikutnya();
      } else if (e.key === "Tab" && kotak.current) {
        // Jaga fokus tetap di dalam lightbox
        const bisa = kotak.current.querySelectorAll<HTMLElement>("button");
        const awal = bisa[0];
        const akhir = bisa[bisa.length - 1];
        if (e.shiftKey && document.activeElement === awal) {
          e.preventDefault();
          akhir.focus();
        } else if (!e.shiftKey && document.activeElement === akhir) {
          e.preventDefault();
          awal.focus();
        }
      }
    };
    document.addEventListener("keydown", tekan);
    return () => document.removeEventListener("keydown", tekan);
  }, [onTutup, sebelumnya, berikutnya]);

  useEffect(() => {
    tombolTutup.current?.focus();
    const awal = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = awal;
    };
  }, []);

  const f = foto[indeks];

  return (
    <div
      ref={kotak}
      role="dialog"
      aria-modal="true"
      aria-label="Galeri foto"
      className="gelap fixed inset-0 z-[70] flex flex-col bg-kayu/95 text-kabut"
      onClick={(e) => {
        if (e.target === e.currentTarget) onTutup();
      }}
    >
      <div className="flex items-center justify-between px-5 py-4 md:px-8">
        <p className="text-sm font-medium" aria-live="polite">
          Foto {indeks + 1} dari {foto.length}
        </p>
        <button
          ref={tombolTutup}
          type="button"
          onClick={onTutup}
          aria-label="Tutup galeri"
          className={tombolBulat}
        >
          <IkonTutup />
        </button>
      </div>

      <div
        className="flex min-h-0 flex-1 items-center justify-center gap-3 px-3 pb-6 md:gap-6 md:px-8"
        onClick={(e) => {
          if (e.target === e.currentTarget) onTutup();
        }}
      >
        <button
          type="button"
          onClick={sebelumnya}
          aria-label="Foto sebelumnya"
          className={`${tombolBulat} shrink-0`}
        >
          <IkonKiri />
        </button>
        <div className="relative aspect-[4/3] max-h-full w-full max-w-4xl overflow-hidden rounded-t-[3rem] bg-kabut">
          <Image
            key={f.src}
            src={f.src}
            alt={f.alt}
            fill
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-contain"
          />
        </div>
        <button
          type="button"
          onClick={berikutnya}
          aria-label="Foto berikutnya"
          className={`${tombolBulat} shrink-0`}
        >
          <IkonKanan />
        </button>
      </div>
    </div>
  );
}
