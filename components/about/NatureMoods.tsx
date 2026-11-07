"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import StoryImage from "@/components/about/StoryImage";
import type { Shot } from "@/lib/story";

const COLORS = ["#f5a524", "#94a3b8", "#f472b6", "#2dd4bf"];
const AUTO_DELAY = 5500;
const DRAG_BUFFER = 50;
const SPRING = { type: "spring" as const, mass: 3, stiffness: 400, damping: 50 };
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function NatureMoods({ shots }: { shots: Shot[] }) {
  const n = shots.length;
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduce = useReducedMotion();

  const color = COLORS[index % COLORS.length];
  const paused = hover || dragging || !inView || !!reduce;

  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % n), AUTO_DELAY);
    return () => window.clearTimeout(t);
  }, [index, paused, n]);

  return (
    <div
      ref={ref}
      className="relative isolate"
      role="region"
      aria-roledescription="carousel"
      aria-label="Nature in four moods"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-4 -z-10 rounded-[3rem] opacity-20 blur-3xl transition-colors duration-1000 md:-inset-8"
        style={{ backgroundColor: color }}
      />

      <div
        className="overflow-hidden rounded-3xl"
        onPointerEnter={(e) => e.pointerType === "mouse" && setHover(true)}
        onPointerLeave={() => setHover(false)}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragStart={() => setDragging(true)}
          onDragEnd={(_, info) => {
            setDragging(false);
            if ((info.offset.x < -DRAG_BUFFER || info.velocity.x < -500) && index < n - 1) {
              setIndex(index + 1);
            } else if ((info.offset.x > DRAG_BUFFER || info.velocity.x > 500) && index > 0) {
              setIndex(index - 1);
            }
          }}
        >
          <motion.div
            animate={{ x: `-${index * 100}%` }}
            transition={SPRING}
            className="flex"
          >
            {shots.map((s, i) => {
              const on = i === index;
              return (
                <motion.div
                  key={s.title}
                  initial={false}
                  animate={{ scale: on ? 1 : 0.9 }}
                  transition={SPRING}
                  aria-hidden={!on}
                  className="relative aspect-[4/5] w-full shrink-0 overflow-hidden rounded-3xl bg-neutral-900 sm:aspect-[16/10] md:aspect-[2/1]"
                >
                  <motion.div
                    initial={false}
                    animate={{ scale: on ? 1 : 1.1 }}
                    transition={{ duration: 1.4, ease: EASE }}
                    className="absolute inset-0"
                  >
                    <StoryImage
                      src={s.src}
                      alt={s.title}
                      sizes="(min-width: 1024px) 64rem, 100vw"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <motion.div
                    initial={false}
                    animate={{ opacity: on ? 1 : 0, y: on ? 0 : 16 }}
                    transition={{ duration: 0.5, delay: on ? 0.25 : 0, ease: EASE }}
                    className="absolute inset-x-0 bottom-0 p-5 md:p-10"
                  >
                    <p
                      className="text-xs uppercase tracking-[0.3em]"
                      style={{ color: COLORS[i % COLORS.length] }}
                    >
                      Mood {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-4xl md:text-6xl">{s.title}</h3>
                    <p className="mt-2 max-w-sm text-sm text-neutral-200 md:text-base">
                      {s.caption}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      <div
        role="tablist"
        aria-label="Choose a mood"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") setIndex((i) => Math.min(n - 1, i + 1));
          if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
        }}
        className="mt-6 grid grid-cols-4 gap-2 md:flex md:justify-center md:gap-4"
      >
        {shots.map((s, i) => {
          const on = i === index;
          return (
            <button
              key={s.title}
              type="button"
              role="tab"
              aria-selected={on}
              tabIndex={on ? 0 : -1}
              onClick={() => setIndex(i)}
              className="group flex flex-col items-center gap-2 md:flex-row md:gap-3 md:rounded-2xl md:border md:border-white/10 md:bg-white/[0.03] md:px-3 md:py-2 md:pr-5"
            >
              <span
                className={`relative size-11 shrink-0 overflow-hidden rounded-xl transition-all duration-300 md:size-12 ${
                  on ? "scale-110" : "opacity-60 group-hover:opacity-90"
                }`}
                style={on ? { boxShadow: `0 0 0 2px ${color}` } : undefined}
              >
                <StoryImage src={s.src} alt="" sizes="48px" />
              </span>
              <span className={`text-[11px] md:text-sm ${on ? "text-white" : "text-neutral-400"}`}>
                {s.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}