import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export type VarianTombol = "utama" | "sekunder" | "garis" | "garisTerang";

const dasar =
  "group relative inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-colors duration-300";

const varian: Record<VarianTombol, string> = {
  utama: "bg-bata text-white hover:bg-bata-gelap",
  sekunder: "bg-hutan text-kabut hover:bg-kayu",
  garis:
    "border border-kayu/70 text-kayu hover:border-hutan hover:bg-hutan hover:text-kabut",
  garisTerang:
    "border border-kabut/70 text-kabut hover:border-kabut hover:bg-kabut hover:text-hutan",
};

export function kelasTombol(v: VarianTombol, tambahan = "") {
  return `${dasar} ${varian[v]} ${tambahan}`.trim();
}

/** Label dengan garis bawah yang bergerak halus saat hover atau fokus */
function Isi({ ikon, children }: { ikon?: ReactNode; children: ReactNode }) {
  return (
    <>
      {ikon}
      <span className="relative">
        {children}
        <span
          aria-hidden="true"
          className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
        />
      </span>
    </>
  );
}

type PropsTautan = {
  href: string;
  variant?: VarianTombol;
  ikon?: ReactNode;
  className?: string;
  eksternal?: boolean;
  children: ReactNode;
  onClick?: () => void;
};

export function Tombol({
  href,
  variant = "utama",
  ikon,
  className = "",
  eksternal,
  children,
  onClick,
}: PropsTautan) {
  const kelas = kelasTombol(variant, className);
  // Tautan internal memakai Link agar perpindahan halaman cepat
  if (!eksternal && href.startsWith("/")) {
    return (
      <Link href={href} onClick={onClick} className={kelas}>
        <Isi ikon={ikon}>{children}</Isi>
      </Link>
    );
  }
  return (
    <a
      href={href}
      onClick={onClick}
      className={kelas}
      {...(eksternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <Isi ikon={ikon}>{children}</Isi>
    </a>
  );
}

type PropsBtn = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: VarianTombol;
  ikon?: ReactNode;
};

export function TombolForm({
  variant = "utama",
  ikon,
  className = "",
  children,
  ...rest
}: PropsBtn) {
  return (
    <button className={kelasTombol(variant, className)} {...rest}>
      <Isi ikon={ikon}>{children}</Isi>
    </button>
  );
}
