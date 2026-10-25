"use client";

/** Tahun otomatis mengikuti waktu browser, jadi tidak perlu diubah setiap tahun */
export function Tahun() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
