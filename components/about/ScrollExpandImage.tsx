"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import StoryImage from "@/components/about/StoryImage";
import type { Shot } from "@/lib/story";

export default function ScrollExpandImage({ shot }: { shot: Shot }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });
  const width = useTransform(p, [0, 1], ["76%", "100%"]);
  const radius = useTransform(p, [0, 1], [40, 0]);
  const scale = useTransform(p, [0, 1], [1.3, 1]);

  return (
    <div ref={ref} className="flex h-[85svh] items-center justify-center">
      <motion.div
        style={{ width, borderRadius: radius }}
        className="relative h-full overflow-hidden"
      >
        <motion.div style={{ scale }} className="absolute inset-0">
          <StoryImage src={shot.src} alt={shot.title} sizes="100vw" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl p-6 md:p-16">
          <h3 className="font-display text-5xl md:text-8xl">{shot.title}</h3>
          <p className="mt-3 max-w-md text-neutral-200">{shot.caption}</p>
        </div>
      </motion.div>
    </div>
  );
}