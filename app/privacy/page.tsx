import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site/config";
import { getRoute } from "@/lib/site/routes";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { LoudPlaceholder, PageHero } from "@/components/ui/primitives";

const route = getRoute("/privacy")!;

export const metadata: Metadata = createPageMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
  noindex: true, // draft; flips indexable when counsel-approved
});

/**
 * DRAFT privacy policy describing only what the site actually does today:
 * static pages, no analytics, no cookies set by us, contact via the
 * visitor's own email client. Must be reviewed by counsel and re-reviewed
 * whenever analytics or server forms are added.
 */
export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Privacy policy<span className="text-gold">.</span>
          </>
        }
        crumbs={
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Privacy", href: "/privacy" },
            ]}
          />
        }
      />
      <section className="pb-[clamp(80px,12vh,150px)]" aria-label="Privacy policy">
        <div className="wrap max-w-[800px]">
          <div className="mb-10">
            <LoudPlaceholder>
              Draft — pending review by counsel before launch. Must be updated
              before any analytics or server-delivered forms are enabled.
            </LoudPlaceholder>
          </div>

          <div className="space-y-8 text-[0.98rem] leading-8">
            <div>
              <h2 className="mb-3 text-[1.35rem] tracking-[-0.01em]">What this site collects</h2>
              <p>
                This website is a set of static pages. It does not set cookies
                of its own, does not run analytics or advertising trackers, and
                does not include a server-side contact form. Our hosting
                provider (Vercel) may keep standard server logs, such as IP
                addresses and requested pages, to operate and secure the
                service.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-[1.35rem] tracking-[-0.01em]">When you contact us</h2>
              <p>
                The contact options on this site compose an email in your own
                mail application. What you send arrives in our inbox at{" "}
                {siteConfig.contact.email} and is read by the firm&apos;s
                principals. We use it to respond to you and, where an
                engagement proceeds, under the terms of a written NDA. We do
                not sell your information or share it with third parties in
                the ordinary course.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-[1.35rem] tracking-[-0.01em]">Fonts</h2>
              <p>
                Pages load typefaces from Google Fonts, which involves your
                browser requesting font files from Google&apos;s servers.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-[1.35rem] tracking-[-0.01em]">Questions</h2>
              <p>
                Email {siteConfig.contact.email} with any question about this
                policy or about information you have sent us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
