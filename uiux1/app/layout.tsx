import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";

// Correção: nome do arquivo em minúsculo
const impactFont = localFont({
  src: "../public/fonts/impact.ttf", 
  variable: "--font-impact",
});

export const metadata: Metadata = {
  title: "Furniture App",
  description: "Modern Furniture Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${impactFont.variable} antialiased bg-zinc-50`}>
        <Header />
        <main className="pt-32">
          {children}
        </main>
      </body>
    </html>
  );
}