/**
 * Content records for /process. Structure comes from the client's upgrade
 * brief (first call → NDA → information request → indication of value →
 * diligence → close → after). Descriptions deliberately avoid invented
 * specifics such as timelines, percentages, or named third parties; they
 * describe the shape of the process and restate approved commitments
 * (confidentiality, NDA-first, operator involvement, no exit clock).
 */

export interface ProcessStep {
  index: string;
  title: string;
  body: string;
}

export const processSteps: readonly ProcessStep[] = [
  {
    index: "01",
    title: "A first conversation",
    body: "A confidential call with a partner, not an associate. You tell us about the business in whatever detail you're comfortable with; we tell you honestly whether it sounds like a fit for what we buy. No obligation, and nothing to prepare.",
  },
  {
    index: "02",
    title: "NDA",
    body: "Before you share anything sensitive, we sign a nondisclosure agreement. Your information stays between you and us. We don't broadcast deals, and we understand that employees, customers, and competitors must not learn a sale is being considered.",
  },
  {
    index: "03",
    title: "Information request",
    body: "A focused list: financials, customer and revenue mix, team structure, and the operational basics. We ask for what we need to form a view, not a data room built to exhaust you.",
  },
  {
    index: "04",
    title: "Indication of value",
    body: "We tell you what we believe the business is worth to us and how we would structure a transaction, in writing and in plain language. If our number or structure doesn't work for you, you'll hear that respectfully, and quickly.",
  },
  {
    index: "05",
    title: "Diligence",
    body: "Confirmatory work on the things that matter: the numbers, the contracts, the people, the equipment. Because we've operated businesses like yours, diligence is led by people who know which questions matter and which are noise.",
  },
  {
    index: "06",
    title: "Close",
    body: "Documents, funds, and a plan for the first day after. Structure agreed earlier is what shows up in the documents; we don't re-trade at the closing table.",
  },
  {
    index: "07",
    title: "What life looks like after",
    body: "That depends on the structure you chose. Some owners exit fully; many roll equity and stay involved in the growth. Either way, we hold with no exit clock, and the standing commitments made to your team are commitments we keep.",
  },
] as const;
