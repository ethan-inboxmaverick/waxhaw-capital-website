/**
 * Canonical route inventory. Feeds the sitemap, llms.txt, and navigation.
 * status: "live" routes are indexable and appear in the sitemap;
 * "placeholder" routes exist so navigation works during the incremental
 * build, render an honest in-progress notice, and are noindexed.
 */
export type RouteStatus = "live" | "placeholder";

export interface SiteRoute {
  path: string;
  title: string;
  description: string;
  status: RouteStatus;
}

export const routes: readonly SiteRoute[] = [
  {
    path: "/",
    title: "Operator-Led Lower-Middle-Market Investment Firm",
    description:
      "Waxhaw Capital Group acquires, invests in, and advises lower-middle-market companies across services, healthcare, manufacturing, and distribution. Operator-led, based in Waxhaw, NC.",
    status: "live",
  },
  {
    path: "/criteria",
    title: "Investment Criteria — $1M–$5M EBITDA",
    description:
      "What Waxhaw Capital Group looks for: $1M to $5M EBITDA, essential businesses in home services, B2B services, healthcare, veterinary, manufacturing, and distribution. Southeast primary. No fund, no exit clock.",
    status: "live",
  },
  {
    path: "/about",
    title: "About the Firm",
    description:
      "An operator-led investment firm founded by two operators who have built, scaled, and sold companies of their own.",
    status: "placeholder",
  },
  {
    path: "/services",
    title: "Services",
    description:
      "Growth investments, M&A advisory, and off-market real estate.",
    status: "placeholder",
  },
  {
    path: "/team",
    title: "Leadership",
    description: "The founders of Waxhaw Capital Group.",
    status: "placeholder",
  },
  {
    path: "/process",
    title: "Our Process",
    description:
      "What happens after you contact us, step by step.",
    status: "placeholder",
  },
  {
    path: "/contact",
    title: "Contact",
    description:
      "Start a confidential conversation or submit an opportunity.",
    status: "placeholder",
  },
  {
    path: "/disclosures",
    title: "Disclosures",
    description: "Legal, regulatory, and disclaimer content.",
    status: "placeholder",
  },
] as const;

export function liveRoutes(): SiteRoute[] {
  return routes.filter((r) => r.status === "live");
}

export function getRoute(path: string): SiteRoute | undefined {
  return routes.find((r) => r.path === path);
}
