import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/Providers";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import SmoothScroll from "./components/SmoothScroll";

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
  openGraph: {
    images: ["/icon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${arabicFont.variable} antialiased`}
      suppressHydrationWarning={true}
    >
      <body className="flex flex-col bg-background text-foreground">
        <div className="grain-overlay" />
        <CustomCursor />
        <Preloader />
        <SmoothScroll>
          <Providers>{children}</Providers>
        </SmoothScroll>
      </body>
    </html>
  );
}