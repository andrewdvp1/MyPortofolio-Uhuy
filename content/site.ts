// ============================================================================
// KONTEN SITUS (BAHASA INDONESIA)
// Semua teks, tautan, dan path gambar halaman ada di file ini.
// Ubah konten di sini — tidak perlu menyentuh komponen JSX.
//
// Catatan: properti `...Lines` berupa array; setiap item dirender
// sebagai baris baru (dipisah <br />).
// ============================================================================
import { Layout, Sparkles, Layers, type LucideIcon } from "lucide-react";

// ----------------------------------------------------------------------------
// INFO UMUM
// ----------------------------------------------------------------------------
export const SITE = {
  name: "EdenDevs",
  logoInitial: "E",
  email: "hello@edendevs.site",
  tagline: "Kode yang matang. Ruang untuk bertumbuh.",
  copyright: "© 2026 EdenDevs Studio. Seluruh hak cipta dilindungi.",
};

// ----------------------------------------------------------------------------
// KONFIGURASI PATH GAMBAR (Ganti string kosong "" dengan path gambar Anda)
// Contoh: "/images/hero-terrarium.jpg"
// ----------------------------------------------------------------------------
export const IMAGE_PATHS = {
  heroImage: "", // TODO: Masukkan path gambar Hero (Terrarium tanaman di kanan atas)
  projects: {
    verdant: "", // TODO: Masukkan path gambar proyek utama "Verdant"
    forma: "",   // TODO: Masukkan path gambar proyek "Forma"
    orbit: "",   // TODO: Masukkan path gambar proyek "Orbit"
  },
  team: {
    alex: "",    // TODO: Masukkan path foto anggota tim 1
    jamie: "",   // TODO: Masukkan path foto anggota tim 2
    sam: "",     // TODO: Masukkan path foto anggota tim 3
    taylor: "",  // TODO: Masukkan path foto anggota tim 4
  },
};

// ----------------------------------------------------------------------------
// NAVIGASI
// ----------------------------------------------------------------------------
export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Layanan", href: "#services" },
  { label: "Karya", href: "#work" },
  { label: "Studio", href: "#team" },
  { label: "Proses", href: "#process" },
];

/** Tautan yang disorot di navbar desktop. */
export const NAV_ACTIVE_HREF = "#services";

export const NAV_CTA = {
  desktop: "Tersedia untuk proyek baru",
  mobile: "Mulai diskusi proyek",
  href: "#contact",
};

export const FOOTER_LINKS: NavLink[] = [
  { label: "Layanan", href: "#services" },
  { label: "Karya", href: "#work" },
  { label: "Studio", href: "#team" },
  { label: "Kontak", href: "#contact" },
];

// ----------------------------------------------------------------------------
// 1. HERO
// ----------------------------------------------------------------------------
export const HERO = {
  eyebrow: "✦ Studio Produk Digital & Rekayasa Web",
  titleLines: ["Ide cemerlang.", "Akar yang kuat.", "Digital lebih baik."],
  description:
    "Kami adalah studio desain dan pengembangan perangkat lunak yang merancang situs web serta produk digital yang tenang, tangguh, dan berorientasi pada pertumbuhan jangka panjang bisnis Anda.",
  primaryCta: { label: "Mulai proyek bersama", href: "#contact" },
  secondaryCta: { label: "Lihat karya kami", href: "#work" },
  image: {
    src: IMAGE_PATHS.heroImage,
    hint: "IMAGE_PATHS.heroImage",
    alt: "Terrarium kaca minimalis di atas podium batu",
    badge: "Eden Studio · Sejak 2021",
    caption: "Dirancang untuk bertahan lama",
    counter: "01 / 04",
  },
  /** 4 poin pilar nilai di bawah hero. */
  pillars: [
    "Berakar pada kejelasan",
    "Dirancang untuk manusia",
    "Dibangun agar tangguh",
    "Tumbuh dengan ketelitian",
  ],
};

// ----------------------------------------------------------------------------
// HEADER SETIAP SECTION
// ----------------------------------------------------------------------------
export interface SectionIntro {
  eyebrow: string;
  titleLines: string[];
  description: string;
}

// ----------------------------------------------------------------------------
// 2. LAYANAN
// ----------------------------------------------------------------------------
export const SERVICES_INTRO: SectionIntro = {
  eyebrow: "01 / Layanan Kami",
  titleLines: ["Dari sebatas benih ide", "menjadi produk nyata."],
  description:
    "Kami berkerja sama dengan para pendiri bisnis dan beberapa tim profesional sejak tahap perencanaan konsep hingga perilisan dengan memadukan desain strategis dengan kode yang bersih dan andal.",
};

