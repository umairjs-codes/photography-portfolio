import type { Metadata } from "next";
import { Playfair_Display, Inter, Caveat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",

  
});
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: { default: "Umair Ali — Photographer", template: "%s | Umair Ali" },
  description:
    "Photography portfolio, editing tutorials, and free LUTs and presets.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${caveat.variable}`}>
      <body className="bg-neutral-950 font-sans text-neutral-100 antialiased">
        <SmoothScroll>
       <Navbar />
<main>{children}</main>
<Footer />
</SmoothScroll>
 <SpeedInsights />
      </body>
    </html>
  );
}