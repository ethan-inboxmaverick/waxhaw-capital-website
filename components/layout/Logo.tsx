import Link from "next/link";
import { LogoMark } from "@/components/layout/LogoMark";

export function Logo() {
  return (
    <Link href="/" aria-label="Waxhaw Capital Group, home" className="z-[1001] flex items-center gap-3 no-underline">
      <LogoMark className="h-11 w-auto" strokeWidth={44} />
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
