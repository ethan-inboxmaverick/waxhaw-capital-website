import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo/metadata";
import { absoluteUrl, siteConfig } from "@/lib/site/config";
import { getRoute } from "@/lib/site/routes";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink, Eyebrow } from "@/components/ui/primitives";
import { photos } from "@/design/assets";
import { partners } from "@/features/team/content";

const route = getRoute("/")!;

export const metadata: Metadata = createPageMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

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

const principles = [
  { n: "W.1", title: "Rooted in Waxhaw, NC", text: "Local relationships, institutional discipline." },
  { n: "W.2", title: "78+ transactions completed", text: "Proven track record across M&A, real estate, and growth investments." },
  { n: "W.3", title: "Operators, not just investors", text: "We've built, scaled, and exited businesses ourselves. We understand the journey." },
  { n: "W.4", title: "Creative structuring & tax efficiency", text: "Every deal is optimized for tax efficiency, long-term value, and strategic alignment." },
  { n: "W.5", title: "Family office mindset", text: "We think in decades, not quarters, and prioritize relationships over transactions." },
  { n: "W.6", title: "Small-town integrity", text: "Measured, relational, and built on trust. Your success is our success." },
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

      {/* principles */}
      <section className="py-[clamp(70px,10vh,130px)]" aria-labelledby="why-h">
        <div className="wrap">
          <div className="rv border-t border-line-strong pt-5">
            <Eyebrow>Why work with us</Eyebrow>
          </div>
          <h2 id="why-h" className="rv mb-[clamp(40px,6vh,70px)] mt-6 text-[clamp(2.2rem,4.4vw,4rem)] tracking-[-0.015em]">
            Why owners <em className="italic text-gold">choose Waxhaw.</em>
          </h2>
          <div className="grid gap-x-[clamp(40px,6vw,110px)] md:grid-cols-2">
            {principles.map((p) => (
              <div key={p.n} className="rv grid grid-cols-[64px_1fr] gap-5 border-b border-line py-8">
                <span className="pt-1.5 font-label text-[0.78rem] tracking-[0.18em] text-gold">
                  {p.n}
                </span>
                <div>
                  <h3 className="mb-2 text-[1.4rem] tracking-[-0.01em]">{p.title}</h3>
                  <p className="text-[0.95rem] leading-7">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rv mt-[clamp(44px,7vh,70px)] grid items-center gap-8 rounded-[3px] border border-gold/40 bg-[linear-gradient(120deg,rgba(224,160,64,0.07),transparent_60%)] p-[clamp(34px,5vw,56px)] md:grid-cols-[minmax(0,1fr)_auto]">
            <div>
              <h3 className="text-[clamp(1.9rem,3.4vw,3rem)] tracking-[-0.015em]">
                No fund. <em className="italic text-gold">No clock.</em>
              </h3>
              <p className="mt-3 max-w-[44ch] text-[1.05rem]">
                We invest our own capital and hold for as long as the business
                deserves.
              </p>
            </div>
            <ButtonLink href="/process" tone="line" arrow>
              See how it works
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* founders teaser */}
      <section className="border-t border-line bg-ink-2 py-[clamp(70px,10vh,120px)]" aria-labelledby="team-h">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Leadership</Eyebrow>
              <h2 id="team-h" className="rv mt-6 max-w-[22ch] text-[clamp(2rem,4vw,3.4rem)] tracking-[-0.015em]">
                The people you'd actually{" "}
                <em className="italic text-gold">be working with.</em>
              </h2>
            </div>
            <ButtonLink href="/team" tone="line" arrow>
              Meet the founders
            </ButtonLink>
          </div>
          <div className="mt-[clamp(36px,5vh,56px)] grid gap-8 md:grid-cols-2">
            {partners.map((p) => (
              <Link
                key={p.slug}
                href={`/team/${p.slug}`}
                className="rv group grid grid-cols-[112px_1fr] items-center gap-6 rounded-[3px] border border-line bg-ink p-6 no-underline transition-colors hover:border-gold/40"
              >
                <Image
                  src={p.photo.src}
                  alt={p.photo.alt}
                  width={224}
                  height={224}
                  sizes="112px"
                  className="aspect-square rounded-[3px] object-cover object-[center_18%] grayscale transition-all duration-500 group-hover:grayscale-0"
                />
                <div>
                  <h3 className="text-[1.4rem] tracking-[-0.01em] transition-colors group-hover:text-gold-soft">
                    {p.name}
                  </h3>
                  <p className="mt-1 font-label text-[0.68rem] uppercase tracking-[0.22em] text-gold">
                    {p.role}
                  </p>
                  <p className="mt-3 line-clamp-2 text-[0.9rem] leading-6">{p.intro}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* mission pull + CTA */}
      <section className="relative overflow-hidden py-[clamp(90px,13vh,160px)] text-center" aria-labelledby="close-h">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[50%] left-1/2 h-[80vw] w-[80vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(224,160,64,0.09),transparent_60%)]"
        />
        <div className="wrap relative">
          <p className="rv mx-auto max-w-[26ch] font-display text-[clamp(1.7rem,3.6vw,3rem)] font-medium italic leading-[1.35] text-gold">
            "Capital is a tool. Structure is a strategy. Growth is the outcome."
          </p>
          <h2 id="close-h" className="rv mx-auto mt-[clamp(36px,6vh,56px)] max-w-[22ch] text-[clamp(2rem,4.2vw,3.6rem)] tracking-[-0.015em]">
            Ready when you are.
          </h2>
          <p className="rv mx-auto mt-5 max-w-[52ch]">
            A confidential conversation costs nothing. We sign an NDA before
            you share anything sensitive.
          </p>
          <div className="rv mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/contact" arrow>
              Start a conversation
            </ButtonLink>
            <ButtonLink href="/process" tone="line">
              See the process first
            </ButtonLink>
          </div>
        </div>
      </section>

      <JsonLd value={orgJsonLd} />
    </>
  );
}
