"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { fadeUp, revealOnScroll } from "@/lib/animations";
import { CONTACT, SITE } from "@/content/site";
import Lines from "@/components/ui/Lines";

/** Kelas bersama untuk semua input, select, dan textarea di form. */
const inputClass =
  "w-full px-3.5 py-2.5 text-xs bg-[#F7F6F2] border border-[#0A2568]/15 rounded-xs focus:outline-none focus:border-[#1346E8] transition-colors";

/** Section Kontak (Latar Biru Muda #DFE9FF) */
export default function Contact() {
  return (
    <section id="contact" className="bg-[#DFE9FF] py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Kolom Kiri: Ajakan & Email */}
        <motion.div {...revealOnScroll()} className="lg:col-span-5 space-y-6">
          <motion.span
            variants={fadeUp}
            className="text-[11px] font-mono uppercase tracking-widest text-[#1346E8] block"
          >
            {CONTACT.eyebrow}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08] text-[#0B31B8]"
          >
            <Lines lines={CONTACT.titleLines} />
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-xs sm:text-sm text-[#0A2568]/75 leading-relaxed max-w-sm"
          >
            {CONTACT.description}
          </motion.p>

          <motion.div variants={fadeUp} className="pt-6 space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#0A2568]/55 block">
              {CONTACT.emailLabel}
            </span>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-1.5 text-base sm:text-lg font-semibold text-[#0B31B8] hover:text-[#1346E8] transition-colors"
            >
              <span>{SITE.email}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Kolom Kanan: Kartu Form Putih */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="lg:col-span-7 bg-white rounded-md p-8 sm:p-10 shadow-xs border border-[#0A2568]/5"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------------
// Form kontak
// TODO: Sambungkan handleSubmit ke backend / layanan email.
// ----------------------------------------------------------------------------
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { form } = CONTACT;
  const { fields } = form;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <h3 className="text-base font-semibold text-[#0A2568] mb-1">{form.title}</h3>
      <p className="text-xs text-[#0A2568]/60 mb-8">{form.subtitle}</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label={fields.name.label}>
            <input type="text" required placeholder={fields.name.placeholder} className={inputClass} />
          </Field>
          <Field label={fields.email.label}>
            <input type="email" required placeholder={fields.email.placeholder} className={inputClass} />
          </Field>
        </div>

        <Field label={fields.company.label}>
          <input type="text" placeholder={fields.company.placeholder} className={inputClass} />
        </Field>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label={fields.service.label}>
            <select className={inputClass}>
              {fields.service.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </Field>
          <Field label={fields.budget.label}>
            <select className={inputClass}>
              {fields.budget.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </Field>
        </div>

        <Field label={fields.details.label}>
          <textarea
            rows={4}
            required
            placeholder={fields.details.placeholder}
            className={`${inputClass} resize-none`}
          />
        </Field>

        <div className="flex items-center justify-between pt-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2.5 bg-[#1346E8] hover:bg-[#0B31B8] text-white text-xs font-medium px-6 py-3 rounded-xs transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer"
          >
            <span>{form.submitLabel}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {submitted && (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700">
              <CheckCircle2 className="w-4 h-4" />
              {form.successMessage}
            </span>
          )}
        </div>
      </form>
    </>
  );
}

/** Label + kontrol form. */
function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] font-medium text-[#0A2568] mb-1.5">{label}</label>
      {children}
    </div>
  );
}

