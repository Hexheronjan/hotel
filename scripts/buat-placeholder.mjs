// Pembuat placeholder SVG. Jalankan: node scripts/buat-placeholder.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const daftar = [
  ["hero", 800, 1000, "#E1E9DC"],
  ["kamar-standar", 800, 600, "#E4EBE0"],
  ["kamar-deluxe", 800, 600, "#E8E7D9"],
  ["kamar-keluarga", 800, 600, "#DDE7DA"],
  ["galeri-1", 800, 600, "#E3EADF"],
  ["galeri-2", 800, 1000, "#E7E6D8"],
  ["galeri-3", 800, 600, "#DCE6D9"],
  ["galeri-4", 800, 600, "#E5EAE0"],
];

mkdirSync("public/placeholder", { recursive: true });

for (const [nama, w, h, warna] of daftar) {
  const cx = w / 2;
  const cy = h / 2;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="Foto">
  <rect width="${w}" height="${h}" fill="${warna}"/>
  <g transform="translate(${cx - 28} ${cy - 40})" fill="none" stroke="#4A5A4F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 16h10l5-7h14l5 7h10a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4z"/>
    <circle cx="28" cy="33" r="9"/>
  </g>
  <text x="${cx}" y="${cy + 46}" text-anchor="middle" font-family="Instrument Sans, Arial, sans-serif" font-size="26" fill="#4A5A4F">Foto</text>
</svg>
`;
  writeFileSync(`public/placeholder/${nama}.svg`, svg);
}
console.log("Selesai:", daftar.length, "file");
