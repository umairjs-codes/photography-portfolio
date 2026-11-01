"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import StoryImage from "@/components/about/StoryImage";
import type { Stop } from "@/lib/story";

export default function Roadmap({
  stops,
  showImages = true,
}: {
  stops: Stop[];
  showImages?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.55"],
  });
  const headTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative">
      <div className="absolute inset-y-0 left-4 w-px -translate-x-1/2 bg-white/10 md:left-1/2" />
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute inset-y-0 left-4 w-px origin-top -translate-x-1/2 bg-accent md:left-1/2"
      />
      <motion.div
        style={{ top: headTop }}
        className="absolute left-4 z-10 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_24px_6px_rgba(245,165,36,0.55)] md:left-1/2"
      />

      <ol className="space-y-20 py-6 md:space-y-32">
        {stops.map((s, i) => {
          const left = i % 2 === 0;
          return (
            <li
              key={s.title}
              className="relative pl-12 md:grid md:grid-cols-2 md:gap-28 md:pl-0"
            >
              <motion.span
                initial={{ scale: 0.6, backgroundColor: "#404040" }}
                whileInView={{ scale: 1, backgroundColor: "#f5a524" }}
                viewport={{ once: true, margin: "0px 0px -45% 0px" }}
                className="absolute left-4 top-2 z-10 size-4 -translate-x-1/2 rounded-full border-4 border-neutral-950 md:left-1/2"
              />
              <motion.div
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -15% 0px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={left ? "md:col-start-1 md:text-right" : "md:col-start-2"}
              >
                {showImages && (
                  <div className="group relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl">
                    <StoryImage
                      src={s.src}
                      alt={s.title}
                      sizes="(min-width: 768px) 40vw, 85vw"
                      className="transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                )}
                {s.tag && (
                  <p className="text-xs uppercase tracking-[0.3em] text-accent">{s.tag}</p>
                )}
                <h3 className="mt-2 font-display text-3xl md:text-5xl">{s.title}</h3>
                <p className={`mt-3 max-w-md text-neutral-400 ${left ? "md:ml-auto" : ""}`}>
                  {s.text}
                </p>
              </motion.div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}