export interface Service {
  number: string;
  title: string;
  description: string;
  meta: string;
  icon: LucideIcon;
}

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Pengalaman Web",
    description:
      "Situs web bisnis dan platform identitas brand yang cepat, ekspresif, serta dirancang dengan alur cerita yang jernih dan kualitas teknis jangka panjang.",
    meta: "Design System · Next.js · Animasi Interaktif",
    icon: Layout,
  },
  {
    number: "02",
    title: "Produk Digital",
    description:
      "Aplikasi web dan antarmuka pengguna (UI/UX) yang menyederhanakan alur kerja kompleks sehingga terasa mudah dan nyaman digunakan setiap hari.",
    meta: "UI/UX Produk · Prototyping · Full-stack",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Fondasi Tangguh",
    description:
      "Arsitektur frontend yang skalabel, pustaka komponen yang aksesibel, serta optimalisasi performa tinggi untuk mendukung pertumbuhan bisnis Anda.",
    meta: "TypeScript · Aksesibilitas · Skalabilitas",
    icon: Layers,
  },
];

// ----------------------------------------------------------------------------
// 3. KARYA / PORTOFOLIO
// ----------------------------------------------------------------------------
export const WORK_INTRO: SectionIntro = {
  eyebrow: "02 / Karya Pilihan",
  titleLines: ["Ide yang diwujudkan."],
  description:
    "Kurasi kolaborasi terbaru kami mencakup pengembangan platform identitas brand, e-commerce modern, hingga perangkat lunak B2B.",
};

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageHint: string;
  imageAlt: string;
}

export interface FeaturedProject extends Project {
  /** Panel kiri kartu (presentasi brand). */
  brand: {
    wordmark: string;
    headlineLines: string[];
    blurb: string;
  };
  /** Konten mockup browser di panel kanan kartu. */
  mockup: {
    domain: string;
    headline: string;
    blurb: string;
    cta: string;
  };
}

/** Proyek utama — ditampilkan sebagai kartu lebar penuh. */
export const FEATURED_PROJECT: FeaturedProject = {
  title: "Verdant — rumah bagi pecinta tanaman",
  description:
    "Identitas visual, pengalaman belanja e-commerce kustom, dan sistem panduan perawatan tanaman.",
  tags: ["Strategi Brand", "Desain UI/UX", "Next.js Commerce"],
  image: IMAGE_PATHS.projects.verdant,
  imageHint: "IMAGE_PATHS.projects.verdant",
  imageAlt: "Tampilan proyek e-commerce tanaman Verdant",
  brand: {
    wordmark: "verdant.",
    headlineLines: ["Lebih banyak hijau.", "Lebih terasa rumah."],
    blurb:
      "Platform e-commerce tanaman hias dengan panduan perawatan interaktif serta kurasi pot keramik artistik untuk ruang dalam.",
  },
  mockup: {
    domain: "verdant.co",
    headline: "Beri ruang untuk tumbuh.",
    blurb:
      "Tanaman hias pilihan yang dirawat dengan sepenuh hati, dikirim langsung dari rumah kaca kami ke ruang tamu Anda.",
    cta: "Jelajahi Koleksi",
  },
};

/** Proyek lainnya — ditampilkan dalam grid 2 kolom. */
export const PROJECTS: Project[] = [
  {
    title: "Forma — ruang dengan makna",
    description:
      "Portofolio editorial dan ruang pamer digital untuk biro arsitektur dan desain interior independen.",
    tags: ["Arahan Seni", "Desain Web", "Headless CMS"],
    image: IMAGE_PATHS.projects.forma,
    imageHint: "IMAGE_PATHS.projects.forma",
    imageAlt: "Pratinjau situs web arsitektur interior Forma",
  },
  {
    title: "Orbit — cara kerja yang lebih tenang",
    description:
      "Antarmuka aplikasi dan design system untuk platform perencanaan serta pemantauan progres tim lintas waktu.",
    tags: ["Desain Produk", "Design System", "React & TypeScript"],
    image: IMAGE_PATHS.projects.orbit,
    imageHint: "IMAGE_PATHS.projects.orbit",
    imageAlt: "Pratinjau dashboard analitik proyek SaaS Orbit",
  },
];

// ----------------------------------------------------------------------------
// 4. TIM
// ----------------------------------------------------------------------------
export const TEAM_INTRO: SectionIntro = {
  eyebrow: "03 / Siapa Kami",
  titleLines: ["Empat talenta.", "Satu dedikasi karya."],
  description:
    "Tanpa perantara berlapis. Anda berkolaborasi langsung dengan desainer dan engineer berpengalaman yang mengerjakan produk Anda setiap harinya.",
};

