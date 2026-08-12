/**
 * Single source of truth for navigation labels and destinations.
 */
export interface NavItem {
  label: string;
  href: string;
  index: string; // display index used in the header treatment
}

export const primaryNav: readonly NavItem[] = [
  { label: "About", href: "/about", index: "01" },
  { label: "Criteria", href: "/criteria", index: "02" },
  { label: "Services", href: "/services", index: "03" },
  { label: "Team", href: "/team", index: "04" },
  { label: "Process", href: "/process", index: "05" },
  { label: "Contact", href: "/contact", index: "06" },
] as const;

export const footerNav: readonly { label: string; href: string }[] = [
  { label: "About", href: "/about" },
  { label: "Criteria", href: "/criteria" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Process", href: "/process" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
  { label: "Disclosures", href: "/disclosures" },
  { label: "Privacy", href: "/privacy" },
] as const;

export const headerCta = { label: "Start a conversation", href: "/contact" } as const;
