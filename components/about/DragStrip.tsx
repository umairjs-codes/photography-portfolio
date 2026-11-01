"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import StoryImage from "@/components/about/StoryImage";
import type { Shot } from "@/lib/story";

export default function DragStrip({ shots }: { shots: Shot[] }) {
  const wrap = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div ref={wrap} className="overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={wrap}
          dragElastic={0.12}
          className="flex w-max cursor-grab gap-4 px-6 active:cursor-grabbing md:gap-6 md:px-16"
        >
          {shots.map((s, i) => (
            <figure
              key={s.title}
              className="relative aspect-[3/4] w-[70vw] shrink-0 overflow-hidden rounded-2xl sm:w-[40vw] md:w-[26vw]"
            >
              <StoryImage src={s.src} alt={s.title} sizes="(min-width: 768px) 26vw, 70vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs text-accent">{String(i + 1).padStart(2, "0")}</p>
                <p className="font-display text-3xl">{s.title}</p>
                <p className="mt-1 text-sm text-neutral-300">{s.caption}</p>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
      <p className="mt-6 px-6 text-xs uppercase tracking-[0.3em] text-neutral-500 md:px-16">
        Drag to explore →
      </p>
    </div>
  );
}