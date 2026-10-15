"use client";

import { motion } from "framer-motion";
import { fadeUp, revealOnScroll } from "@/lib/animations";
import { SERVICES, SERVICES_INTRO } from "@/content/site";
import SectionHeader from "@/components/ui/SectionHeader";

/** Section Layanan (Latar Biru Muda #DFE9FF) */
export default function Services() {
  return (
    <section id="services" className="bg-[#DFE9FF] py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader {...SERVICES_INTRO} className="mb-20" />

        {/* 3 Kolom Layanan */}
        <motion.div
          {...revealOnScroll("-60px")}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {SERVICES.map(({ number, title, description, meta, icon: Icon }) => (
            <motion.div
              key={number}
              variants={fadeUp}
              className="pt-6 border-t border-[#1346E8]/25 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#1346E8] mb-6">
                  <span>{number}</span>
                  <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-semibold text-[#0B31B8] mb-3">{title}</h3>
                <p className="text-xs sm:text-sm text-[#0A2568]/75 leading-relaxed mb-6">
                  {description}
                </p>
              </div>
              <p className="text-[11px] font-mono text-[#0A2568]/55 pt-4 border-t border-[#0A2568]/10">
                {meta}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

