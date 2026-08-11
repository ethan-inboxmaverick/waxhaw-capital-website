"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { headerCta, primaryNav } from "@/lib/site/navigation";
import { Logo } from "@/components/layout/Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] h-[var(--header-h)] border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-line bg-ink/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="wrap flex h-full items-center justify-between gap-5">
        <Logo />

        {/* desktop nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => {
              const current =
                pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`px-4 py-2.5 font-label text-[0.78rem] uppercase tracking-[0.14em] transition-colors ${
                      current ? "text-gold" : "text-tx-dim hover:text-gold"
                    }`}
                  >
                    <span className="mr-1.5 text-[0.65rem] text-gold">{item.index}</span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          href={headerCta.href}
          className="hidden whitespace-nowrap rounded-[2px] bg-gold px-6 py-3 font-label text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-gold-soft lg:inline-block"
        >
          {headerCta.label}
        </Link>

        {/* mobile toggle */}
        <button
          type="button"
          className="-mr-3 p-3 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`my-1.5 block h-0.5 w-6 bg-tx transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`my-1.5 block h-0.5 w-6 bg-tx transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`my-1.5 block h-0.5 w-6 bg-tx transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* mobile nav */}
      <nav
        id="mobile-nav"
        aria-label="Primary"
        className={`fixed inset-0 top-[var(--header-h)] z-[999] bg-ink px-[var(--pad)] pt-8 transition-transform duration-300 lg:hidden ${
          open ? "translate-y-0" : "pointer-events-none -translate-y-[120vh]"
        }`}
      >
        <ul className="flex flex-col gap-1">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-baseline gap-4 py-3 font-display text-[clamp(1.9rem,7vw,2.6rem)] text-tx hover:text-gold"
              >
                <span className="font-label text-[0.8rem] tracking-[0.2em] text-gold">
                  {item.index}
                </span>
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-6">
            <Link
              href={headerCta.href}
              className="inline-block rounded-[2px] bg-gold px-7 py-4 font-label text-[0.85rem] font-semibold uppercase tracking-[0.14em] text-ink"
            >
              {headerCta.label}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
