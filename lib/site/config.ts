/**
 * Single source of truth for business facts. Every visible fact on the
 * site must come from here or from a content record — never hardcoded
 * in JSX. Values marked TODO are waiting on the client and must render
 * as loud placeholders, never invented.
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://waxhawcapital.com";

export const siteConfig = {
  name: "Waxhaw Capital Group",
  shortName: "WCG",
  origin: new URL(SITE_URL),
  tagline: "Operator-led investment firm in Waxhaw, North Carolina.",
  description:
    "Waxhaw Capital Group is an operator-led investment firm in Waxhaw, North Carolina. We acquire, invest in, and advise lower-middle-market companies with $1M to $5M EBITDA across services, healthcare, manufacturing, and distribution.",
  contact: {
    email: "david@waxhawcapital.com",
    phone: null as string | null, // TODO: real number from client; no tel: links until provided
    location: "Waxhaw, North Carolina",
  },
  stats: [
    // Source: WCG_Website_Copy_Revisions (client-approved). Substantiation
    // breakdown is on the waiting-on-client list before launch.
    { value: "78+", label: "Transactions completed" },
    { value: "$200M+", label: "Transaction value" },
    { value: "20+", label: "Years combined experience" },
  ],
  disclosure:
    "Waxhaw Capital Group acts as both an advisor and a principal. Where we have or may acquire an interest in a transaction, that role is disclosed in writing before an engagement begins.",
  copyrightYear: 2026,
} as const;

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.origin).toString();
}
