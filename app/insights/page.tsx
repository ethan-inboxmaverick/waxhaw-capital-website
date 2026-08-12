import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getRoute } from "@/lib/site/routes";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ButtonLink, LoudPlaceholder, PageHero } from "@/components/ui/primitives";

const route = getRoute("/insights")!;

export const metadata: Metadata = createPageMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
  noindex: true, // flips indexable when the first founder-reviewed article ships
});

/**
 * Insights shell. Articles must be written from the founders' actual
 * operating experience and reviewed by them before publishing (upgrade
 * brief, Part 5) — so none are published yet. The planned topics below
 * come from the brief itself.
 */
const plannedTopics = [
  "What an F-reorganization is and why a rollover seller should care",
  "Add-backs that survive diligence, and the ones that never do",
  "Majority recap vs. full sale: what changes for the owner",
  "What “no fund, no clock” actually means for a seller",
  "How lower-middle-market valuations are really set",
  "Selling to a PE-backed strategic: the view from the other side",
  "Owner rollover equity: the second bite, honestly explained",
  "1031 exchange basics for a business owner sitting on real estate",
] as const;

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Written from the trenches,{" "}
            <em className="italic text-gold">not the sidelines.</em>
          </>
        }
        lede="Articles on selling, structuring, and growing lower-middle-market businesses, written from the founders' operating experience. The first pieces are in the works."
        crumbs={
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/insights" },
            ]}
          />
        }
      />
      <section className="pb-[clamp(80px,12vh,150px)]" aria-label="Planned topics">
        <div className="wrap max-w-[860px]">
          <div className="mb-12">
            <LoudPlaceholder>
              No articles are published yet. Every piece here will be written
              from the founders&apos; real experience and reviewed by them
              before it ships. Planned topics below.
            </LoudPlaceholder>
          </div>
          <ol className="list-none border-t border-line-strong">
            {plannedTopics.map((t, i) => (
              <li key={t} className="rv flex items-baseline gap-6 border-b border-line py-6">
                <span className="font-label text-[0.8rem] tracking-[0.2em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[clamp(1.15rem,2vw,1.5rem)] text-tx">{t}</span>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-wrap gap-4">
            <ButtonLink href="/criteria" arrow>
              Meanwhile: our criteria
            </ButtonLink>
            <ButtonLink href="/process" tone="line">
              How a sale actually works
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
