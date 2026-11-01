"use client";

import { useState } from "react";
import StoryImage from "@/components/about/StoryImage";
import type { Shot } from "@/lib/story";

export default function ExpandGallery({ shots }: { shots: Shot[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex h-[78svh] min-h-[520px] flex-col gap-3 md:h-[70svh] md:flex-row">
      {shots.map((s, i) => {
        const on = i === active;
        return (
          <button
            key={s.title}
            type="button"
            aria-expanded={on}
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
            className={`group relative min-h-0 min-w-0 overflow-hidden rounded-2xl text-left transition-[flex] duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
              on ? "flex-[5]" : "flex-[1]"
            }`}
          >
            <StoryImage
              src={s.src}
              alt={s.title}
              sizes="(min-width: 768px) 50vw, 100vw"
              className={`transition-transform duration-1000 ${on ? "scale-100" : "scale-110"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
              <p className="whitespace-nowrap font-display text-2xl md:text-3xl">{s.title}</p>
              <p
                className={`mt-2 max-w-sm text-sm text-neutral-300 transition-all duration-500 ${
                  on ? "translate-y-0 opacity-100 delay-200" : "translate-y-3 opacity-0"
                }`}
              >
                {s.caption}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}