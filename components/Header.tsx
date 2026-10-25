"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { usaha } from "@/data/usaha";
import { navigasi } from "@/lib/navigasi";
import { linkWhatsApp, pesanUmum } from "@/lib/util";
import { IkonMenu, IkonTutup, IkonWhatsApp } from "./Ikon";
import { Tombol } from "./Tombol";

export function Header() {
  const [discroll, setDiscroll] = useState(false);
  const [terbuka, setTerbuka] = useState(false);
  const jalur = usePathname();

  useEffect(() => {
    const cek = () => setDiscroll(window.scrollY > 12);
    cek();
    window.addEventListener("scroll", cek, { passive: true });
    return () => window.removeEventListener("scroll", cek);
  }, []);

  // Menu ponsel selalu tertutup setelah berpindah halaman
  useEffect(() => {
    setTerbuka(false);
  }, [jalur]);

  useEffect(() => {
    if (!terbuka) return;
    const tekan = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTerbuka(false);
    };
    document.addEventListener("keydown", tekan);
    return () => document.removeEventListener("keydown", tekan);
  }, [terbuka]);

  const berlatar = discroll || terbuka;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        berlatar
          ? "border-emas/60 bg-kabut"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="font-judul text-[1.65rem] font-semibold tracking-rapat text-hutan"
          onClick={() => setTerbuka(false)}
        >
          {usaha.nama}
        </Link>

        <nav aria-label="Navigasi utama" className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-8 xl:gap-9">
            {navigasi.map((n) => {
              const aktif = jalur === n.href;
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    aria-current={aktif ? "page" : undefined}
                    className={`group relative py-1 text-[0.95rem] font-medium ${
                      aktif ? "text-hutan" : "text-kayu"
                    }`}
                  >
                    {n.label}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-emas transition-transform duration-300 group-hover:scale-x-100 ${
                        aktif ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Tombol
            href={linkWhatsApp(pesanUmum)}
            eksternal
            ikon={<IkonWhatsApp width={18} height={18} />}
            className="hidden !min-h-[42px] !px-5 !py-2 md:inline-flex"
          >
            WhatsApp
          </Tombol>
          <button
            type="button"
            className="-mr-2 inline-flex h-12 w-12 items-center justify-center rounded-full text-hutan md:hidden"
            aria-expanded={terbuka}
            aria-controls="menu-ponsel"
            aria-label={terbuka ? "Tutup menu" : "Buka menu"}
            onClick={() => setTerbuka((v) => !v)}
          >
            {terbuka ? <IkonTutup /> : <IkonMenu />}
          </button>
        </div>
      </div>

      <nav
        id="menu-ponsel"
        aria-label="Navigasi ponsel"
        hidden={!terbuka}
        className="border-t border-emas/40 bg-kabut md:hidden"
      >
        <ul className="mx-auto max-w-7xl px-5 pb-5 pt-2">
          {navigasi.map((n) => (
            <li key={n.href} className="border-b border-emas/30">
              <Link
                href={n.href}
                onClick={() => setTerbuka(false)}
                aria-current={jalur === n.href ? "page" : undefined}
                className="flex min-h-[52px] items-center font-judul text-2xl font-medium tracking-rapat text-hutan"
              >
                {n.label}
              </Link>
            </li>
          ))}
          <li className="pt-5">
            <Tombol
              href={linkWhatsApp(pesanUmum)}
              eksternal
              onClick={() => setTerbuka(false)}
              ikon={<IkonWhatsApp width={18} height={18} />}
              className="w-full"
            >
              Pesan via WhatsApp
            </Tombol>
          </li>
        </ul>
      </nav>
    </header>
  );
}
