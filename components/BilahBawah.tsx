"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { linkWhatsApp, pesanUmum } from "@/lib/util";
import { IkonWhatsApp } from "./Ikon";
import { Tombol } from "./Tombol";

/** Bilah bawah khusus ponsel. Disembunyikan saat bagian kontak terlihat. */
export function BilahBawah() {
  const [kontakTerlihat, setKontakTerlihat] = useState(false);
  const jalur = usePathname();

  useEffect(() => {
    setKontakTerlihat(false);
    const target = document.getElementById("kontak");
    if (!target) return;
    const pengamat = new IntersectionObserver(
      ([entri]) => setKontakTerlihat(entri.isIntersecting),
      { threshold: 0.15 },
    );
    pengamat.observe(target);
    return () => pengamat.disconnect();
  }, [jalur]);

  return (
    <div
      // inert mencegah fokus keyboard masuk saat bilah tersembunyi
      {...(kontakTerlihat ? { inert: true } : {})}
      aria-hidden={kontakTerlihat}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-emas/60 bg-kabut px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 transition-transform duration-300 md:hidden ${
        kontakTerlihat ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="grid grid-cols-2 gap-3">
        <Tombol
          href={linkWhatsApp(pesanUmum)}
          eksternal
          ikon={<IkonWhatsApp width={19} height={19} />}
        >
          WhatsApp
        </Tombol>
        <Tombol href="/kamar" variant="garis">
          Lihat kamar
        </Tombol>
      </div>
    </div>
  );
}
