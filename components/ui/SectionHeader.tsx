"use client";

import { motion } from "framer-motion";
import { fadeUp, revealOnScroll } from "@/lib/animations";
import type { SectionIntro } from "@/content/site";
import Lines from "./Lines";

interface SectionHeaderProps extends SectionIntro {
  /** Gunakan `true` untuk section berlatar gelap (biru royal). */
  dark?: boolean;
  /** Kelas tambahan untuk container (mis. jarak bawah `mb-16`/`mb-20`). */
  className?: string;
}

/**
 * Header standar section: eyebrow + judul (kiri) dan deskripsi (kanan).
 */
export default function SectionHeader({
  eyebrow,
  titleLines,
  description,
  dark = false,
  className = "mb-16",
}: SectionHeaderProps) {
  return (
    <motion.div
      {...revealOnScroll("-80px")}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-end ${className}`}
    >
      <div className="lg:col-span-7 space-y-4">
        <motion.span
          variants={fadeUp}
          className={`text-[11px] font-mono uppercase tracking-widest block ${
            dark ? "text-blue-200" : "text-[#1346E8]"
          }`}
        >
          {eyebrow}
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className={`text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.12] ${
            dark ? "" : "text-[#0B31B8]"
          }`}
        >
          <Lines lines={titleLines} />
        </motion.h2>
      </div>
      <motion.div
        variants={fadeUp}
        className={`lg:col-span-5 lg:pl-12 text-xs sm:text-sm leading-relaxed ${
          dark ? "text-blue-100/85" : "text-[#0A2568]/75"
        }`}
      >
        {description}
      </motion.div>
    </motion.div>
  );
}

