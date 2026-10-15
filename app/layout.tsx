import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "EdenDevs",
  description:
    "Studio desain dan pengembangan produk digital serta pengalaman web yang dirancang untuk bertumbuh.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${sans.variable} ${mono.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#F7F6F2] text-[#0A2568] selection:bg-[#1346E8] selection:text-white">
        {children}
      </body>
    </html>
  );
}