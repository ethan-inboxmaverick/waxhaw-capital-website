/**
 * The Waxhaw Capital Group building mark, traced from the client's logo
 * artwork: outline strokes with hollow interiors (never solid fills).
 * strokeWidth is tunable per rendered size so hairlines stay legible
 * (≈68 at header size, heavier for tiny contexts like favicons).
 */
export function LogoMark({
  className,
  strokeWidth = 68,
  stroke = "var(--gold)",
}: {
  className?: string;
  strokeWidth?: number;
  stroke?: string;
}) {
  return (
    <svg
      viewBox="0 0 1024 1536"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="miter"
      strokeMiterlimit={6}
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M 400 733 L 368 700 L 368 252 L 658 48 L 658 1467" />
      <path d="M 478 1467 L 478 445 L 575 352 L 575 1467" />
      <path d="M 516 472 L 575 415" />
      <path d="M 700 512 L 752 566 L 752 1467" />
      <path d="M 232 1467 L 232 862 L 478 690" />
      <path d="M 221 1467 L 763 1467" />
      <path d="M 300 815 L 300 1467" />
      <path d="M 358 774 L 358 1467" />
      <path d="M 416 733 L 416 1467" />
    </svg>
  );
}
