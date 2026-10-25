import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

function Dasar({ children, ...props }: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      width={24}
      height={24}
      {...props}
    >
      {children}
    </svg>
  );
}

export const IkonWhatsApp = (p: P) => (
  <Dasar {...p}>
    <path d="M4 20l1.3-4.2A8 8 0 1 1 8.3 19L4 20z" />
    <path d="M9.2 8.6c.2-.5.6-.5.9-.4.3.7.6 1.3.7 1.6.1.3-.5.9-.7 1.2.6 1.2 1.6 2.1 2.8 2.7.3-.3.8-1 1.2-.9.4.2 1.1.5 1.5.8.1.3-.1 1.2-1 1.5-1.8.5-5.2-1.5-6.2-4-.3-.8-.3-1.9.8-2.5z" />
  </Dasar>
);

export const IkonMenu = (p: P) => (
  <Dasar {...p}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </Dasar>
);

export const IkonTutup = (p: P) => (
  <Dasar {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Dasar>
);

export const IkonKiri = (p: P) => (
  <Dasar {...p}>
    <path d="M15 5l-7 7 7 7" />
  </Dasar>
);

export const IkonKanan = (p: P) => (
  <Dasar {...p}>
    <path d="M9 5l7 7-7 7" />
  </Dasar>
);

export const IkonAtas = (p: P) => (
  <Dasar {...p}>
    <path d="M5 14l7-7 7 7M12 7v13" />
  </Dasar>
);

export const IkonKalender = (p: P) => (
  <Dasar {...p}>
    <rect x="4" y="5.5" width="16" height="14.5" rx="2" />
    <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" />
  </Dasar>
);

export const IkonTamu = (p: P) => (
  <Dasar {...p}>
    <circle cx="12" cy="8.5" r="3.5" />
    <path d="M5 20c.6-3.6 3.3-5.5 7-5.5s6.4 1.9 7 5.5" />
  </Dasar>
);

export const IkonMasuk = (p: P) => (
  <Dasar {...p}>
    <path d="M4 12h11M11 8l4 4-4 4" />
    <path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3" />
  </Dasar>
);

export const IkonKeluar = (p: P) => (
  <Dasar {...p}>
    <path d="M14 12H4M8 8l-4 4 4 4" />
    <path d="M10 4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-8" />
  </Dasar>
);

export const IkonJam = (p: P) => (
  <Dasar {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Dasar>
);

export const IkonParkir = (p: P) => (
  <Dasar {...p}>
    <rect x="4" y="4" width="16" height="16" rx="3" />
    <path d="M9.5 16.5V7.5h3.2a2.7 2.7 0 0 1 0 5.4H9.5" />
  </Dasar>
);

export const IkonWifi = (p: P) => (
  <Dasar {...p}>
    <path d="M3 9.5a13 13 0 0 1 18 0M6 13a8.5 8.5 0 0 1 12 0M9 16.4a4 4 0 0 1 6 0" />
    <circle cx="12" cy="19.4" r=".6" fill="currentColor" />
  </Dasar>
);

export const IkonDapur = (p: P) => (
  <Dasar {...p}>
    <path d="M5 11h14v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-6z" />
    <path d="M3 11h18M9 7.5c0-1 1-1.2 1-2.2M13 7.5c0-1 1-1.2 1-2.2" />
  </Dasar>
);

export const IkonTeras = (p: P) => (
  <Dasar {...p}>
    <path d="M4 11h16M5 11V6.5h4V11M15 11V6.5h4V11" />
    <path d="M6 11v3.5h12V11M7.5 14.5V20M16.5 14.5V20" />
  </Dasar>
);

export const IkonSarapan = (p: P) => (
  <Dasar {...p}>
    <path d="M5 9h11v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9z" />
    <path d="M16 10.5h1.5a2.2 2.2 0 0 1 0 4.5H15.7M8 5c0 1 1 1.2 1 2.2M11.5 5c0 1 1 1.2 1 2.2M3.5 20.5h14" />
  </Dasar>
);

export const IkonLokasi = (p: P) => (
  <Dasar {...p}>
    <path d="M12 21s-6.5-5.7-6.5-11a6.5 6.5 0 0 1 13 0c0 5.3-6.5 11-6.5 11z" />
    <circle cx="12" cy="10" r="2.3" />
  </Dasar>
);

export const IkonTelepon = (p: P) => (
  <Dasar {...p}>
    <path d="M6.6 4h2.7l1.3 3.6-1.8 1.3a11 11 0 0 0 5.3 5.3l1.3-1.8L19 13.7v2.7A2.6 2.6 0 0 1 16.4 19 12.4 12.4 0 0 1 5 7.6 2.6 2.6 0 0 1 6.6 4z" />
  </Dasar>
);

export const IkonInstagram = (p: P) => (
  <Dasar {...p}>
    <rect x="4" y="4" width="16" height="16" rx="4.5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="16.8" cy="7.2" r=".5" fill="currentColor" />
  </Dasar>
);

export const IkonBintang = (p: P) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    width={20}
    height={20}
    {...p}
  >
    <path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2 6.3 20.3l1.2-6.4L2.8 9.5l6.4-.8L12 2.8z" />
  </svg>
);

export const IkonKamera = (p: P) => (
  <Dasar {...p}>
    <path d="M4 8h3l1.5-2.2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
    <circle cx="12" cy="13" r="3.3" />
  </Dasar>
);

export const IkonCentang = (p: P) => (
  <Dasar {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </Dasar>
);

/** Ranting daun sebagai hiasan */
export const IkonDaun = (p: P) => (
  <Dasar viewBox="0 0 64 64" strokeWidth={1.2} {...p}>
    <path d="M10 56C14 36 26 18 52 8c1 24-10 42-34 46" />
    <path d="M10 56C22 42 34 30 46 16" />
    <path d="M24 44l-1-10M32 36l-1-11M40 28l-2-9" />
  </Dasar>
);
