// Membuat foto galeri dari potongan tiga foto asli di public/foto.
// Jalankan: node scripts/potong-galeri.mjs
// Setelah foto asli tersedia, file galeri-*.jpg boleh diganti langsung.
import sharp from "sharp";

const tugas = [
  // nama, sumber, left, top, lebar, tinggi, lebar hasil
  ["galeri-1", "hero", 380, 720, 516, 387, 1200],
  ["galeri-2", "hero", 0, 520, 544, 680, 960],
  ["galeri-3", "kamar-deluxe", 690, 130, 480, 360, 1200],
  ["galeri-4", "hero", 240, 420, 640, 480, 1200],
];

for (const [nama, sumber, left, top, width, height, lebar] of tugas) {
  await sharp(`public/foto/${sumber}.jpg`)
    .extract({ left, top, width, height })
    .resize({ width: lebar, kernel: "lanczos3" })
    .jpeg({ quality: 88 })
    .toFile(`public/foto/${nama}.jpg`);
  console.log("dibuat", nama);
}
