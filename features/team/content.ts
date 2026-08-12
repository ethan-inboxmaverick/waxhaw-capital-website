/**
 * Content records for /team and partner pages.
 * Source: WCG_Website_Copy_Revisions (client-approved bios). House style:
 * no em dashes in body copy. Photos from the typed registry (client-
 * supplied; identities confirmed by the client).
 *
 * Waiting on client before launch: professional headshots; permission to
 * name the Crawl Space Brothers buyer; substantiation notes for the
 * 140-practice figure.
 */
import { photos } from "@/design/assets";

export interface Partner {
  slug: string;
  name: string;
  role: string;
  photo: (typeof photos)[keyof typeof photos];
  seoTitle: string;
  seoDescription: string;
  intro: string;
  paragraphs: readonly string[];
  tags: readonly string[];
}

export const partners: readonly Partner[] = [
  {
    slug: "david-dygowski",
    name: "David Dygowski",
    role: "Managing Partner",
    photo: photos.david,
    seoTitle: "David Dygowski — Managing Partner, Operator & Investor",
    seoDescription:
      "David Dygowski is Managing Partner of Waxhaw Capital Group. Founder of Crawl Space Brothers through its sale to a private-equity-backed acquirer, operator of Touchstone Electric, Hold the Line Fencing, and Solid Ground, and a North Carolina native rooted in Waxhaw.",
    intro:
      "David has built and sold companies in the trades, not just advised on them.",
    paragraphs: [
      "He founded Crawl Space Brothers and grew it from a startup into one of the fastest-growing foundation and crawl space companies in the Southeast before selling to a private-equity-backed strategic acquirer: a transaction he structured as an F-reorganization with rollover equity, and the same structure he now builds for the owners he works with.",
      "He continues to operate Touchstone Electric, Hold the Line Fencing, and Solid Ground Foundation & Crawl Space, and has sourced and structured healthcare deal flow across a multi-state pharmacy and physician practice roll-up spanning more than 140 practices. He is also a direct investor in several early-stage operating companies.",
      "That operating record is the reason WCG underwrites differently. David has met the payroll, run the trucks, and sat on the seller's side of a closing table. He knows which add-backs survive diligence and which ones cost a seller a turn of EBITDA.",
      "A North Carolina native rooted in Waxhaw, he works with owners across the services, healthcare, manufacturing, and distribution economy: the businesses that keep running whether or not the market cooperates.",
    ],
    tags: [
      "Crawl Space Brothers (founded & sold)",
      "Touchstone Electric",
      "Hold the Line Fencing",
      "Solid Ground Foundation & Crawl Space",
      "140+ practice healthcare roll-up",
    ],
  },
  {
    slug: "aaron-caddel",
    name: "Aaron Caddel",
    role: "Managing Partner",
    photo: photos.aaron,
    seoTitle: "Aaron Caddel — Managing Partner, Entrepreneur & Real Estate Investor",
    seoDescription:
      "Aaron Caddel is Managing Partner of Waxhaw Capital Group. Founder, operator, and seller of three companies across the blue-collar trades and hospitality, he leads WCG's off-market real estate sourcing across the Carolinas.",
    intro:
      "Aaron is an entrepreneur and investor who has founded, operated, and exited three companies across the blue-collar trades and hospitality.",
    paragraphs: [
      "He now focuses on real estate, where he sources off-market commercial and residential opportunities and structures tax-efficient acquisitions and dispositions across the Carolinas.",
      "Having built and sold operating businesses himself, Aaron underwrites real estate the way an operator does: around what a property actually produces, not what a pro forma projects. He leads WCG's real estate sourcing and brings the same diligence to the firm's operating investments.",
    ],
    tags: [
      "3× founder, operator & exits",
      "Blue-collar trades & hospitality",
      "Off-market real estate",
      "The Carolinas",
    ],
  },
] as const;

export function getPartner(slug: string): Partner | undefined {
  return partners.find((p) => p.slug === slug);
}
