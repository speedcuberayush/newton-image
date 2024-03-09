import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
// import { Prosto_One } from "next/font/google";
import "./globals.css";
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Imagnify",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bebas.className}>{children}</body>
    </html>
  );
}
