import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fraunces/standard.css";
import "@fontsource-variable/fraunces/standard-italic.css";
import "@fontsource-variable/inter/index.css";
import "@fontsource-variable/space-grotesk/index.css";
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
      {/* Fonts are self-hosted via @fontsource-variable packages (imported
          above): no third-party requests, font-display: swap. */}
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
