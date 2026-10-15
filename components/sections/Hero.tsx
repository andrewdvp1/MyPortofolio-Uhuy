"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { HERO } from "@/content/site";
import ImageSlot from "@/components/ui/ImageSlot";
import Lines from "@/components/ui/Lines";

export default function Hero() {
  return (
    <section className="pt-10 pb-16 md:pt-16 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Kolom Kiri: Teks Utama */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="lg:col-span-7 space-y-8"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#0A2568]/60"
          >
            <span>{HERO.eyebrow}</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-[64px] font-semibold tracking-tight leading-[1.06] text-[#0B31B8]"
          >
            <Lines lines={HERO.titleLines} />
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-[#0A2568]/75 max-w-xl leading-relaxed"
          >
            {HERO.description}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={HERO.primaryCta.href}
              className="inline-flex items-center gap-3 bg-[#1346E8] hover:bg-[#0B31B8] text-white text-xs sm:text-sm font-medium px-6 py-3.5 rounded-md transition-all duration-300 shadow-xs hover:shadow-md group"
            >
              <span>{HERO.primaryCta.label}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={HERO.secondaryCta.href}
              className="inline-flex items-center gap-3 bg-transparent hover:bg-[#0A2568]/5 text-[#0A2568] border border-[#0A2568]/20 text-xs sm:text-sm font-medium px-6 py-3.5 rounded-md transition-all duration-300 group"
            >
              <span>{HERO.secondaryCta.label}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Kolom Kanan: Gambar Hero (Terrarium) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative group"
        >
          <div className="relative rounded-md overflow-hidden shadow-sm">
            {/* Badge mengambang di pojok kiri atas gambar */}
            <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-xs text-[10px] font-mono uppercase tracking-wider text-[#0A2568]">
              {HERO.image.badge}
            </div>

            {/* Slot Gambar Hero */}
            <ImageSlot
              src={HERO.image.src}
              alt={HERO.image.alt}
              pathHint={HERO.image.hint}
              aspectClass="aspect-[4/4.3]"
              className="rounded-md"
            />

            {/* Caption bawah di dalam gambar */}
            <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-between text-[10px] font-mono text-[#0A2568]/70 bg-white/80 backdrop-blur-xs px-3 py-1.5 rounded-xs">
              <span>{HERO.image.caption}</span>
              <span>{HERO.image.counter}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Baris Pilar Nilai (4 Poin di Bawah Hero) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 pt-8 border-t border-[#0A2568]/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-medium text-[#0A2568]/75"
      >
        {HERO.pillars.map((pillar, i) => (
          <div
            key={pillar}
            className={i === HERO.pillars.length - 1 ? "md:text-right" : undefined}
          >
            {pillar}
          </div>
        ))}
      </motion.div>
    </section>
  );
}

