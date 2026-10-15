"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { CLIENTS, HERO } from "@/content/site";
import ImageSlot from "@/components/ui/ImageSlot";
import Lines from "@/components/ui/Lines";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      {/* Latar: grid halus + cahaya brand */}
      <div className="absolute inset-0 bg-grid mask-radial pointer-events-none" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-brand/[0.12] blur-[120px] pointer-events-none"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
          {/* Kolom Kiri: Teks Utama */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2.5 rounded-full bg-white pl-1.5 pr-4 py-1.5 text-xs font-medium text-ink/70 ring-1 ring-ink/10 shadow-xs">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5 text-[11px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Tersedia
                </span>
                {HERO.badge}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-7 text-[44px] leading-[1.02] sm:text-6xl lg:text-[76px] font-semibold tracking-[-0.04em] text-ink"
            >
              <Lines lines={HERO.titleLines} accentClassName="text-brand pr-1" />
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 text-base sm:text-lg text-ink/60 max-w-xl leading-relaxed"
            >
              {HERO.description}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={HERO.primaryCta.href}>{HERO.primaryCta.label}</Button>
              <Button href={HERO.secondaryCta.href} variant="secondary" icon="up-right">
                {HERO.secondaryCta.label}
              </Button>
            </motion.div>

            {/* Statistik */}
            <motion.dl
              variants={fadeUp}
              className="mt-12 grid grid-cols-3 max-w-lg divide-x divide-ink/10"
            >
              {HERO.stats.map((stat) => (
                <div key={stat.label} className="px-4 first:pl-0 flex flex-col-reverse">
                  <dt className="mt-1 text-xs sm:text-[13px] text-ink/50">{stat.label}</dt>
                  <dd className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* Kolom Kanan: Komposisi Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[28px] p-2 bg-white/70 ring-1 ring-ink/[0.07] shadow-[0_40px_80px_-30px_rgb(11_21_51/0.35)] backdrop-blur">
              <div className="relative rounded-[22px] overflow-hidden group">
                <ImageSlot
                  src={HERO.image.src}
                  alt={HERO.image.alt}
                  pathHint={HERO.image.hint}
                  aspectClass="aspect-[4/4.6]"
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider text-ink/80 ring-1 ring-ink/5">
                  {HERO.image.badge}
                </div>
              </div>
            </div>

            {/* Kartu mengambang: rating */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="absolute -left-4 sm:-left-10 bottom-16 z-30"
            >
              <div className="animate-float bg-white rounded-2xl p-4 pr-6 shadow-[0_20px_50px_-20px_rgb(11_21_51/0.35)] ring-1 ring-ink/5">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-ink">
                  {HERO.floatingCards.rating.value}
                  <span className="text-sm text-ink/40 font-medium">/5</span>
                </p>
                <p className="text-[11px] text-ink/55">{HERO.floatingCards.rating.label}</p>
              </div>
            </motion.div>

            {/* Kartu mengambang: metrik */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="absolute -right-3 sm:-right-8 top-20 z-30"
            >
              <div
                className="animate-float bg-ink text-white rounded-2xl p-4 pr-6 shadow-[0_20px_50px_-20px_rgb(11_21_51/0.6)]"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-brand flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </span>
                  <span className="text-2xl font-semibold tracking-tight">
                    {HERO.floatingCards.metric.value}
                  </span>
                </div>
                <p className="mt-1.5 text-[11px] text-white/60 max-w-[150px]">
                  {HERO.floatingCards.metric.label}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Marquee Klien */}
      <div className="relative mt-24 lg:mt-28 border-y border-ink/[0.07] bg-white/50 py-8">
        <p className="text-center text-xs font-medium text-ink/45 mb-6 px-6">{CLIENTS.label}</p>
        <div className="mask-x overflow-hidden">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...CLIENTS.names, ...CLIENTS.names].map((name, i) => (
              <span
                key={`${name}-${i}`}
                aria-hidden={i >= CLIENTS.names.length}
                className="mx-8 sm:mx-12 text-xl sm:text-2xl font-semibold tracking-tight text-ink/25 whitespace-nowrap hover:text-ink/70 transition-colors"
              >
                {i % 3 === 1 ? <span className="font-serif italic font-normal">{name}</span> : name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
