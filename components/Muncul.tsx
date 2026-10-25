"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Varian = "kiri" | "kanan" | "dalam" | "naik";

type Props = {
  children: ReactNode;
  varian?: Varian;
  jedaMs?: number;
  className?: string;
};

const petaAnimasi: Record<Varian, string> = {
  kiri: "animate-slide-kiri",
  kanan: "animate-slide-kanan",
  dalam: "animate-muncul-dalam",
  naik: "animate-naik",
};

/**
 * Komponen untuk animasi saat elemen masuk viewport:
 * - "kiri": meluncur dari kiri ke tengah
 * - "kanan": meluncur dari kanan ke tengah
 * - "dalam": membesar halus dari dalam ke ukuran penuh
 * - "naik": naik perlahan dari bawah ke atas
 */
export function Muncul({
  children,
  varian = "naik",
  jedaMs = 0,
  className = "",
}: Props) {
  const [tampil, setTampil] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Jika reduced motion aktif, langsung tampil tanpa animasi
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTampil(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTampil(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ animationDelay: jedaMs > 0 ? `${jedaMs}ms` : undefined }}
      className={`${className} ${
        tampil ? petaAnimasi[varian] : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
