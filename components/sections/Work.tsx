"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, revealOnScroll } from "@/lib/animations";
import {
  FEATURED_PROJECT,
  PROJECTS,
  WORK_INTRO,
  type Project,
} from "@/content/site";
import ImageSlot from "@/components/ui/ImageSlot";
import SectionHeader from "@/components/ui/SectionHeader";
import Lines from "@/components/ui/Lines";

/** Section Karya Pilihan / Portofolio */
export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionHeader {...WORK_INTRO} className="mb-16" />

      {/* Proyek Utama (Kartu Lebar Penuh) */}
      <FeaturedProjectCard />

      {/* Grid 2 Kolom: Proyek Lainnya */}
      <motion.div
        {...revealOnScroll("-60px")}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </section>
  );
}

// ----------------------------------------------------------------------------
// Kartu proyek utama (dengan panel brand + mockup browser)
// ----------------------------------------------------------------------------
function FeaturedProjectCard() {
  const project = FEATURED_PROJECT;
  const { brand, mockup } = project;

  return (
    <motion.div
      {...revealOnScroll("-60px", fadeUp)}
      className="mb-16 group cursor-pointer"
    >
      <div className="bg-[#DCE8FF] p-6 sm:p-10 md:p-12 rounded-md border border-[#0A2568]/10 transition-all duration-500 hover:shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sisi Kiri Presentasi Brand */}
          <div className="lg:col-span-4 space-y-6">
            <div className="text-2xl sm:text-3xl font-serif italic text-[#0B31B8]">
              {brand.wordmark}
            </div>
            <h4 className="text-xl sm:text-2xl font-semibold text-[#0B31B8] leading-snug">
              <Lines lines={brand.headlineLines} />
            </h4>
            <p className="text-xs text-[#0A2568]/70 leading-relaxed">{brand.blurb}</p>
          </div>

          {/* Sisi Kanan Mockup Browser */}
          <div className="lg:col-span-8 bg-white rounded-md p-4 sm:p-6 shadow-xs border border-[#0A2568]/5">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-5 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#1346E8]">
                  {mockup.domain}
                </span>
                <h5 className="text-lg sm:text-xl font-semibold text-[#0A2568] leading-tight">
                  {mockup.headline}
                </h5>
                <p className="text-[11px] text-[#0A2568]/65">{mockup.blurb}</p>
                <span className="inline-block bg-[#1346E8] text-white text-[10px] font-medium px-3 py-1.5 rounded-xs">
                  {mockup.cta}
                </span>
              </div>
              <div className="sm:col-span-7">
                <ImageSlot
                  src={project.image}
                  alt={project.imageAlt}
                  pathHint={project.imageHint}
                  aspectClass="aspect-[16/11]"
                  className="rounded-xs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProjectCaption project={project} size="lg" />
    </motion.div>
  );
}

// ----------------------------------------------------------------------------
// Kartu proyek standar (untuk grid 2 kolom)
// ----------------------------------------------------------------------------
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div variants={fadeUp} className="group cursor-pointer">
      <div className="bg-[#DCE8FF] p-6 sm:p-8 rounded-md border border-[#0A2568]/10 transition-all duration-500 hover:shadow-md">
        <div className="bg-white rounded-xs overflow-hidden shadow-2xs">
          <ImageSlot
            src={project.image}
            alt={project.imageAlt}
            pathHint={project.imageHint}
            aspectClass="aspect-[16/10]"
          />
        </div>
      </div>
      <ProjectCaption project={project} size="md" />
    </motion.div>
  );
}

// ----------------------------------------------------------------------------
// Keterangan di bawah kartu: judul, deskripsi, tag, dan ikon panah
// ----------------------------------------------------------------------------
function ProjectCaption({ project, size }: { project: Project; size: "lg" | "md" }) {
  const isLarge = size === "lg";

  return (
    <div
      className={`pt-5 flex justify-between border-b border-[#0A2568]/10 pb-6 ${
        isLarge
          ? "flex-col sm:flex-row sm:items-center gap-2"
          : "items-start gap-4"
      }`}
    >
      <div>
        <h3 className="text-lg font-semibold text-[#0B31B8] group-hover:text-[#1346E8] transition-colors">
          {project.title}
        </h3>
        <p
          className={`text-xs text-[#0A2568]/70 mt-1 ${isLarge ? "" : "leading-relaxed"}`}
        >
          {project.description}
        </p>
        <div
          className={`flex items-center mt-3 text-[11px] font-mono text-[#0A2568]/55 ${
            isLarge ? "gap-3" : "gap-2"
          }`}
        >
          {project.tags.map((tag, i) => (
            <Fragment key={tag}>
              {i > 0 && <span>·</span>}
              <span>{tag}</span>
            </Fragment>
          ))}
        </div>
      </div>
      <ArrowUpRight
        className={`text-[#1346E8] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0 ${
          isLarge ? "w-5 h-5" : "w-4 h-4 mt-1"
        }`}
      />
    </div>
  );
}

