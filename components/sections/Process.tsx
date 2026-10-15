"use client";

import { motion } from "framer-motion";
import { fadeUp, revealOnScroll } from "@/lib/animations";
import { PROCESS_INTRO, PROCESS_STEPS } from "@/content/site";
import SectionHeader from "@/components/ui/SectionHeader";

/** Section Proses Kerja (Latar Krem #F7F6F2) */
export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionHeader {...PROCESS_INTRO} className="mb-20" />

      {/* Kolom Tahapan Proses */}
      <motion.div
        {...revealOnScroll("-60px")}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {PROCESS_STEPS.map((item) => (
          <motion.div
            key={item.step}
            variants={fadeUp}
            className="pt-6 border-t border-[#0A2568]/15 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-mono text-[#1346E8] block mb-4">{item.step}</span>
              <h3 className="text-lg font-semibold text-[#0B31B8] mb-3">{item.title}</h3>
              <p className="text-xs text-[#0A2568]/75 leading-relaxed mb-6">
                {item.description}
              </p>
            </div>
            <span className="text-[11px] font-mono text-[#0A2568]/50">{item.deliverable}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

