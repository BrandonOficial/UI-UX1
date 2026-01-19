import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header"; // Importe o Header aqui

// Configurando a fonte local
const impactFont = localFont({
  src: "../public/fonts/IMPACT.TTF", // Caminho para sua fonte
  variable: "--font-impact", // Variável CSS para usar no Tailwind
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
      {/* Injetamos a variável da fonte no body */}
      <body className={`${impactFont.variable} antialiased bg-zinc-50`}>
        {/* O Header fica no Layout para aparecer em todas as páginas */}
        <Header />
        <main className="pt-32"> {/* Padding top para compensar o header fixo */}
          {children}
        </main>
      </body>
    </html>
  );
}