/**
 * Content records for /services and its three child pages.
 * Source: WCG_Website_Copy_Revisions (client-approved copy), reordered
 * Growth Investments → M&A Advisory → Off-Market Real Estate per the same
 * doc. House style: no em dashes in body copy; en dashes only in ranges.
 * FAQ answers restate approved copy only; no new factual claims.
 */

export interface ServiceRecord {
  slug: string;
  index: string;
  name: string;
  sub: string;
  seoTitle: string;
  seoDescription: string;
  paragraphs: readonly string[];
  covers: readonly string[];
  note: { title: string; body: string } | null;
  faq: readonly { q: string; a: string }[];
}

export const services: readonly ServiceRecord[] = [
  {
    slug: "growth-investments",
    index: "01",
    name: "Growth Investments",
    sub: "Acquisitions & Equity Partnerships",
    seoTitle: "Growth Investments — Majority Recapitalizations & Owner Rollover Equity",
    seoDescription:
      "Waxhaw Capital Group acquires and invests in lower-middle-market companies with $1M–$5M EBITDA: control acquisitions, majority recapitalizations with owner rollover, and second-bite structures. Operator-led, no fund, no exit clock.",
    paragraphs: [
      "We acquire and invest in lower-middle-market companies with strong fundamentals and room to run: typically $1M–$5M in EBITDA across services, healthcare, veterinary, manufacturing, and distribution.",
      "As operators, we don't just write a check and set a board meeting. We've built the systems, hired the crews, made the payroll, and been through the exit.",
    ],
    covers: [
      "Control acquisitions and majority recapitalizations",
      "Owner rollover and second-bite structures",
      "Operational systems, hiring, and margin work",
      "Add-on acquisitions and platform buildout",
      "Exit readiness and value acceleration",
    ],
    note: null,
    faq: [
      {
        q: "What does owner rollover mean?",
        a: "You keep a stake in the business after the transaction. When the business grows and is sold again, that stake is your second bite of the apple.",
      },
      {
        q: "Do you take control positions?",
        a: "Yes. We focus on control equity and majority recapitalizations with owner rollover. We don't take minority passive positions.",
      },
      {
        q: "How long do you hold?",
        a: "Indefinitely. We are not a fund and have no exit clock. We invest our own capital and hold for as long as the business deserves.",
      },
    ],
  },
  {
    slug: "ma-advisory",
    index: "02",
    name: "M&A Advisory",
    sub: "Sell-Side & Buy-Side",
    seoTitle: "M&A Advisory — Sell-Side & Buy-Side for the Lower Middle Market",
    seoDescription:
      "Sell-side and buy-side M&A advisory for lower-middle-market business owners: valuation and positioning, market process, structuring, negotiation, and post-close transition. Every engagement led by an operator who has sold a company personally.",
    paragraphs: [
      "We advise owners through the full arc of a transaction: valuation and positioning, market process, structuring, negotiation, and the transition after close.",
      "Every engagement is led by someone who has sat on the seller's side of the table personally.",
    ],
    covers: [
      "Exit planning and business valuation",
      "Sell-side process management",
      "Buy-side search and acquisition support",
      "Deal structuring and tax-efficient transitions",
      "Post-transaction integration",
    ],
    note: {
      title: "Larger mandates",
      body: "Sell-side engagements meaningfully above our investment range are handled through a separate process built for middle-market sellers. If your business is larger than what we acquire directly, tell us: the advisory conversation is a different one, and we'll have it.",
    },
    faq: [
      {
        q: "Do you advise on businesses you might also want to buy?",
        a: "Waxhaw Capital Group acts as both an advisor and a principal. Where we have or may acquire an interest in a transaction, that role is disclosed in writing before an engagement begins.",
      },
      {
        q: "What if my business is bigger than your investment range?",
        a: "Tell us. Sell-side engagements meaningfully above our investment range are handled through a separate process built for middle-market sellers.",
      },
      {
        q: "What happens when I reach out?",
        a: "A confidential conversation with no obligation. We sign an NDA before you share anything sensitive.",
      },
    ],
  },
  {
    slug: "off-market-real-estate",
    index: "03",
    name: "Off-Market Real Estate",
    sub: "Tax-Advantaged Sourcing",
    seoTitle: "Off-Market Real Estate — 1031 Exchanges, Opportunity Zones, Cost Segregation",
    seoDescription:
      "Off-market commercial and residential real estate sourcing with tax-advantaged structures: 1031 exchange coordination, opportunity zone investments, and cost segregation strategies, evaluated alongside your tax and legal advisors.",
    paragraphs: [
      "Through our network and proprietary sourcing methods, we identify off-market commercial and residential real estate opportunities.",
      "We specialize in tax-advantaged structures like 1031 exchanges, opportunity zones, and cost segregation strategies, and we work alongside clients' tax and legal advisors to evaluate structures appropriate to their situation.",
    ],
    covers: [
      "Off-market deal sourcing",
      "1031 exchange coordination",
      "Opportunity zone investments",
      "Portfolio optimization and tax strategy",
    ],
    note: null,
    faq: [
      {
        q: "Do you provide tax advice?",
        a: "No. We work alongside your tax and legal advisors to evaluate structures appropriate to your situation.",
      },
      {
        q: "What kind of properties do you source?",
        a: "Off-market commercial and residential opportunities, found through our network and proprietary sourcing methods.",
      },
    ],
  },
] as const;

export function getService(slug: string): ServiceRecord | undefined {
  return services.find((s) => s.slug === slug);
}
