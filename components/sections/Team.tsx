"use client";

import { motion } from "framer-motion";
import { fadeUp, revealOnScroll } from "@/lib/animations";
import { TEAM_FOOTER, TEAM_INTRO, TEAM_MEMBERS } from "@/content/site";
import ImageSlot from "@/components/ui/ImageSlot";
import SectionHeader from "@/components/ui/SectionHeader";

/** Section Tim (Latar Biru Royal #1346E8) */
export default function Team() {
  return (
    <section id="team" className="bg-[#1346E8] text-white py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader {...TEAM_INTRO} dark className="mb-16" />

        {/* Grid Anggota Tim */}
        <motion.div
          {...revealOnScroll("-60px")}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {TEAM_MEMBERS.map((member) => (
            <motion.div key={member.name} variants={fadeUp} className="group space-y-4">
              <ImageSlot
                src={member.image}
                alt={member.name}
                pathHint={member.hint}
                aspectClass="aspect-[4/4.5]"
                className="rounded-xs"
                darkPlaceholder
              />
              <div className="pt-1">
                <h3 className="text-base font-semibold text-white">{member.name}</h3>
                <p className="text-xs font-mono text-blue-200 mt-0.5 mb-2">{member.role}</p>
                <p className="text-xs text-blue-100/80 leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Kecil di Dalam Section Tim */}
        <div className="mt-16 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-blue-100/80">
          <span>{TEAM_FOOTER.location}</span>
          <span className="font-mono text-[11px] text-white">{TEAM_FOOTER.highlight}</span>
        </div>
      </div>
    </section>
  );
}

