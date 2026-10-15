#  UhuyDevs — Landing Page & Portofolio Studio Digital

Landing page modern dan elegan untuk studio desain dan rekayasa perangkat lunak digital. Dibangun menggunakan teknologi web terkini seperti **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, dan **Framer Motion**.

---

## Fitur Utama

- **Performa Tinggi & Modern**: Menggunakan Next.js 16 App Router dan React 19 dengan Turbopack untuk rendering instan dan efisien.
- **Single Source of Truth (`content/site.ts`)**: Seluruh teks, link navigasi, data proyek, anggota tim, hingga konfigurasi path gambar terpusat di satu file. Mudah disesuaikan tanpa perlu menyentuh komponen JSX.
- **Animasi Halus & Interaktif**: Ditenagai oleh **Framer Motion** untuk efek scroll, transisi navbar, floating card, dan interaksi elemen yang mulus.
- **Responsif Penuh**: Tampilan optimal di berbagai ukuran layar, mulai dari perangkat mobile, tablet, hingga layar desktop lebar.
- **Komponen Modular & Rapi**: Pembagian folder terstruktur antara komponen section (`components/sections`) dan komponen UI dasar (`components/ui`).
- **Desain Elegan & Bersih**: Desain profesional bernuansa minimalis dengan perpaduan tipografi modern dan palet warna kontemporer.

---

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **Library UI:** [React 19](https://react.dev)
- **Bahasa:** [TypeScript](https://www.typescriptlang.org)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) (@tailwindcss/turbopack)
- **Animasi:** [Framer Motion](https://www.framer.com/motion)
- **Ikon:** [Lucide React](https://lucide.dev)

---

##  Struktur Direktori

```text
MyPortofolio-Uhuy/
├── app/                      # Next.js App Router
│   ├── favicon.ico           # Icon default tab browser
│   ├── globals.css           # Styling global, font variable & tema warna
│   ├── layout.tsx            # Root layout & konfigurasi metadata (SEO/title)
│   └── page.tsx              # Halaman utama (merender semua section)
├── components/
│   ├── sections/             # Section landing page
│   │   ├── Navbar.tsx        # Navigasi & logo
│   │   ├── Hero.tsx          # Bagian pembuka dengan CTA & floating stats
│   │   ├── Services.tsx      # Daftar layanan studio
│   │   ├── Work.tsx          # Portofolio / studi kasus proyek
│   │   ├── Team.tsx          # Anggota tim studio
│   │   ├── Process.tsx       # Alur kerja / proses pengembangan
│   │   ├── FAQ.tsx           # Pertanyaan umum (accordion)
│   │   ├── Contact.tsx       # Formulir kontak & info hubungi kami
│   │   └── Footer.tsx        # Penutup & navigasi bawah
│   └── ui/                   # Komponen pembantu yang reusable
│       ├── Button.tsx        # Komponen tombol kustom
│       ├── ImageSlot.tsx     # Placeholder gambar dengan animasi
│       ├── Lines.tsx         # Tipografi dengan penekanan aksen teks
│       └── SectionHeader.tsx # Header standar setiap section
├── content/
│   └── site.ts               # PUSAT KONTEN (Semua teks, link, & path gambar)
├── lib/
│   └── animations.ts         # Konfigurasi varian animasi Framer Motion
├── public/                   # File statis (gambar, SVG, logo, favicon)
├── package.json
└── tsconfig.json
```

---

##  Memulai (Quick Start)

### 1. Prasyarat
Pastikan sudah menginstal:
- [Node.js](https://nodejs.org/) (versi 18.18 atau lebih baru)
- npm, yarn, pnpm, atau bun

### 2. Instalasi Dependensi
Masuk ke direktori proyek dan instal dependensinya:

```bash
cd MyPortofolio-Uhuy
npm install
```

### 3. Menjalankan Server Pengembangan
Jalankan server lokal dengan perintah:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

### 4. Build untuk Production
Untuk membuat build versi produksi:

```bash
npm run build
npm run start
```

---

##  Panduan Kustomisasi

### 1. Mengubah Konten Teks & Link
Kamu **tidak perlu mengedit JSX** untuk sekadar mengganti teks. Cukup buka:
 [`content/site.ts`](content/site.ts)
* Ganti nama studio, tagline, sosial media pada objek `SITE`.
* Atur item navigasi pada `NAV_LINKS`.
* Ubah teks deskripsi, daftar layanan, kartu portofolio, anggota tim, serta FAQ pada masing-masing objek.

### 2. Menambahkan Gambar & Logo
1. Letakkan aset gambar/logo di folder **`public/`** (contoh: `public/logo.svg` atau `public/images/hero.jpg`).
2. Daftarkan path-nya di file [`content/site.ts`](content/site.ts) pada bagian `IMAGE_PATHS`.

### 3. Mengganti Icon Tab Browser (Favicon)
- **Cara Otomatis**: Letakkan file gambar logo kamu di dalam folder `app/` dengan nama `app/icon.png` atau `app/icon.svg`.
- **Atau melalui metadata**: Atur path icon di [`app/layout.tsx`](app/layout.tsx) pada bagian `metadata.icons`.

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan portofolio dan profil perusahaan. Seluruh hak cipta dilindungi undang-undang.
