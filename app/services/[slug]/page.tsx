import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo/metadata";
import { absoluteUrl, siteConfig } from "@/lib/site/config";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink, PageHero } from "@/components/ui/primitives";
import { getService, services } from "@/features/services/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createPageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.seoDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: absoluteUrl("/"),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <PageHero
        eyebrow={`What we do / ${service.index}`}
        title={
          <>
            {service.name}
            <span className="text-gold">.</span>
          </>
        }
        lede={service.sub}
        crumbs={
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.name, href: `/services/${service.slug}` },
            ]}
          />
        }
      />

      <section className="pb-[clamp(60px,9vh,110px)]" aria-label={`About ${service.name}`}>
        <div className="wrap grid gap-[clamp(30px,5vw,90px)] md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div>
            {service.paragraphs.map((p) => (
              <p key={p.slice(0, 32)} className="rv mb-6 max-w-[62ch] text-[clamp(1.05rem,1.4vw,1.22rem)] leading-8">
                {p}
              </p>
            ))}
            {service.note ? (
              <div className="rv mt-10 max-w-[62ch] border-l-2 border-gold py-1 pl-6">
                <p className="font-display text-[1.15rem] text-tx">{service.note.title}.</p>
                <p className="mt-2 text-[0.98rem]">{service.note.body}</p>
              </div>
            ) : null}
          </div>
          <aside className="rv h-fit rounded-[3px] border border-line-strong bg-ink-2 p-8 md:sticky md:top-[calc(var(--header-h)+30px)]">
            <h2 className="mb-6 font-label text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-gold">
              What this covers
            </h2>
            <ul className="list-none">
              {service.covers.map((c) => (
                <li key={c} className="flex gap-4 border-b border-line py-3.5 text-[0.96rem] last:border-b-0">
                  <span aria-hidden="true" className="mt-[9px] h-2 w-2 flex-none rounded-full bg-gold" />
                  {c}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-t border-line py-[clamp(60px,9vh,110px)]" aria-labelledby="faq-h">
        <div className="wrap">
          <h2 id="faq-h" className="rv mb-10 text-[clamp(1.9rem,3.4vw,2.9rem)] tracking-[-0.015em]">
            Questions owners <em className="italic text-gold">actually ask.</em>
          </h2>
          <div className="max-w-[860px]">
            {service.faq.map((item) => (
              <details key={item.q} className="rv group border-b border-line py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 font-display text-[1.22rem] text-tx transition-colors hover:text-gold-soft [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span aria-hidden="true" className="font-label text-[1.2rem] text-gold transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-[62ch] pb-6 text-[0.98rem]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink-2 py-[clamp(60px,9vh,100px)]" aria-labelledby="next-h">
        <div className="wrap">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <h2 id="next-h" className="max-w-[24ch] text-[clamp(1.7rem,3.2vw,2.6rem)] tracking-[-0.015em]">
              See if your business fits, or just talk it through.
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
          <nav aria-label="Other services" className="mt-[clamp(40px,6vh,60px)] border-t border-line pt-6">
            <span className="font-label text-[0.72rem] uppercase tracking-[0.22em] text-tx-faint">
              Also from WCG
            </span>
            <div className="mt-3 flex flex-wrap gap-x-10 gap-y-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/services/${o.slug}`}
                  className="font-display text-[1.15rem] text-tx no-underline transition-colors hover:text-gold"
                >
                  {o.name} <span aria-hidden="true" className="text-gold">→</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </section>

      <JsonLd value={serviceJsonLd} />
      <JsonLd value={faqJsonLd} />
    </>
  );
}
