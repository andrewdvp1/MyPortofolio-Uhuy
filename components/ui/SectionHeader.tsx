"use client";

import { motion } from "framer-motion";
import { fadeUp, revealOnScroll } from "@/lib/animations";
import type { SectionIntro } from "@/content/site";
import Lines from "./Lines";

interface SectionHeaderProps extends SectionIntro {
  /** Gunakan `true` untuk section berlatar gelap. */
  dark?: boolean;
  /** Tata letak: "split" (judul kiri, deskripsi kanan) atau "center". */
  align?: "split" | "center";
  /** Kelas tambahan untuk container (mis. jarak bawah `mb-16`/`mb-20`). */
  className?: string;
}

/** Label kecil berbentuk pill dengan titik aksen. */
export function Eyebrow({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em] ring-1 ${
        dark
          ? "bg-white/5 text-brand-200 ring-white/15"
          : "bg-white text-brand ring-ink/10 shadow-xs"
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dark ? "bg-brand-300" : "bg-brand"}`} />
      {children}
    </span>
  );
}

/**
 * Header standar section: eyebrow + judul + deskripsi.
 */
export default function SectionHeader({
  eyebrow,
  titleLines,
  description,
  dark = false,
  align = "split",
  className = "mb-16",
}: SectionHeaderProps) {
  const titleClass = `text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-[-0.03em] leading-[1.05] ${
    dark ? "text-white" : "text-ink"
  }`;
  const accentClass = dark ? "text-brand-300" : "text-brand";
  const descClass = `text-base leading-relaxed ${dark ? "text-white/60" : "text-ink/60"}`;

  if (align === "center") {
    return (
      <motion.div
        {...revealOnScroll("-80px")}
        className={`max-w-3xl mx-auto text-center flex flex-col items-center gap-5 ${className}`}
      >
        <motion.div variants={fadeUp}>
          <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        </motion.div>
        <motion.h2 variants={fadeUp} className={titleClass}>
          <Lines lines={titleLines} accentClassName={accentClass} />
        </motion.h2>
        <motion.p variants={fadeUp} className={`${descClass} max-w-xl`}>
          {description}
        </motion.p>
      </motion.div>
    );
  }

  return (
    <motion.div
      {...revealOnScroll("-80px")}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end ${className}`}
    >
      <div className="lg:col-span-7 space-y-5">
        <motion.div variants={fadeUp}>
          <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        </motion.div>
        <motion.h2 variants={fadeUp} className={titleClass}>
          <Lines lines={titleLines} accentClassName={accentClass} />
        </motion.h2>
      </div>
      <motion.p variants={fadeUp} className={`lg:col-span-5 lg:pl-12 ${descClass}`}>
        {description}
      </motion.p>
    </motion.div>
  );
}
