import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-industrial",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZENITH — Automotive Heritage & Excellence",
  description: "Curators of the world's finest automotive engineering since 1924. Experience the intersection of machinery and legacy.",
};

import LenisProvider from "@/components/LenisProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
