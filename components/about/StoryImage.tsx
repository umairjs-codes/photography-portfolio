"use client";

import { useState } from "react";
import Image from "next/image";

export default function StoryImage({
  src,
  alt,
  sizes,
  className = "",
  priority,
}: {
  src?: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950 p-4 text-center text-[11px] uppercase tracking-[0.25em] text-neutral-500">
        {alt}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      draggable={false}
      onError={() => setFailed(true)}
      className={`select-none object-cover ${className}`}
    />
  );
}