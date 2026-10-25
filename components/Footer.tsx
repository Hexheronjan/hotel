import Link from "next/link";
import { usaha } from "@/data/usaha";
import { navigasi } from "@/lib/navigasi";
import { linkWhatsApp, pesanUmum } from "@/lib/util";
import { IkonAtas, IkonInstagram, IkonLokasi, IkonTelepon, IkonWhatsApp } from "./Ikon";
import { Tahun } from "./Tahun";

const tautan =
  "group relative inline-flex min-h-[40px] items-center gap-2.5 text-[0.98rem] text-kabut/90 hover:text-kabut";
const garis =
  "absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-emas transition-transform duration-300 group-hover:scale-x-100";

export function Footer() {
  return (
    <footer className="gelap bg-kayu pb-28 pt-16 text-kabut md:pb-10">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-judul text-4xl font-semibold tracking-rapat">
            {usaha.nama}
          </p>
          <p className="mt-3 max-w-sm text-[0.98rem] leading-relaxed text-kabut/85">
            {usaha.deskripsi}
          </p>
          <p className="mt-5 flex max-w-sm items-start gap-2.5 text-[0.98rem] text-kabut/90">
            <IkonLokasi width={20} height={20} className="mt-0.5 shrink-0 text-emas" />
            {usaha.alamat}
          </p>
        </div>

        <nav aria-label="Navigasi footer" className="lg:col-span-3 lg:col-start-7">
          <p className="font-judul text-xl font-medium tracking-rapat">Jelajahi</p>
          <div aria-hidden="true" className="mt-3 h-px w-10 bg-emas" />
          <ul className="mt-4 space-y-1">
            {navigasi.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className={tautan}>
                  <span className="relative">
                    {n.label}
                    <span aria-hidden="true" className={garis} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <p className="font-judul text-xl font-medium tracking-rapat">Hubungi kami</p>
          <div aria-hidden="true" className="mt-3 h-px w-10 bg-emas" />
          <ul className="mt-4 space-y-1">
            <li>
              <a
                href={linkWhatsApp(pesanUmum)}
                target="_blank"
                rel="noopener noreferrer"
                className={tautan}
              >
                <IkonWhatsApp width={19} height={19} className="text-emas" />
                <span className="relative">
                  WhatsApp
                  <span aria-hidden="true" className={garis} />
                </span>
              </a>
            </li>
            <li>
              <a href={`tel:${usaha.telepon}`} className={tautan}>
                <IkonTelepon width={19} height={19} className="text-emas" />
                <span className="relative">
                  {usaha.telepon}
                  <span aria-hidden="true" className={garis} />
                </span>
              </a>
            </li>
            <li>
              <a
                href={`https://instagram.com/${usaha.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className={tautan}
              >
                <IkonInstagram width={19} height={19} className="text-emas" />
                <span className="relative">
                  @{usaha.instagram}
                  <span aria-hidden="true" className={garis} />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-5 border-t border-emas/40 px-5 pt-6 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-sm text-kabut/80">
          &copy; <Tahun /> {usaha.nama}. Seluruh data di situs ini adalah contoh
          untuk demo.
        </p>
        <a
          href="#atas"
          className="group inline-flex min-h-[48px] items-center gap-2.5 self-start rounded-full border border-emas/70 px-5 py-2.5 text-[0.95rem] font-semibold text-kabut transition-colors duration-300 hover:bg-kabut hover:text-kayu md:self-auto"
        >
          <IkonAtas width={18} height={18} />
          Kembali ke atas
        </a>
      </div>
    </footer>
  );
}
