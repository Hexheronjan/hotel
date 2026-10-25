# Prajalinks Guest House

Website profil penginapan Prajalinks di Ponorogo, Jawa Timur. Dibangun dengan Next.js (App Router), TypeScript, dan Tailwind CSS.

Konsep visual: *"Pendopo di kaki Gunung Wilis"* — kayu tua yang hangat, dedaunan hijau, dan pencahayaan sore yang lembut.

## Fitur Utama

- **Navigasi Multi-Halaman**:
  - **Beranda (`/`)**: Hero dengan foto gerbang lengkung pendopo, kartu cek ketersediaan yang menumpang foto, animasi slide dinamis, info praktis, cuplikan 3 kamar, dan ulasan tamu.
  - **Kamar (`/kamar`)**: Katalog lengkap kamar (Standar, Deluxe favorit, Keluarga) dengan rincian fasilitas dan tautan pemesanan WhatsApp langsung.
  - **Fasilitas (`/fasilitas`)**: Rincian fasilitas penginapan (Wi-Fi, parkir luas, dapur bersama, teras santai, sarapan).
  - **Lokasi (`/lokasi`)**: Peta Google Maps tersemat dalam bingkai lengkung khas pendopo, alamat, dan estimasi waktu ke pusat kota/terminal.
  - **Kontak (`/kontak`)**: Saluran kontak WhatsApp, telepon, dan Instagram.
- **Reservasi Langsung WhatsApp**: Formulir interaktif untuk cek ketersediaan (validasi tanggal checkout > checkin) yang langsung menyusun format pesan WhatsApp siap kirim ke pemilik.
- **Animasi Elegan & Responsif**:
  - Efek slide dari kiri ke tengah dan kanan ke tengah.
  - Efek muncul membesar dari dalam (*scale-in*) untuk kamar favorit.
  - Transisi foto halus.
  - Navigasi ponsel dengan laci menu (*drawer*) yang menutup otomatis saat link dipilih.
- **Performa Tinggi**: Prerender statis dengan waktu respons instan (<20ms).

## Palet Warna & Tipografi

- **Hutan** (`#1E3B2F`): Latar gelap, kartu, dan teks aksen
- **Kabut** (`#F3F6F1`): Latar utama yang bersih dan lembut
- **Kayu** (`#2A2019`): Warna teks utama berkontras tinggi (memenuhi standar WCAG 4.5:1)
- **Bata** (`#A8452A`): Tombol aksi utama (*Pesan WhatsApp*) dan lencana favorit
- **Emas** (`#C29A4B`): Garis aksen tipis dan ikon
- **Font**: Fraunces (Judul) & Instrument Sans (Teks Isi)

## Menjalankan Proyek Secara Lokal

1. Pasang dependensi:
   ```bash
   npm install
   ```

2. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```

3. Atau jalankan versi produksi yang telah dioptimalkan:
   ```bash
   npm run build
   npm run start
   ```

Buka [http://localhost:3000](http://localhost:3000) pada peramban Anda.
