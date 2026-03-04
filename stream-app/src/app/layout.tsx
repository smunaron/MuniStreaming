import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MuniStream — Stream TV & Films Online",
  description: "Stream de laatste TV-series en films on demand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased bg-[#0e0118] text-white`}>
        <Navbar />
        <main>{children}</main>
        <footer className="border-t border-[#2d1050] mt-16 py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MuniStream. Alleen voor demo-doeleinden.
        </footer>
      </body>
    </html>
  );
}
