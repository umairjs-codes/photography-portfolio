"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Photo } from "@/lib/photos";

export default function FeaturedStrip({ photos }: { photos: Photo[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -travel]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() =>
      setTravel(Math.max(0, el.offsetWidth - window.innerWidth))
    );
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ height: `calc(100svh + ${travel}px)` }}
      className="relative"
    >
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-8 flex w-full max-w-7xl items-end justify-between px-6 md:px-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Selected work</p>
            <h2 className="mt-2 font-display text-4xl md:text-6xl">Featured frames</h2>
          </div>
          <Link
            href="/gallery"
            className="hidden text-sm text-neutral-300 transition-colors hover:text-accent sm:block"
          >
            View all →
          </Link>
        </div>

        <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-5 px-6 md:gap-8 md:px-16">
          {photos.map((p, i) => (
            <figure
              key={p.src}
              className="relative h-[52svh] w-[72vw] shrink-0 overflow-hidden rounded-2xl sm:w-[48vw] md:h-[58svh] md:w-[34vw]"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 768px) 34vw, 72vw"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/70 to-transparent p-5">
                <span className="line-clamp-1 font-display text-xl md:text-2xl">{p.alt}</span>
                <span className="text-sm text-neutral-300">{String(i + 1).padStart(2, "0")}</span>
              </figcaption>
            </figure>
          ))}
        </motion.div>

        <div className="mx-6 mt-8 h-px bg-white/15 md:mx-16">
          <motion.div style={{ scaleX: scrollYProgress }} className="h-full origin-left bg-accent" />
        </div>
      </div>
    </section>
  );
}