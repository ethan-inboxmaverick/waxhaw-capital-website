import type { Metadata } from "next";
import Image from "next/image";
import { createPageMetadata } from "@/lib/seo/metadata";
import { absoluteUrl, siteConfig } from "@/lib/site/config";
import { getRoute } from "@/lib/site/routes";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink, Eyebrow } from "@/components/ui/primitives";
import { photos } from "@/design/assets";
import Link from "next/link";

const route = getRoute("/")!;

export const metadata: Metadata = createPageMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

/**
 * Interim homepage: condensed pillars linking to their full pages.
 * Full homepage rebuild is step 7 of the build order.
 */
const pillars = [
  {
    index: "01",
    title: "Growth investments",
    text: "We acquire and invest in lower-middle-market companies with strong fundamentals and room to run: typically $1M–$5M in EBITDA.",
    href: "/services/growth-investments",
  },
  {
    index: "02",
    title: "M&A advisory",
    text: "We advise owners through the full arc of a transaction, led by someone who has sat on the seller's side of the table personally.",
    href: "/services/ma-advisory",
  },
  {
    index: "03",
    title: "Off-market real estate",
    text: "Off-market commercial and residential opportunities, sourced through our network and evaluated alongside your tax and legal advisors.",
    href: "/services/off-market-real-estate",
  },
] as const;

export default function HomePage() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "FinancialService"],
    name: siteConfig.name,
    url: absoluteUrl("/"),
    email: siteConfig.contact.email,
    areaServed: "US-Southeast",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Waxhaw",
      addressRegion: "NC",
      addressCountry: "US",
    },
    description: siteConfig.description,
  };

  return (
    <>
      {/* hero */}
      <section className="relative flex min-h-svh flex-col justify-end overflow-hidden pt-[var(--header-h)]" aria-labelledby="hero-h">
        <div aria-hidden="true" className="absolute inset-y-0 right-0 z-0 hidden w-[60%] md:block">
          <Image
            src={photos.foundersHero.src}
            alt=""
            fill
            priority
            sizes="60vw"
            className="object-cover object-[42%_22%] grayscale contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--ink)_0%,rgba(7,9,14,0.55)_26%,rgba(7,9,14,0.18)_55%,rgba(7,9,14,0.3)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,var(--ink)_3%,rgba(7,9,14,0.15)_40%,rgba(7,9,14,0.5)_100%)]" />
        </div>

        <div className="wrap relative z-[2] pb-[clamp(48px,7vh,90px)]">
          <Eyebrow>Waxhaw, North Carolina. Established by operators.</Eyebrow>
          <h1 id="hero-h" className="mt-8 text-[clamp(3rem,9.5vw,8.5rem)] font-[380] tracking-[-0.015em]">
            Capital<span className="text-gold">.</span>
            <br />
            <em className="italic text-gold">Structure</em>
            <span className="text-gold">.</span>
            <br />
            Growth<span className="text-gold">.</span>
          </h1>
          <div className="mt-[clamp(28px,5vh,52px)] grid items-end gap-8 md:grid-cols-[1.15fr_1fr]">
            <p className="max-w-[56ch] text-[clamp(1.02rem,1.35vw,1.2rem)]">
              <em className="font-display italic text-gold">Rooted in Waxhaw, NC.</em>{" "}
              Waxhaw Capital Group is an operator-led investment firm. We
              acquire, invest in, and advise lower-middle-market companies
              across services, healthcare, manufacturing, and distribution.{" "}
              <strong className="font-semibold text-tx">
                We&apos;ve run the P&amp;Ls we underwrite.
              </strong>{" "}
              That changes how a deal gets structured, and what happens after
              it closes.
            </p>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <ButtonLink href="/criteria" arrow>
                Investment criteria
              </ButtonLink>
              <ButtonLink href="/contact" tone="line">
                Start a conversation
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* mobile founders photo */}
        <div aria-hidden="true" className="relative mt-10 md:hidden">
          <Image
            src={photos.foundersHero.src}
            alt=""
            width={photos.foundersHero.width}
            height={photos.foundersHero.height}
            priority
            sizes="100vw"
            className="aspect-[16/11] w-full object-cover object-[center_18%] grayscale contrast-[1.06]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,var(--ink)_0%,transparent_30%),linear-gradient(180deg,var(--ink)_0%,transparent_26%)]" />
        </div>
      </section>

      {/* stats */}
      <section className="border-t border-line py-[clamp(60px,9vh,110px)]" aria-label="Track record">
        <div className="wrap grid gap-9 sm:grid-cols-3">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="rv border-t border-line-strong pt-7">
              <div className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-none tracking-[-0.02em] text-tx">
                {stat.value.replace(/\+$/, "")}
                <span className="text-gold">+</span>
              </div>
              <div className="mt-3.5 font-label text-[0.78rem] uppercase tracking-[0.2em] text-tx-faint">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* pillars */}
      <section className="py-[clamp(70px,10vh,130px)]" aria-labelledby="pillars-h">
        <div className="wrap">
          <div className="rv border-t border-line-strong pt-5">
            <Eyebrow>What we do</Eyebrow>
          </div>
          <h2 id="pillars-h" className="rv mb-[clamp(40px,6vh,70px)] mt-6 text-[clamp(2.2rem,4.4vw,4rem)] tracking-[-0.015em]">
            Three disciplines.{" "}
            <em className="italic text-gold">One operating mindset.</em>
          </h2>
          <div className="grid gap-px overflow-hidden rounded-[3px] border border-line bg-line md:grid-cols-3">
            {pillars.map((p) => (
              <Link
                key={p.index}
                href={p.href}
                className="rv group bg-ink p-9 no-underline transition-colors hover:bg-ink-2"
              >
                <span className="font-label text-[0.78rem] tracking-[0.2em] text-gold">
                  / {p.index}
                </span>
                <h3 className="mb-3 mt-5 text-[1.5rem] tracking-[-0.01em] transition-colors group-hover:text-gold-soft">
                  {p.title}
                </h3>
                <p className="text-[0.95rem] leading-7">{p.text}</p>
                <span aria-hidden="true" className="mt-6 inline-block font-label text-[0.8rem] uppercase tracking-[0.16em] text-gold">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* criteria teaser */}
      <section className="on-paper bg-paper py-[clamp(70px,10vh,120px)] text-ink-tx-dim" aria-labelledby="crit-h">
        <div className="wrap grid items-center gap-10 md:grid-cols-[1.2fr_auto]">
          <div>
            <Eyebrow>What we look for</Eyebrow>
            <h2 id="crit-h" className="rv mt-6 max-w-[24ch] text-[clamp(2rem,4vw,3.4rem)] tracking-[-0.015em]">
              $1M–$5M EBITDA. Essential businesses.{" "}
              <em className="italic text-gold-deep">No fund, no clock.</em>
            </h2>
            <p className="rv mt-6 max-w-[56ch]">
              Home services and specialty trades, business and consumer
              services, healthcare, veterinary, manufacturing, and
              distribution. We invest our own capital and hold for as long as
              the business deserves.
            </p>
          </div>
          <ButtonLink href="/criteria" tone="ink" arrow>
            Full criteria
          </ButtonLink>
        </div>
      </section>

      <JsonLd value={orgJsonLd} />
    </>
  );
}
