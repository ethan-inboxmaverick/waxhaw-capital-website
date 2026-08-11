import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site/config";

interface MetadataInput {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

/**
 * The one metadata helper. Every route builds its metadata through this
 * so canonicals, Open Graph, and robots policy cannot drift.
 */
export function createPageMetadata(input: MetadataInput): Metadata {
  const url = absoluteUrl(input.path);
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: input.path },
    robots: input.noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
    },
  };
}
