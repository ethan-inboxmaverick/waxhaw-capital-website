/**
 * Typed registry of approved images, with provenance and alt text.
 * All four photos were supplied by the client (project files, Aug 2026)
 * and verified against founder identifications confirmed by the client:
 * David Dygowski is the blond man in the white shirt; Aaron Caddel wears
 * the Touchstone Electric cap and jacket. No stock photography.
 */
export const photos = {
  foundersHero: {
    src: "/images/hero-crop.jpg",
    width: 970,
    height: 683,
    alt: "Waxhaw Capital Group founders David Dygowski and Aaron Caddel outdoors among pine trees in North Carolina",
  },
  foundersAbout: {
    src: "/images/about-duo.jpg",
    width: 1024,
    height: 683,
    alt: "David Dygowski and Aaron Caddel, founders of Waxhaw Capital Group, standing together outdoors",
  },
  david: {
    src: "/images/david.jpg",
    width: 1024,
    height: 683,
    alt: "David Dygowski, Managing Partner of Waxhaw Capital Group",
  },
  aaron: {
    src: "/images/aaron.jpg",
    width: 1024,
    height: 683,
    alt: "Aaron Caddel, Managing Partner of Waxhaw Capital Group",
  },
} as const;
