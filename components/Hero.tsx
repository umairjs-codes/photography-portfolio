"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import heroImg from "@/public/images/hero.jpg";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const lines = ["Capturing moments", "around me"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-svh min-h-[600px] w-full overflow-hidden">
      <motion.div style={{ y: imgY }} className="absolute inset-x-0 -top-[20%] h-[120%]">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease }}
          className="absolute inset-0"
        >
          <Image
            src={heroImg}
            alt="Landscape photograph by Umair Ali"
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-neutral-950/50" />

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative z-10 flex h-full flex-col justify-end px-6 pb-28 md:px-16 md:pb-24"
      >
        <div className="mx-auto w-full max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-accent backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Photographer · India
          </motion.p>

          <h1 className="font-display text-[clamp(2.75rem,9vw,7.5rem)] leading-[1.02]">
            {lines.map((line, li) => (
              <span key={line} className="block overflow-hidden pb-[0.12em]">
                {line.split(" ").map((word, wi) => (
                  <span key={wi}>
                    <motion.span
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1, ease, delay: 0.3 + (li * 2 + wi) * 0.1 }}
                      className={`inline-block ${li === 1 ? "italic text-accent" : ""}`}
                    >
                      {word}
                    </motion.span>{" "}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease }}
            className="mt-6 max-w-xl text-base text-neutral-300 md:text-lg"
          >
            Mountains, old streets, rainy days and night skies, shot on a digital
            camera and finished with a cinematic edit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05, ease }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-neutral-950 transition-transform hover:scale-105"
            >
              View gallery
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/presets"
              className="rounded-full border border-white/25 px-6 py-3 text-sm backdrop-blur-md transition-colors hover:border-accent hover:text-accent"
            >
              Free presets
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 right-8 z-10 hidden text-neutral-300 md:block"
        aria-hidden
      >
        <ArrowDown size={22} />
      </motion.div>
    </section>
  );
}