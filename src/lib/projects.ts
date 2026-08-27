export type Category =
  | "Living Room"
  | "Bedroom"
  | "Full Home"
  | "Commercial";

export interface Project {
  /** Stable slug. Used as the React key and the lightbox anchor. */
  id: string;
  title: string;
  category: Category;
  locality: string;
  year: string;
  /** One line of scope, shown in the lightbox beside the title. */
  scope: string;
  /** A sentence or two about the room. Keep it about materials and decisions. */
  blurb: string;
  /** First image is the grid thumbnail; the rest appear in the lightbox. */
  images: string[];
  /** Grid emphasis. A "wide" project fills two columns; leave unset otherwise. */
  size?: "wide";
  /**
   * object-position for the grid thumbnail only. The thumbnail is cropped to
   * 4:5 or 8:5, so a photograph whose subject sits low or high needs its focal
   * point nudged rather than the file re-cut. The lightbox uses object-contain
   * and never crops.
   */
  focus?: string;
}

/**
 * Decodreams projects.
 *
 * Every image path points at a file committed under /public/images/projects.
 * The gallery, filters and lightbox all read from this array, so adding or
 * removing projects needs no component changes.
 */
export const projects: Project[] = [
  {
    id: "rajendra-nagar-villa",
    title: "Rajendra Nagar Villa",
    category: "Full Home",
    locality: "Rajendra Nagar, Indore",
    year: "2025",
    scope: "Turnkey interiors · 5 BHK villa",
    blurb:
      "A double-height entrance hall taken from shell to handover. The curved stair was kept as the one piece of drama; everything around it — the sculpted seating, the coffered cove lighting, the single stone floor — was held quiet so the volume reads first.",
    images: [
      "/images/projects/villa-lobby-01.jpg",
      "/images/projects/interior-detail-01.jpg",
      "/images/projects/living-room-01.jpg",
    ],
    size: "wide",
    focus: "center 45%",
  },
  {
    id: "limewash-living-room",
    title: "The Limewash Living Room",
    category: "Living Room",
    locality: "Scheme 54, Indore",
    year: "2025",
    scope: "Living and dining · colour texture, POP cove",
    blurb:
      "The client wanted the room to feel older than it is. A layered limewash ceiling rose that hides the light source, low leather seating, and a sculptural floor lamp doing the work a chandelier usually does.",
    images: [
      "/images/projects/living-room-01.jpg",
      "/images/projects/living-room-02.jpg",
      "/images/projects/interior-detail-01.jpg",
    ],
    focus: "center 40%",
  },
  {
    id: "family-lounge-saket",
    title: "Family Lounge",
    category: "Living Room",
    locality: "Saket Nagar, Indore",
    year: "2024",
    scope: "Formal living · panelling, brass work, lighting",
    blurb:
      "A formal sitting room for a family that entertains often. Tufted seating in two tones, a brass-framed feature wall around the mirror, and linear pendant light kept off-centre so the seating plan stays symmetrical without feeling staged.",
    images: [
      "/images/projects/luxury-living-room-01.jpg",
      "/images/projects/living-room-02.jpg",
      "/images/projects/interior-detail-01.jpg",
    ],
    size: "wide",
    focus: "center 55%",
  },
  {
    id: "garden-facing-living",
    title: "Garden-Facing Living",
    category: "Living Room",
    locality: "Scheme 78, Indore",
    year: "2023",
    scope: "Living room · gallery wall, soft seating",
    blurb:
      "A compact west-facing living room for a young couple. A gallery wall of framed botanicals over a deep sectional, a brass arc lamp for the corner that never got daylight, and nothing above knee height on the window side.",
    images: [
      "/images/projects/living-room-02.jpg",
      "/images/projects/living-room-01.jpg",
    ],
    focus: "center 35%",
  },
  {
    id: "panelled-master-suite",
    title: "Panelled Master Suite",
    category: "Bedroom",
    locality: "Nipania, Indore",
    year: "2025",
    scope: "Bedroom and dressing · woodwork, upholstery",
    blurb:
      "A full-height upholstered headboard wall in deep indigo, framed in warm oak with a brass reveal running through it. The lounge chair sits where the afternoon light lands; everything else was pushed flush to keep the floor clear.",
    images: [
      "/images/projects/luxury-bedroom-01.jpg",
      "/images/projects/modern-bedroom-01.jpg",
      "/images/projects/interior-detail-01.jpg",
    ],
    size: "wide",
    focus: "center 50%",
  },
  {
    id: "quiet-bedroom-sukhliya",
    title: "A Quiet Bedroom",
    category: "Bedroom",
    locality: "Sukhliya, Indore",
    year: "2024",
    scope: "Bedroom with study · joinery, track lighting",
    blurb:
      "A bedroom that also had to be an office. A wall-hung desk in charcoal ash on one side, the bed on the other with a rust upholstered headboard, and track lighting so neither half borrows the other's glare.",
    images: [
      "/images/projects/modern-bedroom-01.jpg",
      "/images/projects/compact-bedroom-01.webp",
    ],
    focus: "center 50%",
  },
  {
    id: "compact-flat-palasia",
    title: "Compact Flat",
    category: "Full Home",
    locality: "Palasia, Indore",
    year: "2023",
    scope: "Turnkey interiors · 2 BHK, 820 sq ft",
    blurb:
      "Eight hundred square feet for a couple who both work from home. A desk built into the circulation space, an open frame shelf instead of a partition, and warm wood panelling behind the bed to keep the room from feeling cut up.",
    images: [
      "/images/projects/compact-bedroom-01.webp",
      "/images/projects/modern-bedroom-01.jpg",
      "/images/projects/living-room-02.jpg",
    ],
    focus: "center 50%",
  },
  {
    id: "mk-jewellers-showroom",
    title: "MK Jewellers Showroom",
    category: "Commercial",
    locality: "AB Road, Indore",
    year: "2024",
    scope: "Retail showroom · display joinery, lighting design",
    blurb:
      "A narrow retail shell turned into a long jewellery gallery. Fluted gold columns break the length into bays, display lighting runs at 3000K so metal reads true, and the seating is set back from the counters so a family can wait without crowding a sale.",
    images: [
      "/images/projects/jewellery-showroom-01.jpg",
      "/images/projects/interior-detail-01.jpg",
      "/images/projects/villa-lobby-01.jpg",
    ],
    size: "wide",
    focus: "center 50%",
  },
  {
    id: "foyer-console-nipania",
    title: "Foyer and Console",
    category: "Commercial",
    locality: "Nipania, Indore",
    year: "2025",
    scope: "Entrance lobby · 3D wall panel, stone console",
    blurb:
      "The first three metres of a building, which is all most visitors remember. A hand-carved leaf relief panel backlit from both edges, a single slab console in grey marble, and bronze mirror on the return to widen a tight passage.",
    images: [
      "/images/projects/interior-detail-01.jpg",
      "/images/projects/villa-lobby-01.jpg",
    ],
    focus: "center 45%",
  },
];

export const categories: Array<"All" | Category> = [
  "All",
  "Living Room",
  "Bedroom",
  "Full Home",
  "Commercial",
];
