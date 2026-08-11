import Link from "next/link";
import type { ReactNode } from "react";

/* ---------- Eyebrow ---------- */

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

/* ---------- ButtonLink ---------- */

type ButtonTone = "solid" | "line" | "ink";

const buttonBase =
  "inline-flex items-center gap-3 rounded-[2px] border px-8 py-[18px] font-label text-[0.85rem] font-semibold uppercase tracking-[0.14em] no-underline transition-colors duration-300";

const buttonTones: Record<ButtonTone, string> = {
  solid: "border-gold bg-gold text-ink hover:border-gold-soft hover:bg-gold-soft",
  line: "border-gold bg-transparent text-gold hover:bg-gold/10",
  ink: "border-ink-2 bg-transparent text-ink-tx hover:bg-ink-2 hover:text-paper",
};

export function ButtonLink({
  href,
  tone = "solid",
  children,
  arrow = false,
}: {
  href: string;
  tone?: ButtonTone;
  children: ReactNode;
  arrow?: boolean;
}) {
  return (
    <Link href={href} className={`${buttonBase} ${buttonTones[tone]} group`}>
      {children}
      {arrow ? (
        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      ) : null}
    </Link>
  );
}

/* ---------- PageHero ---------- */

export function PageHero({
  eyebrow,
  title,
  lede,
  crumbs,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  crumbs?: ReactNode;
}) {
  return (
    <header className="wrap pt-[calc(var(--header-h)+clamp(48px,9vh,110px))] pb-[clamp(40px,7vh,80px)]">
      {crumbs ? <div className="mb-8">{crumbs}</div> : null}
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-6 max-w-[16ch] text-[clamp(2.8rem,6.5vw,5.8rem)] tracking-[-0.02em]">
        {title}
      </h1>
      {lede ? (
        <p className="mt-8 max-w-[58ch] text-[clamp(1.02rem,1.35vw,1.2rem)]">{lede}</p>
      ) : null}
    </header>
  );
}

/* ---------- Loud placeholder (for unbuilt pages / missing facts) ---------- */

export function LoudPlaceholder({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[3px] border border-dashed border-gold/60 bg-gold/5 p-8 font-label text-[0.85rem] uppercase tracking-[0.14em] text-gold">
      {children}
    </div>
  );
}
