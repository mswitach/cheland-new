import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cheland WMS — WMS con Automation Pack",
  description: "WMS para PyMEs y 3PL con automatizaciones nativas, etiquetas y 3PL.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen">
          <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
            <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
              <a href="/" className="font-semibold">Cheland WMS</a>
              <div className="flex items-center gap-4 text-sm">
                <a href="/wms" className="hover:underline">Producto</a>
                <a href="/modules/automation-pack" className="hover:underline">Automation Pack</a>
                <a href="/modules/carriers" className="hover:underline">Etiquetas & Carriers</a>
                <a href="/modules/3pl" className="hover:underline">3PL</a>
                <a href="/addons/tms" className="hover:underline">TMS Add‑on</a>
                <a href="/pricing" className="hover:underline">Precios</a>
                <a href="/cases" className="hover:underline">Casos</a>
                <a href="#cta" className="rounded-lg bg-black text-white px-3 py-1.5">Agendar demo</a>
              </div>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="border-t mt-16">
            <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600">
              © {new Date().getFullYear()} Cheland WMS — PyMEs & 3PL
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
