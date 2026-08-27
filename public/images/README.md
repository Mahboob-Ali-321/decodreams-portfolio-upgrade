# public/images

Decodreams' own photography, committed to the repository so the deployed site
never depends on an external image host.

- Project photographs live in `public/images/projects/`.
- Reference them from `src/lib/projects.ts` and `src/lib/images.ts` as absolute
  public paths: `/images/projects/living-room-01.jpg`.
- Filenames are lowercase-with-hyphens. Linux (and Vercel) is case-sensitive.

Suggested widths before upload — `next/image` resizes down, never up:

| Where | Width |
| --- | --- |
| Hero | ~2400px |
| Portfolio cards and lightbox | 1600–1800px |
| Studio portrait | ~1400px |
