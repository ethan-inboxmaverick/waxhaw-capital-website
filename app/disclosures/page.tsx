import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getRoute } from "@/lib/site/routes";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ButtonLink, LoudPlaceholder, PageHero } from "@/components/ui/primitives";

const route = getRoute("/disclosures")!;

export const metadata: Metadata = createPageMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
  noindex: true, // placeholder page; flips to indexable when built
});

export default function PlaceholderPage() {
  return (
    <>
      <PageHero
        eyebrow="In progress"
        title={route.title}
        lede={route.description}
        crumbs={
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: route.title, href: route.path },
            ]}
          />
        }
      />
      <div className="wrap pb-[clamp(80px,12vh,150px)]">
        <LoudPlaceholder>
          This page is being built as part of the site upgrade and is not
          final. Content will be added in an upcoming increment.
        </LoudPlaceholder>
        <div className="mt-10 flex gap-4">
          <ButtonLink href="/criteria" arrow>Investment criteria</ButtonLink>
          <ButtonLink href="/" tone="line">Back to home</ButtonLink>
        </div>
      </div>
    </>
  );
}
