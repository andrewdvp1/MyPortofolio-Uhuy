"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ACTIVE_HREF, NAV_CTA, NAV_LINKS, SITE } from "@/content/site";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#F7F6F2]/85 border-b border-[#0A2568]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-7 h-7 rounded-md bg-[#1346E8] text-white flex items-center justify-center text-xs font-bold tracking-tighter transition-transform duration-300 group-hover:rotate-6">
            {SITE.logoInitial}
          </span>
          <span className="font-semibold text-base tracking-tight text-[#0A2568]">
            {SITE.name}
          </span>
        </a>

        {/* Navigasi Tengah (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 bg-[#E9EDF8] p-1 rounded-full border border-[#0A2568]/5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-1.5 rounded-full text-xs font-medium ${
                link.href === NAV_ACTIVE_HREF
                  ? "bg-white text-[#1346E8] shadow-xs transition-all"
                  : "text-[#0A2568]/70 hover:text-[#0A2568] transition-colors"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Status Ketersediaan / CTA Kanan */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href={NAV_CTA.href}
            className="flex items-center gap-2 text-xs font-medium text-[#0A2568]/80 hover:text-[#1346E8] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#1346E8] animate-pulse" />
            {NAV_CTA.desktop}
          </a>
        </div>

        {/* Tombol Menu Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#0A2568]"
          aria-label="Buka Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Dropdown Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F6F2] border-b border-[#0A2568]/10 px-6 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block text-sm font-medium py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href={NAV_CTA.href}
            onClick={closeMenu}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1346E8] pt-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#1346E8]" />
            {NAV_CTA.mobile}
          </a>
        </div>
      )}
    </header>
  );
}

