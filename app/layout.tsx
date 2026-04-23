import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans_Arabic } from "next/font/google"; 
import "./globals.css";
import { Providers } from "./components/Providers";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"],
});

const arabicFont = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "700"], 
});

export const metadata: Metadata = {
  title: "Mohamed Gamal | Frontend Developer & Designer",
  description: "Crafting minimalist digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html
      lang="en"
      className={`${archivo.variable} ${arabicFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}