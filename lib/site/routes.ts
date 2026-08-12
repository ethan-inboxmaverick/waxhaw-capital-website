/**
 * Canonical route inventory. Feeds the sitemap, llms.txt, and navigation.
 * status: "live" routes are indexable and appear in the sitemap;
 * "noindex" routes exist and render but are excluded from the sitemap and
 * carry a robots noindex (drafts pending counsel or founder content).
 */
export type RouteStatus = "live" | "noindex";

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
    path: "/about",
    title: "About the Firm — Operators First, Investors Second",
    description:
      "Waxhaw Capital Group was founded by two operators who have built, scaled, and sold companies of their own. $1M–$5M EBITDA, essential businesses, family office mindset.",
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
    title: "Leadership — The Founders",
    description:
      "Meet the founders of Waxhaw Capital Group: David Dygowski and Aaron Caddel, operators who have built, scaled, and sold companies of their own.",
    status: "live",
  },
  {
    path: "/team/david-dygowski",
    title: "David Dygowski — Managing Partner, Operator & Investor",
    description:
      "Founder of Crawl Space Brothers through its sale, operator of Touchstone Electric, Hold the Line Fencing, and Solid Ground, and a North Carolina native rooted in Waxhaw.",
    status: "live",
  },
  {
    path: "/team/aaron-caddel",
    title: "Aaron Caddel — Managing Partner, Entrepreneur & Real Estate Investor",
    description:
      "Founder, operator, and seller of three companies across the blue-collar trades and hospitality; leads WCG's off-market real estate sourcing across the Carolinas.",
    status: "live",
  },
  {
    path: "/process",
    title: "Our Process — What Happens When You Sell Your Business",
    description:
      "What actually happens after you contact us, step by step: first conversation, NDA, information request, indication of value, diligence, close, and what life looks like after.",
    status: "live",
  },
  {
    path: "/contact",
    title: "Contact — Start a Confidential Conversation",
    description:
      "Three ways in: a confidential owner conversation, a structured opportunity submission for intermediaries, or a partnership inquiry. NDA before you share anything sensitive.",
    status: "live",
  },
  {
    path: "/disclosures",
    title: "Disclosures",
    description:
      "Legal and regulatory disclosures for Waxhaw Capital Group, including the firm's advisor-and-principal disclosure.",
    status: "live",
  },
  {
    path: "/privacy",
    title: "Privacy Policy",
    description:
      "How this website handles information: what is and isn't collected, and what happens when you contact us.",
    status: "noindex",
  },
  {
    path: "/insights",
    title: "Insights — Selling, Structuring & Growing Lower-Middle-Market Businesses",
    description:
      "Articles written from the founders' operating experience on exits, structures, valuations, and real estate. First pieces in progress.",
    status: "noindex",
  },
] as const;

export function liveRoutes(): SiteRoute[] {
  return routes.filter((r) => r.status === "live");
}

export function getRoute(path: string): SiteRoute | undefined {
  return routes.find((r) => r.path === path);
}
