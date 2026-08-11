import { Eyebrow, ButtonLink } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <div className="wrap flex min-h-svh flex-col items-start justify-center pt-[var(--header-h)]">
      <Eyebrow>Page not found</Eyebrow>
      <h1 className="mt-6 text-[clamp(3rem,9vw,7rem)] tracking-[-0.02em]">
        404<span className="text-gold">.</span>
      </h1>
      <p className="mt-6 max-w-[48ch] text-[1.05rem]">
        The page you are looking for does not exist or has moved. The firm,
        however, is exactly where it has always been: Waxhaw, North Carolina.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <ButtonLink href="/" arrow>
          Back to home
        </ButtonLink>
        <ButtonLink href="/criteria" tone="line">
          Investment criteria
        </ButtonLink>
      </div>
    </div>
  );
}
