import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site/config";
import { liveRoutes } from "@/lib/site/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return liveRoutes().map((route) => ({
    url: absoluteUrl(route.path),
    changeFrequency: "monthly",
    priority: route.path === "/" ? 1 : 0.8,
  }));
}
