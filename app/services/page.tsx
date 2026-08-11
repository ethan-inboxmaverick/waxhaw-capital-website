import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getRoute } from "@/lib/site/routes";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ButtonLink, PageHero } from "@/components/ui/primitives";
import { services } from "@/features/services/content";

const route = getRoute("/services")!;

export const metadata: Metadata = createPageMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={
          <>
            Three disciplines.{" "}
            <em className="italic text-gold">One operating mindset.</em>
          </>
        }
        lede="Each service line is run by people who have built, scaled, and sold companies of their own. That operating experience shapes how we invest, how we advise, and how we source."
        crumbs={
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
            ]}
          />
        }
      />

      <section className="pb-[clamp(80px,12vh,150px)]" aria-label="Service lines">
        <div className="wrap">
          <div className="border-t border-line-strong">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rv group grid gap-5 border-b border-line py-[clamp(36px,5.5vh,58px)] no-underline transition-colors hover:bg-gold/[0.025] md:grid-cols-[110px_minmax(0,1.05fr)_minmax(0,1.4fr)] md:gap-[clamp(20px,3.5vw,60px)]"
              >
                <span className="pt-3 font-label text-[0.85rem] tracking-[0.2em] text-gold">
                  / {s.index}
                </span>
                <div>
                  <h2 className="text-[clamp(1.8rem,3.2vw,2.9rem)] leading-[1.06] tracking-[-0.015em] transition-colors group-hover:text-gold-soft">
                    {s.name}
                  </h2>
                  <span className="mt-4 block font-label text-[0.74rem] uppercase tracking-[0.22em] text-gold">
                    {s.sub}
                  </span>
                </div>
                <div>
                  <p className="max-w-[62ch] text-[1rem]">{s.paragraphs[0]}</p>
                  <span
                    aria-hidden="true"
                    className="mt-5 inline-block font-label text-[0.8rem] uppercase tracking-[0.16em] text-gold"
                  >
                    Full detail →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink-2 py-[clamp(60px,9vh,100px)]" aria-labelledby="svc-cta">
        <div className="wrap flex flex-wrap items-center justify-between gap-8">
          <h2 id="svc-cta" className="max-w-[26ch] text-[clamp(1.7rem,3.2vw,2.6rem)] tracking-[-0.015em]">
            Not sure which conversation you need? Start with either of these.
          </h2>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/criteria" arrow>
              Investment criteria
            </ButtonLink>
            <ButtonLink href="/contact" tone="line">
              Start a conversation
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
