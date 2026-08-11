import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getRoute } from "@/lib/site/routes";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink, Eyebrow, PageHero } from "@/components/ui/primitives";
import {
  criteriaHero,
  faq,
  sectors,
  termSheet,
  whatWeDontDo,
} from "@/features/criteria/content";

const route = getRoute("/criteria")!;

export const metadata: Metadata = createPageMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function CriteriaPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <PageHero
        eyebrow={criteriaHero.eyebrow}
        title={
          <>
            Investment <em className="italic text-gold">criteria.</em>
          </>
        }
        lede={criteriaHero.lede}
        crumbs={
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Criteria", href: "/criteria" },
            ]}
          />
        }
      />

      {/* term sheet + sectors on paper */}
      <section className="on-paper bg-paper py-[clamp(70px,10vh,120px)] text-ink-tx-dim" aria-labelledby="profile-h">
        <div className="wrap">
          <h2 id="profile-h" className="sr-only">
            Acquisition profile
          </h2>

          <div className="rv overflow-hidden rounded-[3px] border border-ink-tx bg-paper">
            <div className="flex items-center justify-between bg-ink-2 px-7 py-4">
              <span className="font-label text-[0.78rem] uppercase tracking-[0.26em] text-tx">
                WCG — Acquisition profile
              </span>
              <span className="font-label text-[0.7rem] tracking-[0.14em] text-gold">
                Waxhaw, NC
              </span>
            </div>
            <dl>
              {termSheet.map((row) => (
                <div
                  key={row.label}
                  className="grid border-t border-line-dark md:grid-cols-[220px_1fr]"
                >
                  <dt className="flex items-center px-7 pt-6 font-label text-[0.75rem] uppercase tracking-[0.2em] text-gold-deep md:border-r md:border-line-dark md:py-6">
                    {row.label}
                  </dt>
                  <dd className="px-7 pb-6 pt-2 text-[1rem] text-ink-tx md:py-6">
                    {row.strong ? (
                      <>
                        <strong className="font-semibold">{row.strong}</strong>{" "}
                        {row.value.slice(row.strong.length).trim()}
                      </>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-[clamp(50px,8vh,90px)]">
            <h3 className="rv mb-8 text-[clamp(1.6rem,2.6vw,2.3rem)] tracking-[-0.01em]">
              Sectors
            </h3>
            <ul className="grid list-none border-l border-t border-line-dark sm:grid-cols-2 lg:grid-cols-3">
              {sectors.map((s) => (
                <li
                  key={s.id}
                  className="rv border-b border-r border-line-dark p-7 transition-colors hover:bg-paper-2"
                >
                  <span className="mb-4 block font-label text-[0.7rem] tracking-[0.2em] text-gold-deep">
                    {s.id}
                  </span>
                  <h4 className="mb-2.5 text-[1.22rem] tracking-[-0.01em]">{s.name}</h4>
                  <p className="text-[0.92rem] leading-relaxed">{s.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rv mt-[clamp(40px,6vh,70px)] flex items-start gap-6 rounded-[3px] bg-ink-2 px-8 py-7 text-tx-dim">
            <span aria-hidden="true" className="font-display text-[2rem] italic leading-none text-gold">
              ✕
            </span>
            <p className="text-[1rem] leading-7">
              <strong className="font-semibold text-tx">What we don&apos;t do:</strong>{" "}
              {whatWeDontDo}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[clamp(70px,10vh,120px)]" aria-labelledby="faq-h">
        <div className="wrap">
          <div className="rv mb-[clamp(36px,6vh,60px)] flex items-baseline justify-between gap-6 border-t border-line-strong pt-5">
            <Eyebrow>Questions owners ask</Eyebrow>
          </div>
          <h2 id="faq-h" className="rv mb-10 text-[clamp(2rem,3.8vw,3.2rem)] tracking-[-0.015em]">
            Frequently asked<em className="italic text-gold"> questions.</em>
          </h2>
          <div className="max-w-[860px]">
            {faq.map((item) => (
              <details
                key={item.q}
                className="rv group border-b border-line py-2"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 font-display text-[1.25rem] text-tx transition-colors hover:text-gold-soft [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="font-label text-[1.2rem] text-gold transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-[62ch] pb-6 text-[0.98rem]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-ink-2 py-[clamp(70px,10vh,110px)]" aria-labelledby="cta-h">
        <div className="wrap text-center">
          <h2 id="cta-h" className="rv mx-auto max-w-[22ch] text-[clamp(2rem,4.2vw,3.6rem)] tracking-[-0.015em]">
            Sound like your business, or a client&apos;s?
          </h2>
          <p className="rv mx-auto mt-6 max-w-[52ch]">
            A confidential conversation costs nothing. We sign an NDA before you
            share anything sensitive.
          </p>
          <div className="rv mt-10 flex justify-center gap-4">
            <ButtonLink href="/contact" arrow>
              Submit an opportunity
            </ButtonLink>
            <ButtonLink href="/contact" tone="line">
              Just talk first
            </ButtonLink>
          </div>
        </div>
      </section>

      <JsonLd value={faqJsonLd} />
    </>
  );
}