export const TEAM_FOOTER = {
  location: "Berbasis di Indonesia & berkolaborasi bersama klien global.",
  highlight: "100% Tim Senior · Kolaborasi Langsung",
};

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  hint: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Alex Morgan",
    role: "Direktur Desain",
    bio: "Merancang sistem visual, kejelasan identitas brand, dan antarmuka yang tenang dengan pengalaman studio lebih dari satu dekade.",
    image: IMAGE_PATHS.team.alex,
    hint: "IMAGE_PATHS.team.alex",
  },
  {
    name: "Jamie Park",
    role: "Lead Engineer",
    bio: "Membangun arsitektur frontend yang tangguh, integrasi API yang rapi, serta pengalaman web interaktif yang mulus.",
    image: IMAGE_PATHS.team.jamie,
    hint: "IMAGE_PATHS.team.jamie",
  },
  {
    name: "Sam Rivera",
    role: "Desainer Produk",
    bio: "Mengubah permasalahan produk yang rumit menjadi alur pengguna yang intuitif, prototipe interaktif, dan sistem yang berpusat pada manusia.",
    image: IMAGE_PATHS.team.sam,
    hint: "IMAGE_PATHS.team.sam",
  },
  {
    name: "Taylor Reed",
    role: "Creative Developer",
    bio: "Menjembatani desain dan rekayasa perangkat lunak melalui animasi yang luwes, mikro-interaksi, dan penyempurnaan performa.",
    image: IMAGE_PATHS.team.taylor,
    hint: "IMAGE_PATHS.team.taylor",
  },
];

// ----------------------------------------------------------------------------
// 5. PROSES
// ----------------------------------------------------------------------------
export const PROCESS_INTRO: SectionIntro = {
  eyebrow: "04 / Cara Kami Bekerja",
  titleLines: ["Langkah terarah.", "Progres transparan."],
  description:
    "Karya terbaik lahir ketika setiap pihak memahami arah dan tahapan yang sedang berjalan. Proses kami tenang, terstruktur, dan mengutamakan komunikasi terbuka.",
};

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Menanam Benih",
    description:
      "Kami mendengarkan dengan saksama, menyelaraskan tujuan bisnis, dan memetakan inti permasalahan sebelum membuat sketsa atau menulis baris kode.",
    deliverable: "Riset & Arah Strategi",
  },
  {
    step: "02",
    title: "Membentuk Pengalaman",
    description:
      "Kami mengeksplorasi arah visual, memetakan perjalanan pengguna, dan menyusun prototipe interaktif yang dapat Anda uji sejak dini.",
    deliverable: "Arsitektur & Desain UI/UX",
  },
  {
    step: "03",
    title: "Membangun dengan Presisi",
    description:
      "Kode TypeScript yang bersih, tata letak responsif, dan animasi halus dikerjakan secara transparan melalui iterasi mingguan yang terukur.",
    deliverable: "Pengembangan Produksi",
  },
  {
    step: "04",
    title: "Merawat & Bertumbuh",
    description:
      "Kami meluncurkan produk dengan penuh keyakinan, memantau performa nyata di lapangan, dan mendampingi evolusi produk Anda ke depannya.",
    deliverable: "Peluncuran & Pemeliharaan",
  },
];

// ----------------------------------------------------------------------------
// 6. KONTAK
// ----------------------------------------------------------------------------
export const CONTACT = {
  eyebrow: "05 / Hubungi Kami",
  titleLines: ["Mari tumbuhkan", "sesuatu yang", "bernilai."],
  description:
    "Punya rencana proyek baru, atau ingin mendiskusikan langkah digital berikutnya? Ceritakan sedikit tentang apa yang sedang Anda bangun—kami membaca setiap pesan dan membalas dalam 1–2 hari kerja.",
  emailLabel: "Lebih suka melalui email langsung?",
  form: {
    title: "Ceritakan tentang proyek Anda",
    subtitle:
      "Lengkapi informasi singkat di bawah ini dan tim kami akan segera menghubungi Anda.",
    fields: {
      name: { label: "Nama Anda *", placeholder: "Budi Santoso" },
      email: { label: "Alamat Email *", placeholder: "budi@perusahaan.com" },
      company: {
        label: "Nama Perusahaan / Organisasi",
        placeholder: "PT Nusantara Digital (Opsional)",
      },
      service: {
        label: "Layanan yang dibutuhkan",
        options: [
          "Website Company Profile / Landing Page",
          "Aplikasi Web / Produk Digital",
          "Design System & Pengembangan Frontend",
          "Kemitraan Studio Penuh (End-to-End)",
        ],
      },
      budget: {
        label: "Estimasi Anggaran",
        options: [
          "Rp 5 Juta – Rp 15 Juta",
          "Rp 15 Juta – Rp 35 Juta",
          "Di atas Rp 35 Juta",
          "Belum ditentukan / Diskusi dulu",
        ],
      },
      details: {
        label: "Detail Proyek *",
        placeholder:
          "Ceritakan tujuan proyek, target waktu peluncuran, serta gambaran fitur yang ingin Anda wujudkan...",
      },
    },
    submitLabel: "Kirim Pesan",
    successMessage: "Pesan berhasil terkirim!",
  },
};

