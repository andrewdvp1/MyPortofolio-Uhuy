import { FOOTER_LINKS, SITE } from "@/content/site";

/** Footer (Latar Biru Royal #1346E8) */
export default function Footer() {
  return (
    <footer className="bg-[#1346E8] text-white py-14 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-xs bg-white text-[#1346E8] flex items-center justify-center text-xs font-bold">
              {SITE.logoInitial}
            </span>
            <span className="font-semibold text-base tracking-tight">{SITE.name}</span>
          </div>
          <p className="text-sm sm:text-base font-medium text-blue-100">{SITE.tagline}</p>
        </div>

        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-blue-200">
          <p>{SITE.copyright}</p>
          <div className="flex items-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

