import Link from "next/link";
import { siteConfig } from "@/lib/site/config";
import { footerNav } from "@/lib/site/navigation";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  return (
    <footer className="border-t border-line pt-[clamp(50px,8vh,80px)]">
      <div className="wrap">
        <div className="mb-[clamp(40px,6vh,60px)] flex flex-wrap items-start justify-between gap-10">
          <Logo />
          <p className="max-w-[36ch] text-[0.9rem] leading-7 text-tx-faint">
            {siteConfig.tagline}
          </p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-label text-[0.75rem] uppercase tracking-[0.16em] text-tx-dim transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="max-w-[86ch] border-t border-line py-6 text-[0.78rem] leading-7 text-tx-faint">
          {siteConfig.disclosure}{" "}
          <Link href="/disclosures" className="text-gold underline-offset-4 hover:underline">
            Read our full disclosures.
          </Link>
        </p>
        <div className="flex flex-wrap justify-between gap-4 border-t border-line py-5 font-label text-[0.72rem] uppercase tracking-[0.14em] text-tx-faint">
          <span>
            © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </span>
          <a href="#top" className="text-gold no-underline">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
