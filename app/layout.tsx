import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "UhuyDevs — Studio Desain & Rekayasa Produk Digital",
  description:
    "Studio desain dan pengembangan produk digital serta pengalaman web yang dirancang untuk bertumbuh.",
  icons: {
    icon: "/logo2.png", // path dari folder public
    apple: "/logo2.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${sans.variable} ${serif.variable} ${mono.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased bg-canvas text-ink selection:bg-brand selection:text-white">
        {children}
      </body>
    </html>
  );
}