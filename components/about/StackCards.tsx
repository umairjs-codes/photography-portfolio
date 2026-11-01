"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import StoryImage from "@/components/about/StoryImage";
import type { Shot } from "@/lib/story";

function Card({
  shot,
  i,
  n,
  progress,
}: {
  shot: Shot;
  i: number;
  n: number;
  progress: MotionValue<number>;
}) {
  const scale = useTransform(progress, [i / n, 1], [1, 1 - (n - 1 - i) * 0.05]);

  return (
    <div className={i === n - 1 ? "h-[75svh]" : "h-[90svh]"}>
      <motion.article
        style={{ scale, top: `calc(5.5rem + ${i * 1.25}rem)` }}
        className="sticky h-[68svh] origin-top overflow-hidden rounded-3xl"
      >
       <div className="absolute inset-0">
  <div className="absolute inset-0">
  <StoryImage
    src={shot.src}
    alt={shot.title}
    sizes="(min-width: 1024px) 64rem, 100vw"
  />
</div>
</div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-10">
          <div>
            <h3 className="font-display text-4xl md:text-6xl">{shot.title}</h3>
            <p className="mt-2 max-w-md text-neutral-200">{shot.caption}</p>
          </div>
          <span className="font-display text-3xl text-accent md:text-5xl">
            {String(i + 1).padStart(2, "0")}
          </span>
        </div>
      </motion.article>
    </div>
  );
}

export default function StackCards({ shots }: { shots: Shot[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={ref}>
      {shots.map((s, i) => (
        <Card key={s.title} shot={s} i={i} n={shots.length} progress={scrollYProgress} />
      ))}
    </div>
  );
}