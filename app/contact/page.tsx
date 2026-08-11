import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site/config";
import { getRoute } from "@/lib/site/routes";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { LoudPlaceholder, PageHero } from "@/components/ui/primitives";

const route = getRoute("/contact")!;

export const metadata: Metadata = createPageMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
  noindex: true, // interim page; flips to indexable when the split forms ship
});

/**
 * Interim contact page: real reachable paths only. The split intake forms
 * (owner / intermediary / investor) with tested delivery arrive in a later
 * increment; until then email is the honest, working channel.
 */
export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={
          <>
            Let&apos;s start a <em className="italic text-gold">conversation.</em>
          </>
        }
        lede="If you're an owner thinking about an exit, an intermediary with a business that fits our criteria, or an investor exploring a partnership, we'd like to hear from you. Conversations are confidential and carry no obligation. We sign an NDA before you share anything sensitive."
        crumbs={
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Contact", href: "/contact" },
            ]}
          />
        }
      />
      <div className="wrap pb-[clamp(80px,12vh,150px)]">
        <div className="max-w-[760px] border-t border-line">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center justify-between gap-5 border-b border-line py-6 no-underline transition-all hover:pl-2.5"
          >
            <span className="font-label text-[0.74rem] uppercase tracking-[0.22em] text-tx-faint">
              Email
            </span>
            <span className="font-display text-[clamp(1.1rem,2vw,1.5rem)] text-tx">
              {siteConfig.contact.email}
            </span>
          </a>
          <div className="flex items-center justify-between gap-5 border-b border-line py-6">
            <span className="font-label text-[0.74rem] uppercase tracking-[0.22em] text-tx-faint">
              Location
            </span>
            <span className="font-display text-[clamp(1.1rem,2vw,1.5rem)] text-tx">
              {siteConfig.contact.location}
            </span>
          </div>
        </div>
        <div className="mt-12 max-w-[760px]">
          <LoudPlaceholder>
            Coming in a later increment: separate intake paths for owners,
            intermediaries, and investors, with a tested submission form and a
            scheduling link.
          </LoudPlaceholder>
        </div>
      </div>
    </>
  );
}
