import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ScrollText from "@/components/ScrollText";
import CountUp from "@/components/CountUp";
import FeaturedStrip from "@/components/FeaturedStrip";
import Reveal from "@/components/Reveal";
import { getPhotos } from "@/lib/pexels";
import { getAllPosts } from "@/lib/blog";
import { presets } from "@/lib/presets";

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <div>
      <p className="font-display text-4xl text-accent md:text-6xl">
        <CountUp to={value} suffix={suffix} />
      </p>
      <p className="mt-2 text-xs uppercase tracking-widest text-neutral-400 md:text-sm">{label}</p>
    </div>
  );
}

export default async function Home() {
  const photos = await getPhotos();
  const posts = getAllPosts().slice(0, 2);

  return (
    <>
      <Hero />
      <Marquee photos={photos.slice(0, 12)} />

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-40">
        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-accent">About</p>
        <ScrollText text="I'm Umair, a photographer from India chasing light across mountains, old streets, rainy days and night skies, then shaping every frame with a cinematic edit." />
        <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
          <Stat value={351} suffix="K+" label="Pexels views" />
          <Stat value={99} suffix="+" label="Photos published" />
          <Stat value={presets.length} suffix="" label="Free presets" />
        </div>
        <Link
          href="/about"
          className="mt-10 inline-flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-accent"
        >
          More about me <ArrowRight size={16} />
        </Link>
      </section>

      <FeaturedStrip photos={photos.slice(0, 6)} />

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-40">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Free downloads</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">The looks behind my edits</h2>
            <p className="mt-5 max-w-md text-neutral-400">
              Lightroom presets I use on mountains, streets and night frames. Download them free.
            </p>
            <Link
              href="/presets"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-neutral-950 transition-transform hover:scale-105"
            >
              Browse presets
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {presets.slice(0, 4).map((p, i) => (
                <div
                  key={p.id}
                  className={`relative aspect-[4/5] overflow-hidden rounded-xl ${i % 2 ? "translate-y-6" : ""}`}
                >
                  <Image
                    src={p.preview}
                    alt={`${p.name} preview`}
                    fill
                    sizes="(min-width: 768px) 25vw, 45vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 md:px-16 md:pb-40">
        <Reveal>
          <div className="flex items-end justify-between">
            <h2 className="font-display text-4xl md:text-6xl">From the blog</h2>
            <Link href="/blog" className="text-sm text-neutral-300 transition-colors hover:text-accent">
              All posts →
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group block py-8">
              <p className="text-xs uppercase tracking-widest text-accent">{p.tag}</p>
              <h3 className="mt-2 font-display text-2xl transition-colors group-hover:text-accent md:text-3xl">
                {p.title}
              </h3>
              <p className="mt-2 text-neutral-400">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 px-6 py-28 text-center md:py-44">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_100%,rgba(245,165,36,0.18),transparent)]"
        />
        <Reveal className="relative">
          <h2 className="mx-auto max-w-4xl font-display text-5xl leading-tight md:text-8xl">
            Let&apos;s create something <em className="text-accent">timeless</em>
          </h2>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-medium text-neutral-950 transition-transform hover:scale-105"
          >
            Get in touch
          </Link>
        </Reveal>
      </section>
    </>
  );
}