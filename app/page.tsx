// ============================================================================
// HALAMAN UTAMA
// - Ubah teks / gambar / tautan  -> content/site.ts
// - Ubah tampilan sebuah section  -> components/sections/*.tsx
// - Komponen kecil yang dipakai ulang -> components/ui/*.tsx
// - Variasi animasi               -> lib/animations.ts
// ============================================================================
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Team from "@/components/sections/Team";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function CompanyProfilePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2] text-[#0A2568]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Work />
        <Team />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}