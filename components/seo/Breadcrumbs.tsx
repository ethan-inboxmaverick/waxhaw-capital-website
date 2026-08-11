import Link from "next/link";
import { absoluteUrl } from "@/lib/site/config";
import { JsonLd } from "@/components/seo/JsonLd";

export interface Crumb {
  label: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: readonly Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: absoluteUrl(c.href),
    })),
  };

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 font-label text-[0.72rem] uppercase tracking-[0.18em]">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-tx-faint">
                  {c.label}
                </span>
              ) : (
                <>
                  <Link href={c.href} className="text-gold hover:text-gold-soft">
                    {c.label}
                  </Link>
                  <span aria-hidden="true" className="text-tx-faint">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
      <JsonLd value={jsonLd} />
    </nav>
  );
}
