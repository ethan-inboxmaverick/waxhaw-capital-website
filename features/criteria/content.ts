/**
 * Content records for the /criteria page. Source: WCG_Website_Copy_Revisions
 * (client-approved copy). Body copy follows the house style rule: no em
 * dashes; en dashes appear only in numeric ranges.
 */

export const criteriaHero = {
  eyebrow: "What we look for",
  title: "Investment criteria",
  lede: "We look for essential businesses with real customers, real cash flow, and a reason they're hard to replace. The industry matters less to us than the durability of the earnings.",
} as const;

export const termSheet = [
  {
    label: "EBITDA",
    value:
      "$1M–$5M. Flexible below for high-growth categories; above for the right opportunity.",
    strong: "$1M–$5M.",
  },
  {
    label: "Geography",
    value: "Southeast primary. National for the right business.",
    strong: null,
  },
  {
    label: "Structures",
    value:
      "Control equity, majority recapitalizations with owner rollover, partner buyouts, and add-on acquisitions.",
    strong: null,
  },
  {
    label: "Hold period",
    value: "Indefinite. We are not a fund and have no exit clock.",
    strong: "Indefinite.",
  },
] as const;

export const sectors = [
  {
    id: "S.01",
    name: "Home Services & Specialty Trades",
    description:
      "Electrical, mechanical, plumbing, foundation and crawl space, fencing, restoration, and adjacent residential and light-commercial trades.",
  },
  {
    id: "S.02",
    name: "Business & Consumer Services",
    description:
      "Recurring-revenue and route-based services, facilities and field services, compliance and testing, and other essential B2B service models.",
  },
  {
    id: "S.03",
    name: "Healthcare Services",
    description:
      "Physician and specialty practices, pharmacy, and healthcare services platforms.",
  },
  {
    id: "S.04",
    name: "Veterinary",
    description:
      "Clinics, specialty and emergency practices, and veterinary services platforms.",
  },
  {
    id: "S.05",
    name: "Manufacturing",
    description:
      "Niche and engineered-product manufacturers, contract and custom fabrication, and value-added production with defensible customer relationships.",
  },
  {
    id: "S.06",
    name: "Distribution & Value-Added Distribution",
    description:
      "Specialty and industrial distributors, particularly those with kitting, fabrication, assembly, or technical service attached to the product.",
  },
] as const;

export const whatWeDontDo =
  "Startups, turnarounds, minority passive positions, commodity businesses with no pricing power, or companies without a real management bench or a credible path to one.";

/**
 * FAQ answers restate approved copy only; nothing here is a new factual
 * claim. The NDA-before-sharing commitment comes from the client's
 * upgrade brief (Part 2).
 */
export const faq = [
  {
    q: "What size business do you acquire?",
    a: "Typically $1M to $5M in EBITDA. We will look below that range in a fast-growing category, and above it when the business and the structure are right.",
  },
  {
    q: "Are you a fund?",
    a: "No. We invest our own capital and hold for as long as the business deserves. There is no fund timeline and no exit clock.",
  },
  {
    q: "What deal structures do you offer?",
    a: "Control equity, majority recapitalizations with owner rollover, partner buyouts, and add-on acquisitions.",
  },
  {
    q: "Where do you invest?",
    a: "The Southeast first. National for the right business.",
  },
  {
    q: "What happens if I reach out?",
    a: "A confidential conversation with no obligation. We sign an NDA before you share anything sensitive, and your information is not broadcast to anyone.",
  },
] as const;
