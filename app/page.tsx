// ============================================================================
// HALAMAN UTAMA
// - Ubah teks / gambar / tautan  -> content/site.ts
// - Ubah tampilan sebuah section  -> components/sections/*.tsx
// - Komponen kecil yang dipakai ulang -> components/ui/*.tsx
// - Variasi animasi               -> lib/animations.ts
// - Warna & font (design tokens)  -> app/globals.css
// ============================================================================
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Team from "@/components/sections/Team";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function CompanyProfilePage() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Work />
        <Team />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}