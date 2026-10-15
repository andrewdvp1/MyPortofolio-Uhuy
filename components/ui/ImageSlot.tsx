// ============================================================================
// KOMPONEN PLACEHOLDER GAMBAR
// Otomatis menampilkan petunjuk path jika string gambar masih kosong
// ============================================================================
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";

interface ImageSlotProps {
  src: string;
  alt: string;
  pathHint: string;
  className?: string;
  aspectClass?: string;
  darkPlaceholder?: boolean;
}

export default function ImageSlot({
  src,
  alt,
  pathHint,
  className = "",
  aspectClass = "aspect-square",
  darkPlaceholder = false,
}: ImageSlotProps) {
  if (src && src.trim() !== "") {
    return (
      <div className={`relative overflow-hidden ${aspectClass} ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden flex flex-col items-center justify-center p-6 text-center border transition-colors duration-500 ${aspectClass} ${
        darkPlaceholder
          ? "bg-[#0F38C5]/60 border-white/20 text-white/80 hover:border-white/40"
          : "bg-[#E6ECFA]/70 border-[#0A2568]/15 text-[#0A2568]/70 hover:border-[#1346E8]/40"
      } ${className}`}
    >
      {/* Pola Grid Halus di Latar Placeholder */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="relative z-10 flex flex-col items-center max-w-xs">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${
            darkPlaceholder ? "bg-white/10" : "bg-[#1346E8]/10 text-[#1346E8]"
          }`}
        >
          <ImageIcon className="w-5 h-5" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-1">
          Tempat Gambar
        </p>
        <p className="text-[11px] opacity-75 mb-2">{alt}</p>
        <code
          className={`text-[10px] font-mono px-2.5 py-1 rounded border ${
            darkPlaceholder
              ? "bg-black/20 border-white/15 text-blue-100"
              : "bg-white/80 border-[#0A2568]/10 text-[#1346E8]"
          }`}
        >
          {pathHint}
        </code>
      </div>
    </div>
  );
}

