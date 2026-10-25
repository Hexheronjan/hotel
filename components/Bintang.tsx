import { IkonBintang } from "./Ikon";

/** Bintang SVG. Bagian teks (angka) membawa informasi, bintang hanya hiasan. */
export function Bintang({
  jumlah,
  ukuran = 18,
  className = "text-emas",
}: {
  jumlah: number;
  ukuran?: number;
  className?: string;
}) {
  const penuh = Math.round(jumlah);
  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`${jumlah} dari 5 bintang`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <IkonBintang
          key={i}
          width={ukuran}
          height={ukuran}
          style={{ opacity: i < penuh ? 1 : 0.25 }}
        />
      ))}
    </span>
  );
}
