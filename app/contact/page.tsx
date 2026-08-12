import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site/config";
import { getRoute } from "@/lib/site/routes";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PageHero } from "@/components/ui/primitives";
import { ContactPaths } from "@/features/contact/ContactPaths";

const route = getRoute("/contact")!;

export const metadata: Metadata = createPageMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

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
        lede="Whether you're an owner thinking about an exit, an intermediary with a business that fits our criteria, or an investor exploring a partnership, pick the path that fits and we'll take it from there."
        crumbs={
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Contact", href: "/contact" },
            ]}
          />
        }
      />

      <section className="pb-[clamp(70px,10vh,120px)]" aria-label="Contact options">
        <div className="wrap grid gap-[clamp(36px,5vw,80px)] lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <ContactPaths />

          <aside>
            {/* confidentiality: the conversion lever, stated plainly */}
            <div className="rounded-[3px] border border-gold/40 bg-[linear-gradient(120deg,rgba(224,160,64,0.07),transparent_60%)] p-7">
              <h2 className="font-label text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-gold">
                Confidentiality, plainly
              </h2>
              <ul className="mt-4 list-none space-y-3 text-[0.94rem] leading-7">
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                  Your message goes directly to {siteConfig.contact.email}. No
                  list, no CRM blast, no third party.
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                  We sign an NDA before you share anything sensitive.
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                  We do not broadcast deals. Your employees, customers, and
                  competitors will not hear about a process from us.
                </li>
              </ul>
            </div>

            <div className="mt-6 border-t border-line">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center justify-between gap-4 border-b border-line py-5 no-underline transition-all hover:pl-2"
              >
                <span className="font-label text-[0.7rem] uppercase tracking-[0.2em] text-tx-faint">
                  Email
                </span>
                <span className="font-display text-[1.1rem] text-tx">
                  {siteConfig.contact.email}
                </span>
              </a>
              <div className="flex items-center justify-between gap-4 border-b border-line py-5">
                <span className="font-label text-[0.7rem] uppercase tracking-[0.2em] text-tx-faint">
                  Location
                </span>
                <span className="font-display text-[1.1rem] text-tx">
                  {siteConfig.contact.location}
                </span>
              </div>
            </div>

            <p className="mt-6 rounded-[3px] border border-dashed border-gold/50 bg-gold/5 p-4 font-label text-[0.72rem] uppercase tracking-[0.14em] leading-6 text-gold">
              Coming before launch: server-delivered forms with tested
              delivery, and a scheduling link to book time directly.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
