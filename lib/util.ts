import { usaha } from "@/data/usaha";

/** Contoh: 250000 menjadi "Rp250.000" */
export function formatRupiah(angka: number): string {
  return "Rp" + String(Math.round(angka)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

/** Link wa.me dengan pesan awal yang sudah di-encode */
export function linkWhatsApp(pesan: string): string {
  return `https://wa.me/${usaha.whatsapp}?text=${encodeURIComponent(pesan)}`;
}

export const pesanUmum = `Halo ${usaha.nama}, saya ingin bertanya soal ketersediaan kamar.`;

export function pesanKamar(namaKamar: string): string {
  return `Halo ${usaha.nama}, saya ingin bertanya ketersediaan kamar ${namaKamar}. Apakah masih ada yang kosong?`;
}

export const linkGoogleMaps = `https://www.google.com/maps/search/?api=1&query=${usaha.koordinat.lat},${usaha.koordinat.lng}`;

/** 4.9 menjadi "4,9" */
export function formatRating(r: number): string {
  return r.toFixed(1).replace(".", ",");
}
