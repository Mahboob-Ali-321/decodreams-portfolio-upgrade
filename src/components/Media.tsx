"use client";

import { useState } from "react";

/**
 * Image with a graceful failure state.
 *
 * Every photograph is local, under /public/images. If a source ever fails to
 * load — a renamed or missing file — this renders a warm material block with
 * the caption instead of a broken image or a white hole in the layout.
 *
 * Always fills its parent, so the parent needs `position: relative` and a size.
 */
export function Media({
  src,
  alt,
  /** Shown inside the fallback block. Defaults to the alt text. */
  label,
  sizes = "100vw",
  priority = false,
  className = "",
  /** object-position for cropped (object-cover) plates. */
  position,
}: {
  src: string;
  alt: string;
  label?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  quality?: number;
  position?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className="absolute inset-0 flex items-end bg-espresso"
        style={{
          backgroundImage:
            "linear-gradient(160deg, rgba(168,129,63,0.28) 0%, rgba(50,40,32,0) 55%), linear-gradient(0deg, rgba(30,25,23,0.6) 0%, rgba(30,25,23,0) 60%)",
        }}
      >
        <span className="p-5 text-eyebrow font-medium uppercase text-brass-lit">
          {label ?? alt}
        </span>
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      sizes={sizes}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : undefined}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
      style={position ? { objectPosition: position } : undefined}
      onError={() => setFailed(true)}
    />
  );
}
