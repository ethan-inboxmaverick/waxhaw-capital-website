import { absoluteUrl, siteConfig } from "@/lib/site/config";
import { liveRoutes } from "@/lib/site/routes";

export const dynamic = "force-static";

export function GET(): Response {
  const lines = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    "## Pages",
    "",
    ...liveRoutes().map(
      (r) => `- [${r.title}](${absoluteUrl(r.path)}): ${r.description}`,
    ),
    "",
    `Contact: ${siteConfig.contact.email}`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
