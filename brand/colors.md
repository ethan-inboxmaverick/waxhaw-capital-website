# Waxhaw Capital Group — Color System & Contrast Table

Computed WCAG 2.x contrast ratios for every text/background pairing
used on the site. AA requires 4.5:1 for normal text, 3:1 for large
text (18pt+/14pt bold). All pairings below pass AA for their use.

| Pairing | Tokens | Ratio | Result |
|---|---|---|---|
| Body text on page | `--tx-dim #a6adba` | 8.83:1 | PASS AA |
| Headline text on page | `--tx #e9ecf2` | 16.83:1 | PASS AA |
| Faint labels on page | `--tx-faint #7e8694` | 5.43:1 | PASS AA |
| Gold accent on page | `--gold #e0a040` | 8.79:1 | PASS AA |
| Gold on raised dark | `--gold on --ink-2` | 8.47:1 | PASS AA |
| Body on raised dark | `--tx-dim on --ink-2` | 8.50:1 | PASS AA |
| Ink text on gold button | `--ink on --gold` | 8.79:1 | PASS AA |
| Headline on paper | `--ink-tx on --paper` | 14.22:1 | PASS AA |
| Body on paper | `--ink-tx-dim on --paper` | 6.46:1 | PASS AA |
| Deep gold on paper | `--gold-deep on --paper` | 5.11:1 | PASS AA |
| Deep gold on paper hover | `--gold-deep on --paper-2` | 4.67:1 | PASS AA |
| Paper text on ink button hover | `--paper on --ink-2` | 16.56:1 | PASS AA |

## Rules

- Gold `#e0a040` is a dark-background accent only. On light (paper)
  surfaces, text uses `--gold-deep #8a5a10`.
- Buttons use ink text on gold, never white on gold (white on gold fails
  AA at 2.2:1).
- `--tx-faint` is reserved for large mono labels (uppercase, tracked); it
  passes AA at its rendered sizes but must not be used for body copy.
- No raw hex values in components; consume tokens via the Tailwind theme.

