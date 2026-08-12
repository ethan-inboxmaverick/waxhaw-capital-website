import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getRoute } from "@/lib/site/routes";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PageHero } from "@/components/ui/primitives";
import { partners } from "@/features/team/content";

const route = getRoute("/team")!;

export const metadata: Metadata = createPageMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title={
          <>
            Built by operators who know{" "}
            <em className="italic text-gold">the journey from startup to exit.</em>
          </>
        }
        lede="In the lower middle market, a seller is choosing a person, not a firm. These are the two people you would actually be working with."
        crumbs={
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Team", href: "/team" },
            ]}
          />
        }
      />

      <section className="pb-[clamp(80px,12vh,150px)]" aria-label="Partners">
        <div className="wrap grid gap-8 md:grid-cols-2">
          {partners.map((p) => (
            <Link
              key={p.slug}
              href={`/team/${p.slug}`}
              className="rv group overflow-hidden rounded-[3px] border border-line bg-ink-2 no-underline transition-colors hover:border-gold/40"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={p.photo.src}
                  alt={p.photo.alt}
                  width={p.photo.width}
                  height={p.photo.height}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="aspect-[16/11] w-full object-cover object-[center_20%] grayscale transition-all duration-700 group-hover:grayscale-0"
                />
              </div>
              <div className="p-8">
                <h2 className="text-[clamp(1.7rem,2.8vw,2.3rem)] tracking-[-0.015em] transition-colors group-hover:text-gold-soft">
                  {p.name}
                </h2>
                <p className="mt-2 font-label text-[0.74rem] uppercase tracking-[0.24em] text-gold">
                  {p.role}
                </p>
                <p className="mt-5 text-[0.98rem]">{p.intro}</p>
                <span aria-hidden="true" className="mt-6 inline-block font-label text-[0.8rem] uppercase tracking-[0.16em] text-gold">
                  Full profile →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
