import Image from "next/image";
import Reveal from "@/components/Reveal";
import { getPhotos } from "@/lib/pexels";


export default async function GalleryPage() {
  const photos = await getPhotos();
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-16">
      <Reveal>
        <h1 className="font-display text-5xl md:text-7xl">Gallery</h1>
      </Reveal>

      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((p, i) => (
          <div
            key={p.src}
            className="group relative mb-4 break-inside-avoid overflow-hidden rounded-lg"
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={p.width}
              height={p.height}
              priority={i < 3}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent p-4 transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-xs uppercase tracking-widest text-accent">
                {p.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}