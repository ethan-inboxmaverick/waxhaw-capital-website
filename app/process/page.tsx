import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getRoute } from "@/lib/site/routes";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ButtonLink, PageHero } from "@/components/ui/primitives";
import { processSteps } from "@/features/process/content";

const route = getRoute("/process")!;

export const metadata: Metadata = createPageMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our process"
        title={
          <>
            What actually happens{" "}
            <em className="italic text-gold">if you reply.</em>
          </>
        }
        lede="The biggest unspoken question a first-time seller has is what happens after that first email. Here is the honest answer, step by step."
        crumbs={
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Process", href: "/process" },
            ]}
          />
        }
      />

      <section className="pb-[clamp(70px,10vh,120px)]" aria-label="Process steps">
        <div className="wrap max-w-[900px]">
          <ol className="list-none border-t border-line-strong">
            {processSteps.map((step) => (
              <li
                key={step.index}
                className="rv grid gap-4 border-b border-line py-[clamp(28px,4.5vh,44px)] md:grid-cols-[90px_240px_1fr] md:gap-8"
              >
                <span className="font-label text-[0.85rem] tracking-[0.2em] text-gold">
                  / {step.index}
                </span>
                <h2 className="text-[1.4rem] leading-[1.2] tracking-[-0.01em]">{step.title}</h2>
                <p className="text-[0.98rem] leading-7">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="rv mt-10 border-l-2 border-gold py-1 pl-6 font-display text-[1.15rem] italic text-tx">
            Confidentiality runs through every step. Your employees, customers,
            and competitors will not learn about a process from us.
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-ink-2 py-[clamp(60px,9vh,100px)]" aria-labelledby="cta-h">
        <div className="wrap flex flex-wrap items-center justify-between gap-8">
          <h2 id="cta-h" className="max-w-[24ch] text-[clamp(1.7rem,3.2vw,2.6rem)] tracking-[-0.015em]">
            Step one costs nothing. Start the conversation.
          </h2>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/contact" arrow>
              Get in touch
            </ButtonLink>
            <ButtonLink href="/criteria" tone="line">
              Check the criteria first
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
