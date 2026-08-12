import type { Metadata } from "next";
import Image from "next/image";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site/config";
import { getRoute } from "@/lib/site/routes";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ButtonLink, Eyebrow, PageHero } from "@/components/ui/primitives";
import { photos } from "@/design/assets";

const route = getRoute("/about")!;

export const metadata: Metadata = createPageMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the firm"
        title={
          <>
            Operators first.{" "}
            <em className="italic text-gold">Investors second.</em>
          </>
        }
        lede="Waxhaw Capital Group was founded by two operators who have built, scaled, and sold companies of their own. Not by bankers who studied them from the outside."
        crumbs={
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
            ]}
          />
        }
      />

      <section className="pb-[clamp(70px,10vh,120px)]" aria-labelledby="firm-h">
        <div className="wrap grid items-start gap-[clamp(40px,6vw,100px)] md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <div className="relative md:sticky md:top-[calc(var(--header-h)+30px)]">
            <div className="overflow-hidden rounded-[3px]">
              <Image
                src={photos.foundersAbout.src}
                alt={photos.foundersAbout.alt}
                width={photos.foundersAbout.width}
                height={photos.foundersAbout.height}
                priority
                sizes="(max-width: 960px) 100vw, 45vw"
                className="aspect-[4/4.6] w-full scale-[1.03] object-cover object-[center_20%] grayscale transition-all duration-700 hover:scale-100 hover:grayscale-0"
              />
            </div>
            <span className="absolute bottom-0 left-0 bg-ink pr-5 pt-3 font-label text-[0.7rem] uppercase tracking-[0.22em] text-gold">
              Waxhaw, NC
            </span>
          </div>
          <div>
            <h2 id="firm-h" className="sr-only">
              The firm
            </h2>
            <p className="rv mb-6 max-w-[58ch] text-[clamp(1.05rem,1.4vw,1.22rem)] leading-8">
              We invest in and acquire lower-middle-market businesses that
              provide something essential and get paid for it: services,
              healthcare, veterinary, manufacturing, and distribution,
              typically generating{" "}
              <strong className="font-semibold text-tx">$1M–$5M in EBITDA</strong>.
              We'll look below that range in a fast-growing category, and above
              it when the business and the structure are right.
            </p>
            <p className="rv mb-6 max-w-[58ch] text-[1rem] leading-8">
              What we bring isn't just capital. It's the operating experience
              to know which add-backs hold up, which crews actually drive
              margin, which systems break at scale, and what a business is
              worth to the next buyer three years out.
            </p>
            <p className="rv max-w-[58ch] border-l-2 border-gold py-1 pl-6 font-display text-[1.2rem] italic leading-[1.55] text-tx">
              Our roots in Waxhaw reflect how we work: measured growth,
              disciplined execution, and integrity in every transaction.
            </p>
            <div className="rv mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] leading-none text-tx">
                    {stat.value.replace(/\+$/, "")}
                    <span className="text-gold">+</span>
                  </div>
                  <div className="mt-2 font-label text-[0.65rem] uppercase tracking-[0.16em] text-tx-faint">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* mission */}
      <section className="relative overflow-hidden border-t border-line bg-ink-2 py-[clamp(80px,12vh,140px)] text-center" aria-labelledby="mission-h">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[40%] left-1/2 h-[80vw] w-[80vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(224,160,64,0.1),transparent_60%)]"
        />
        <div className="wrap relative mx-auto max-w-[900px]">
          <div className="flex justify-center">
            <Eyebrow>Our mission</Eyebrow>
          </div>
          <h2 id="mission-h" className="rv mt-8 text-[clamp(2.4rem,5vw,4.4rem)] tracking-[-0.02em]">
            Built for the <em className="italic text-gold">long run.</em>
          </h2>
          <p className="rv mx-auto mt-8 max-w-[64ch] text-[1.05rem]">
            Our mission is simple: to serve as a trusted partner for business
            owners, investors, and families navigating complex financial
            decisions with integrity, sophistication, and a long-term
            perspective.
          </p>
          <p className="rv mx-auto mt-5 max-w-[64ch] text-[1.05rem]">
            We believe that great outcomes are built on trust, transparency,
            and operational excellence. Whether we're advising on an M&amp;A
            transaction, sourcing an off-market real estate deal, or investing
            in a growing business, we bring the same commitment to every
            engagement: institutional-grade execution with a family office
            mindset.
          </p>
          <p className="rv mx-auto my-[clamp(36px,6vh,56px)] max-w-[24ch] font-display text-[clamp(1.5rem,3vw,2.4rem)] font-medium italic leading-[1.35] text-gold">
            "Capital is a tool. Structure is a strategy. Growth is the outcome."
          </p>
          <p className="rv mx-auto max-w-[60ch] text-[1.08rem] text-tx">
            At Waxhaw Capital Group, we don't just move money. We build lasting
            value for the people and businesses we serve.
          </p>
        </div>
      </section>

      <section className="py-[clamp(60px,9vh,100px)]" aria-labelledby="about-cta">
        <div className="wrap flex flex-wrap items-center justify-between gap-8">
          <h2 id="about-cta" className="max-w-[24ch] text-[clamp(1.7rem,3.2vw,2.6rem)] tracking-[-0.015em]">
            Meet the people behind the firm.
          </h2>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/team" arrow>
              The founders
            </ButtonLink>
            <ButtonLink href="/criteria" tone="line">
              What we look for
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
