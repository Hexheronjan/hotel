import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { BilahBawah } from "@/components/BilahBawah";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { usaha } from "@/data/usaha";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${usaha.nama} | Penginapan nyaman di Ponorogo`,
    template: `%s | ${usaha.nama}`,
  },
  description: usaha.deskripsi,
  openGraph: {
    title: `${usaha.nama} | Penginapan nyaman di Ponorogo`,
    description: usaha.deskripsi,
    locale: "id_ID",
    type: "website",
    siteName: usaha.nama,
  },
};

export const viewport: Viewport = {
  themeColor: "#F3F6F1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${fraunces.variable} ${instrument.variable}`}>
      <body id="atas">
        <Header />
        {children}
        <Footer />
        <BilahBawah />
      </body>
    </html>
  );
}
