import Image from "next/image";
import { Download } from "lucide-react";
import Reveal from "@/components/Reveal";
import { presets } from "@/lib/presets";

export const metadata = { title: "Presets & LUTs" };

export default function PresetsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-16">
      <Reveal>
        <h1 className="font-display text-5xl md:text-7xl">Presets &amp; LUTs</h1>
        <p className="mt-4 max-w-xl text-neutral-400">
          The looks behind my edits, free to download.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {presets.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}>
            <article className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={p.preview}
                  alt={`${p.name} preview`}
                  fill
                  loading={i < 3 ? "eager" : "lazy"}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-accent">{p.type}</p>
                <h2 className="mt-2 font-display text-2xl">{p.name}</h2>
                <p className="mt-2 text-sm text-neutral-400">{p.description}</p>
                <a
                  href={`/api/download/${p.id}`}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-neutral-950 transition-transform hover:scale-105"
                >
                  <Download size={16} /> Download
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}