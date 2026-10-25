"use client";

import { useEffect, useState } from "react";
import { usaha } from "@/data/usaha";
import { linkWhatsApp } from "@/lib/util";
import { IkonKalender, IkonTamu, IkonWhatsApp } from "./Ikon";
import { TombolForm } from "./Tombol";

type Galat = { masuk?: string; keluar?: string; tamu?: string };

const MS_HARI = 86_400_000;

function keTanggal(v: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v);
  if (!m) return null;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return Number.isNaN(d.getTime()) ? null : d;
}

function keIso(d: Date): string {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function formatTanggal(d: Date): string {
  return new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

function periksa(masuk: string, keluar: string, hariIni: string): Galat {
  const galat: Galat = {};
  const dm = keTanggal(masuk);
  const dk = keTanggal(keluar);

  if (!dm) galat.masuk = "Pilih tanggal masuk dulu ya.";
  else if (hariIni && masuk < hariIni)
    galat.masuk = "Tanggal masuk tidak boleh sebelum hari ini.";

  if (!dk) galat.keluar = "Pilih tanggal keluar dulu ya.";
  else if (dm && dk.getTime() <= dm.getTime())
    galat.keluar = "Tanggal keluar harus setelah tanggal masuk.";

  return galat;
}

const kelasKolom =
  "block w-full min-h-[48px] rounded-lg border bg-white px-3.5 py-2.5 text-base text-kayu focus-visible:outline-offset-1";

export function FormCekKetersediaan() {
  const [masuk, setMasuk] = useState("");
  const [keluar, setKeluar] = useState("");
  const [tamu, setTamu] = useState("2");
  const [hariIni, setHariIni] = useState("");
  const [galat, setGalat] = useState<Galat>({});
  const [sudahCoba, setSudahCoba] = useState(false);

  // Tanggal hari ini dihitung di browser agar sesuai zona waktu tamu
  useEffect(() => {
    setHariIni(keIso(new Date()));
  }, []);

  const minKeluar = (() => {
    const dm = keTanggal(masuk);
    return dm ? keIso(new Date(dm.getTime() + MS_HARI)) : hariIni;
  })();

  function ubah(nm: string, nk: string) {
    setMasuk(nm);
    setKeluar(nk);
    if (sudahCoba) setGalat(periksa(nm, nk, hariIni));
  }

  function kirim(e: React.FormEvent) {
    e.preventDefault();
    setSudahCoba(true);
    const g = periksa(masuk, keluar, hariIni);
    setGalat(g);
    if (g.masuk || g.keluar) return;

    const dm = keTanggal(masuk)!;
    const dk = keTanggal(keluar)!;
    const malam = Math.round((dk.getTime() - dm.getTime()) / MS_HARI);
    const pesan = [
      `Halo ${usaha.nama}, saya ingin cek ketersediaan kamar.`,
      "",
      `Tanggal masuk: ${formatTanggal(dm)}`,
      `Tanggal keluar: ${formatTanggal(dk)}`,
      `Lama menginap: ${malam} malam`,
      `Jumlah tamu: ${tamu} orang`,
      "",
      "Terima kasih.",
    ].join("\n");

    window.open(linkWhatsApp(pesan), "_blank", "noopener,noreferrer");
  }

  const tepi = (ada?: string) =>
    ada ? "border-bata" : "border-hutan/30 hover:border-hutan/60";

  return (
    <form
      onSubmit={kirim}
      noValidate
      aria-labelledby="judul-form"
      className="relative rounded-[1.25rem_1.25rem_1.25rem_0.4rem] border border-emas/50 bg-kertas p-5 shadow-[0_20px_40px_-28px_rgba(42,32,25,0.55)] sm:p-6"
    >
      <h2
        id="judul-form"
        className="font-judul text-[1.4rem] font-semibold leading-tight tracking-rapat text-hutan"
      >
        Cek ketersediaan kamar
      </h2>
      <p className="mt-1 text-sm text-kayu/75">
        Isi tanggalnya, kami balas lewat WhatsApp.
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <label
            htmlFor="tgl-masuk"
            className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-hutan"
          >
            <IkonKalender width={16} height={16} />
            Tanggal masuk
          </label>
          <input
            id="tgl-masuk"
            type="date"
            value={masuk}
            min={hariIni || undefined}
            onChange={(e) => {
              const nm = e.target.value;
              // Jika tanggal keluar tidak lagi valid, kosongkan agar tamu memilih ulang
              const nk = keluar && nm && keluar <= nm ? "" : keluar;
              ubah(nm, nk);
            }}
            aria-invalid={!!galat.masuk}
            aria-describedby={galat.masuk ? "galat-masuk" : undefined}
            className={`${kelasKolom} ${tepi(galat.masuk)}`}
          />
          {galat.masuk && (
            <p
              id="galat-masuk"
              role="alert"
              className="mt-1.5 text-[0.82rem] font-medium leading-snug text-bata"
            >
              {galat.masuk}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="tgl-keluar"
            className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-hutan"
          >
            <IkonKalender width={16} height={16} />
            Tanggal keluar
          </label>
          <input
            id="tgl-keluar"
            type="date"
            value={keluar}
            min={minKeluar || undefined}
            onChange={(e) => ubah(masuk, e.target.value)}
            aria-invalid={!!galat.keluar}
            aria-describedby={galat.keluar ? "galat-keluar" : undefined}
            className={`${kelasKolom} ${tepi(galat.keluar)}`}
          />
          {galat.keluar && (
            <p
              id="galat-keluar"
              role="alert"
              className="mt-1.5 text-[0.82rem] font-medium leading-snug text-bata"
            >
              {galat.keluar}
            </p>
          )}
        </div>

        <div className="col-span-2">
          <label
            htmlFor="jumlah-tamu"
            className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-hutan"
          >
            <IkonTamu width={16} height={16} />
            Jumlah tamu
          </label>
          <select
            id="jumlah-tamu"
            value={tamu}
            onChange={(e) => setTamu(e.target.value)}
            className={`${kelasKolom} ${tepi()}`}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} orang
              </option>
            ))}
          </select>
        </div>
      </div>

      <TombolForm
        type="submit"
        ikon={<IkonWhatsApp width={19} height={19} />}
        className="mt-5 w-full"
      >
        Kirim lewat WhatsApp
      </TombolForm>
    </form>
  );
}
