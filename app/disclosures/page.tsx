import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site/config";
import { getRoute } from "@/lib/site/routes";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { LoudPlaceholder, PageHero } from "@/components/ui/primitives";

const route = getRoute("/disclosures")!;

export const metadata: Metadata = createPageMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

/**
 * Draft disclosures assembled from the approved copy-revisions compliance
 * section. Flagged for securities counsel review before launch; the
 * pending-review notice below must not be removed until counsel signs off.
 */
export default function DisclosuresPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Disclosures<span className="text-gold">.</span>
          </>
        }
        crumbs={
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Disclosures", href: "/disclosures" },
            ]}
          />
        }
      />
      <section className="pb-[clamp(80px,12vh,150px)]" aria-label="Disclosures">
        <div className="wrap max-w-[800px]">
          <div className="mb-10">
            <LoudPlaceholder>
              Draft — pending review by securities counsel before launch.
            </LoudPlaceholder>
          </div>

          <div className="space-y-8 text-[0.98rem] leading-8">
            <div>
              <h2 className="mb-3 text-[1.35rem] tracking-[-0.01em]">Advisor and principal</h2>
              <p>{siteConfig.disclosure}</p>
            </div>

            <div>
              <h2 className="mb-3 text-[1.35rem] tracking-[-0.01em]">No offer or solicitation</h2>
              <p>
                Nothing on this website is an offer to sell, or a solicitation
                of an offer to buy, any security. Nothing on this website is
                investment, legal, accounting, or tax advice.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-[1.35rem] tracking-[-0.01em]">No performance representations</h2>
              <p>
                References to prior transactions and operating experience
                describe history, not a promise of future results. Every
                business and every transaction is different.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-[1.35rem] tracking-[-0.01em]">Tax and legal matters</h2>
              <p>
                Transaction and real estate structures, including 1031
                exchanges, opportunity zone investments, and cost segregation
                strategies, have significant tax and legal consequences. We
                work alongside clients&apos; own tax and legal advisors;
                nothing we publish or discuss replaces their advice.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-[1.35rem] tracking-[-0.01em]">Confidential submissions</h2>
              <p>
                Information you send us is read by the firm&apos;s principals
                and is not broadcast or shared with third parties in the
                ordinary course. Where an engagement proceeds, confidentiality
                is governed by a written NDA.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
