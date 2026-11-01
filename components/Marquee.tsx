import Image from "next/image";
import type { Photo } from "@/lib/photos";

export default function Marquee({ photos }: { photos: Photo[] }) {
  if (photos.length === 0) return null;

  const base = Array.from(
    { length: Math.max(8, photos.length) },
    (_, i) => photos[i % photos.length]
  );
  const items = [...base, ...base];

  return (
    <section
      aria-label="Recent photographs"
      className="overflow-hidden py-16 md:py-24 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
        {items.map((p, i) => (
          <div key={i} className="shrink-0 pr-4" aria-hidden={i >= base.length}>
            <div
              className="relative h-56 w-44 overflow-hidden rounded-2xl md:h-80 md:w-60"
              style={{ rotate: `${i % 2 === 0 ? -2 : 2.5}deg` }}
            >
              <Image
                src={p.src}
                alt={i >= base.length ? "" : p.alt}
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}