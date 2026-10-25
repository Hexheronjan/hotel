/**
 * Data usaha Prajalinks. Semua isi di bawah adalah DUMMY untuk demo.
 * Ganti dengan data asli sebelum situs dipublikasikan.
 */

export type IkonFasilitas = "wifi" | "parkir" | "dapur" | "teras" | "sarapan";

export type Kamar = {
  slug: string;
  nama: string;
  /** Harga per malam dalam rupiah */
  harga: number;
  kapasitas: string;
  fasilitas: string[];
  favorit?: boolean;
  foto: string;
};

export type Fasilitas = {
  nama: string;
  ikon: IkonFasilitas;
};

export type Ulasan = {
  nama: string;
  keterangan: string;
  bintang: number;
  isi: string;
};

export type FotoGaleri = {
  src: string;
  alt: string;
};

export const usaha = {
  nama: "Prajalinks",
  deskripsi:
    "Penginapan nyaman di Ponorogo, Jawa Timur, untuk perjalanan kerja, keluarga, atau singgah sebentar.",
  alamat: "Jl. Contoh No. 12, Ponorogo, Jawa Timur",
  koordinat: { lat: -7.8711, lng: 111.4628 },
  rating: 4.9,
  jumlahUlasan: 54,
  /** Format 62 tanpa tanda + untuk link wa.me */
  whatsapp: "6285151951806",
  telepon: "085151951806",
  instagram: "prajalinks",
  jamLayanan: "24 jam",
  checkIn: "14.00",
  checkOut: "12.00",
  petaEmbed: "https://www.google.com/maps?q=Ponorogo,+Jawa+Timur&output=embed",

  kamar: [
    {
      slug: "standar",
      nama: "Standar",
      harga: 250000,
      kapasitas: "2 orang",
      fasilitas: ["AC", "Wi-Fi", "Kamar mandi dalam dengan air panas"],
      foto: "/foto/kamar-standar.jpg",
    },
    {
      slug: "deluxe",
      nama: "Deluxe",
      harga: 350000,
      kapasitas: "2 orang",
      fasilitas: ["AC", "Wi-Fi", "Balkon kecil"],
      favorit: true,
      foto: "/foto/kamar-deluxe.jpg",
    },
    {
      slug: "keluarga",
      nama: "Keluarga",
      harga: 500000,
      kapasitas: "4 orang",
      fasilitas: ["Dua ranjang", "AC", "Wi-Fi"],
      foto: "/foto/kamar-keluarga.jpg",
    },
  ] satisfies Kamar[],

  fasilitas: [
    { nama: "Wi-Fi", ikon: "wifi" },
    { nama: "Parkir luas", ikon: "parkir" },
    { nama: "Dapur bersama", ikon: "dapur" },
    { nama: "Teras duduk", ikon: "teras" },
    { nama: "Sarapan", ikon: "sarapan" },
  ] satisfies Fasilitas[],

  /** Jarak hanya contoh */
  lokasiTerdekat: ["Pusat kota (±10 menit)", "Terminal (±15 menit)"],

  /** Contoh ulasan, ganti dengan ulasan asli */
  ulasan: [
    {
      nama: "Dimas A.",
      keterangan: "Menginap saat perjalanan kerja",
      bintang: 5,
      isi: "Tiba malam hari setelah perjalanan jauh, disambut ramah dan kamar sudah siap. Kasurnya nyaman, Wi-Fi lancar untuk bekerja, paginya sarapan di teras. Rasanya seperti menginap di rumah teman, bukan di hotel.",
    },
    {
      nama: "Ayu S.",
      keterangan: "Menginap bersama keluarga",
      bintang: 5,
      isi: "Kami berempat menginap di kamar Keluarga. Lega, bersih, dan parkirnya luas untuk mobil kami.",
    },
    {
      nama: "Pak Hendra",
      keterangan: "Singgah satu malam",
      bintang: 5,
      isi: "Awalnya hanya singgah, ternyata betah. Air panasnya enak untuk badan yang pegal, dan WhatsApp dibalas cepat.",
    },
  ] satisfies Ulasan[],

  galeri: [
    { src: "/foto/galeri-1.jpg", alt: "Sarapan pagi di teras dengan jus segar dan panekuk" },
    { src: "/foto/galeri-2.jpg", alt: "Teras duduk kayu jati dan jalan setapak taman tropis" },
    { src: "/foto/galeri-3.jpg", alt: "Dapur bersama berpanel kayu hangat dan jendela taman" },
    { src: "/foto/galeri-4.jpg", alt: "Halaman parkir luas berlatar bangunan pendopo dan pepohonan asri" },
  ] satisfies FotoGaleri[],

  fotoHero: "/foto/hero.jpg",
};

export type Usaha = typeof usaha;
