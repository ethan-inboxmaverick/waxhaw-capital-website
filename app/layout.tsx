import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RevealActivator } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site/config";

export const metadata: Metadata = {
  metadataBase: siteConfig.origin,
  title: {
    default: `${siteConfig.name} — Capital. Structure. Growth.`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export const viewport: Viewport = {
  themeColor: "#07090e",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" id="top">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Font loading via stylesheet link keeps builds hermetic in
            offline environments; swap to self-hosted files before launch. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-svh flex-col">
        <a
          href="#main"
          className="absolute -left-[9999px] top-0 z-[1100] bg-gold px-5 py-3 font-label font-semibold text-ink focus:left-0"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <RevealActivator />
      </body>
    </html>
  );
}
