import type { Config } from "tailwindcss";

/**
 * Token desain Prajalinks.
 * Ganti nilai warna atau font di sini, seluruh situs ikut berubah.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.ts",
  ],
  theme: {
    extend: {
      colors: {
        // Warna inti
        hutan: { DEFAULT: "#1E3B2F", gelap: "#152a21" }, // latar gelap dan tombol sekunder
        kabut: { DEFAULT: "#F3F6F1", tua: "#E6ECE2" }, // latar utama
        kayu: "#2A2019", // teks utama
        bata: { DEFAULT: "#A8452A", gelap: "#8A3720" }, // hanya tombol utama dan tanda penting
        emas: "#C29A4B", // hanya garis tipis dan ikon kecil
        // Permukaan turunan
        kertas: "#FBFCFA",
      },
      fontFamily: {
        judul: ["var(--font-fraunces)", "Georgia", "serif"],
        isi: ["var(--font-instrument)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        rapat: "-0.02em",
      },
      keyframes: {
        naik: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        mengecil: {
          "0%": { transform: "scale(1.03)" },
          "100%": { transform: "scale(1)" },
        },
        slideKiri: {
          "0%": { opacity: "0", transform: "translate3d(-60px, 0, 0)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        slideKanan: {
          "0%": { opacity: "0", transform: "translate3d(60px, 0, 0)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        munculDalam: {
          "0%": { opacity: "0", transform: "scale(0.86)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        naik: "naik 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        mengecil: "mengecil 1400ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "slide-kiri": "slideKiri 850ms cubic-bezier(0.16, 1, 0.3, 1) both",
        "slide-kanan": "slideKanan 850ms cubic-bezier(0.16, 1, 0.3, 1) both",
        "muncul-dalam": "munculDalam 900ms cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
