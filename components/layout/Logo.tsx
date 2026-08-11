import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" aria-label="Waxhaw Capital Group, home" className="z-[1001] flex items-center gap-3 no-underline">
      <svg viewBox="0 0 44 52" aria-hidden="true" focusable="false" className="h-9 w-[30px]">
        <g fill="var(--gold)">
          <path d="M14 14 L30 4 L30 24 L14 24 Z" />
          <path d="M14 26 L30 26 L30 50 L14 50 Z" />
          <path d="M6 32 L12 27 L12 50 L6 50 Z" />
          <path d="M32 20 L38 25 L38 50 L32 50 Z" />
        </g>
      </svg>
      <span className="leading-none">
        <span className="font-display text-[1.22rem] font-medium tracking-[0.06em] text-tx">
          WAXHAW
        </span>
        <span className="mt-1 block font-label text-[0.55rem] uppercase tracking-[0.4em] text-gold">
          Capital Group
        </span>
      </span>
    </Link>
  );
}
