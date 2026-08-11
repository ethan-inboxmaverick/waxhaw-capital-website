"use client";

import { useEffect } from "react";

/**
 * Progressive scroll-reveal activator. Content is fully visible without
 * JavaScript and under prefers-reduced-motion (see globals.css); this
 * component only adds the entrance transition when both are available.
 * Render once per page tree; it observes every `.rv` element.
 */
export function RevealActivator() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = document.querySelectorAll<HTMLElement>(".rv");
    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
