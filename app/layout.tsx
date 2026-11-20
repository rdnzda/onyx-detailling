import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Onyx Detailing | Soins Automobiles d'Exception",
  description: "Service de detailing, céramique et rénovation de luxe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={archivo.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
