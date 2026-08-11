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
    title: "Services — Investments, M&A Advisory, Real Estate",
    description:
      "Three disciplines, one operating mindset: growth investments in $1M–$5M EBITDA companies, sell-side and buy-side M&A advisory, and off-market real estate with tax-advantaged structures.",
    status: "live",
  },
  {
    path: "/services/growth-investments",
    title: "Growth Investments — Majority Recapitalizations & Owner Rollover Equity",
    description:
      "Control acquisitions, majority recapitalizations with owner rollover, and second-bite structures for lower-middle-market companies with $1M–$5M EBITDA. Operator-led, no fund, no exit clock.",
    status: "live",
  },
  {
    path: "/services/ma-advisory",
    title: "M&A Advisory — Sell-Side & Buy-Side for the Lower Middle Market",
    description:
      "Sell-side and buy-side M&A advisory: valuation, market process, structuring, negotiation, and post-close transition, led by an operator who has sold a company personally.",
    status: "live",
  },
  {
    path: "/services/off-market-real-estate",
    title: "Off-Market Real Estate — 1031 Exchanges, Opportunity Zones, Cost Segregation",
    description:
      "Off-market commercial and residential real estate sourcing with tax-advantaged structures, evaluated alongside your tax and legal advisors.",
    status: "live",
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
