import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo/metadata";
import { absoluteUrl, siteConfig } from "@/lib/site/config";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/primitives";
import { getPartner, partners } from "@/features/team/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return partners.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const partner = getPartner(slug);
  if (!partner) return {};
  return createPageMetadata({
    title: partner.seoTitle,
    description: partner.seoDescription,
    path: `/team/${partner.slug}`,
  });
}

export default async function PartnerPage({ params }: PageProps) {
  const { slug } = await params;
  const partner = getPartner(slug);
  if (!partner) notFound();

  const other = partners.find((p) => p.slug !== partner.slug)!;

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: partner.name,
    jobTitle: partner.role,
    url: absoluteUrl(`/team/${partner.slug}`),
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: absoluteUrl("/"),
    },
    image: absoluteUrl(partner.photo.src),
    description: partner.seoDescription,
  };

  return (
    <>
      <header className="wrap pt-[calc(var(--header-h)+clamp(48px,9vh,110px))] pb-[clamp(40px,7vh,80px)]">
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Team", href: "/team" },
              { label: partner.name, href: `/team/${partner.slug}` },
            ]}
          />
        </div>
        <div className="grid items-start gap-[clamp(36px,6vw,100px)] md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          <div className="relative md:sticky md:top-[calc(var(--header-h)+30px)]">
            <div className="overflow-hidden rounded-[3px]">
              <Image
                src={partner.photo.src}
                alt={partner.photo.alt}
                width={partner.photo.width}
                height={partner.photo.height}
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="aspect-[4/4.4] w-full scale-[1.03] object-cover object-[center_18%] grayscale transition-all duration-700 hover:scale-100 hover:grayscale-0"
              />
            </div>
            <span className="absolute bottom-0 left-0 bg-ink pr-5 pt-3 font-label text-[0.7rem] uppercase tracking-[0.22em] text-gold">
              {partner.role}
            </span>
          </div>
          <div>
            <p className="eyebrow">Leadership</p>
            <h1 className="mt-6 text-[clamp(2.6rem,5.6vw,5rem)] tracking-[-0.02em]">
              {partner.name}
              <span className="text-gold">.</span>
            </h1>
            <p className="mt-8 max-w-[58ch] font-display text-[clamp(1.2rem,1.8vw,1.5rem)] italic leading-[1.5] text-tx">
              {partner.intro}
            </p>
            <div className="mt-8">
              {partner.paragraphs.map((p) => (
                <p key={p.slice(0, 32)} className="rv mb-5 max-w-[62ch] text-[1rem] leading-8">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {partner.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-gold/35 px-4 py-1.5 font-label text-[0.7rem] uppercase tracking-[0.12em] text-gold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="border-t border-line bg-ink-2 py-[clamp(60px,9vh,100px)]" aria-labelledby="cta-h">
        <div className="wrap flex flex-wrap items-center justify-between gap-8">
          <div>
            <h2 id="cta-h" className="max-w-[26ch] text-[clamp(1.7rem,3.2vw,2.6rem)] tracking-[-0.015em]">
              Talk to {partner.name.split(" ")[0]} about your business.
            </h2>
            <p className="mt-3 max-w-[50ch]">
              Confidential, no obligation. We sign an NDA before you share
              anything sensitive.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <ButtonLink href="/contact" arrow>
              Start a conversation
            </ButtonLink>
            <Link
              href={`/team/${other.slug}`}
              className="font-display text-[1.1rem] text-tx no-underline transition-colors hover:text-gold"
            >
              Meet {other.name.split(" ")[0]} <span aria-hidden="true" className="text-gold">→</span>
            </Link>
          </div>
        </div>
      </section>

      <JsonLd value={personJsonLd} />
    </>
  );
}
