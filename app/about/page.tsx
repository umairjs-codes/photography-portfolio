import Reveal from "@/components/Reveal";
import ScrollText from "@/components/ScrollText";
import CountUp from "@/components/CountUp";
import PolaroidLine from "@/components/about/PolaroidLine";
import Roadmap from "@/components/about/Roadmap";
import ExpandGallery from "@/components/about/ExpandGallery";
import ScrollExpandImage from "@/components/about/ScrollExpandImage";
import DragStrip from "@/components/about/DragStrip";
import StackCards from "@/components/about/StackCards";
import StoryImage from "@/components/about/StoryImage";
import PortraitStack from "@/components/about/PortraitStack";
import {
  portraits,
  origin,
  journey,
  heritage,
  nature,
  landscapes,
  design,
  festivals,
  styles,
  street,
} from "@/lib/story";

export const metadata = {
  title: "About",
  description:
    "How a few phone shots on a morning run became a way of seeing: heritage, nature, festivals, mountains and street photography by Umair Ali.",
};

function SectionHead({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-7xl px-6 md:px-16">
      <p className="text-xs uppercase tracking-[0.3em] text-accent">{kicker}</p>
      <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-6xl">{title}</h2>
      {text && <p className="mt-5 max-w-xl text-neutral-400">{text}</p>}
    </Reveal>
  );
}

export default function AboutPage() {
  return (
    <div className="overflow-x-clip pb-12">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-16 md:pb-32 md:pt-44">
        <div className="grid items-center gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <div>
            <p className="animate-fade-up text-xs uppercase tracking-[0.3em] text-accent motion-reduce:animate-none">
              About me
            </p>
            <h1
              className="mt-4 animate-fade-up font-display text-[clamp(2.75rem,6.4vw,6.25rem)] leading-[1.03] motion-reduce:animate-none"
              style={{ animationDelay: "0.08s" }}
            >
              Just an eye that sees <em className="text-accent">the art</em>
            </h1>
            <p
              className="mt-8 max-w-xl animate-fade-up text-lg text-neutral-400 motion-reduce:animate-none"
              style={{ animationDelay: "0.16s" }}
            >
              I&apos;m Umair, a photographer from India. This is how a few phone
              shots on a morning run turned into a way of seeing.
            </p>
          </div>
          <PortraitStack photos={portraits} />
        </div>
      </section>

      {/* 01 Origin */}
      <section className="pb-24 md:pb-40">
        <SectionHead kicker="Chapter 01" title="How it started" />
        <Reveal className="mx-auto mt-8 max-w-7xl px-6 md:px-16">
          <div className="max-w-2xl space-y-5 text-lg text-neutral-300">
            <p>
              It started just after the first wave of COVID. My cousins and I
              would go out for a morning run, and somewhere between the miles we
              began capturing moments on my phone: jumping over big potholes,
              trying creative shots.
            </p>
            <p>
              Looking at them later, I realised I could actually take good
              photographs. So I asked my cousin to take the same kind of
              pictures of me that I had taken of him.
            </p>
          </div>
        </Reveal>
        <div className="mt-10">
          <PolaroidLine slides={origin} />
        </div>
      </section>

      {/* 02 Journey */}
      <section className="mx-auto max-w-5xl px-6 pb-24 md:px-16 md:pb-40">
        <SectionHead
          kicker="Chapter 02"
          title="From a phone to Lightroom to Pexels"
          text="The tools changed. The habit of looking didn't."
        />
        <div className="mt-14">
          <Roadmap stops={journey} showImages={false} />
        </div>
      </section>

      {/* 03 Heritage */}
      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-16 md:pb-40">
        <SectionHead
          kicker="Chapter 03"
          title="The heritage trail"
          text="Five places, one road: old cities and mountains where history is still part of daily life."
        />
        <div className="mt-14">
          <Roadmap stops={heritage} />
        </div>
      </section>

      {/* 04 Nature */}
      <section className="pb-24 md:pb-40">
        <SectionHead
          kicker="Chapter 04"
          title="Nature in four moods"
          text="Hover or tap a panel to open it."
        />
        <div className="mx-auto mt-12 max-w-7xl px-6 md:px-16">
          <ExpandGallery shots={nature} />
        </div>
      </section>

      {/* 05 Landscapes */}
      <section className="pb-24 md:pb-40">
        <SectionHead kicker="Chapter 05" title="Mountains & landscapes" />
        <div className="mt-8">
          {landscapes.map((s) => (
            <ScrollExpandImage key={s.title} shot={s} />
          ))}
        </div>
      </section>

      {/* 06 Design */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-16 md:pb-40">
        <SectionHead
          kicker="Chapter 06"
          title="Words on photographs"
          text="Sometimes a frame wants a few words. I design with fonts on top of my own photographs."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {design.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} className={i % 2 ? "md:mt-16" : ""}>
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl">
                <StoryImage
                  src={s.src}
                  alt={s.title}
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="transition-transform duration-1000 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-6">
                  <p className="font-display text-3xl">{s.title}</p>
                  <p className="mt-1 text-sm text-neutral-300">{s.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 07 Festivals */}
      <section className="pb-24 md:pb-40">
        <SectionHead
          kicker="Chapter 07"
          title="Festival moments"
          text="Eid, Ramadan and other celebrations: the colour, the crowds and the quiet in between."
        />
        <div className="mt-12">
          <DragStrip shots={festivals} />
        </div>
      </section>

      {/* 08 Styles */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-16 md:pb-40">
        <SectionHead kicker="Chapter 08" title="Styles I love" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {styles.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
                <StoryImage
                  src={s.src}
                  alt={s.title}
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-accent">Style</p>
                  <p className="mt-1 font-display text-3xl md:text-4xl">{s.title}</p>
                  <p className="mt-1 text-sm text-neutral-300">{s.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 09 Street */}
      <section className="mx-auto max-w-5xl px-6 pb-12 md:px-16">
        <SectionHead
          kicker="Chapter 09"
          title="On the street"
          text="Railways, everyday life and winter foggy nights."
        />
        <div className="mt-12">
          <StackCards shots={street} />
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:px-16 md:py-40">
        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-accent">The honest bit</p>
        <ScrollText text="I'm not a perfect photographer or a famous one, and I don't have any professional gear. Just a sight of eye that sees the art. I'm the one who loves photography and capturing moments around me." />

        <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-10">
          <div>
            <p className="font-display text-5xl text-accent md:text-6xl">
              <CountUp to={14} />
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest text-neutral-400 md:text-sm">
              Years old, my Sony camera
            </p>
          </div>
          <div>
            <p className="font-display text-5xl text-accent md:text-6xl">
              <CountUp to={1} />
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest text-neutral-400 md:text-sm">
              Year shooting with it
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="https://www.instagram.com/umairpixels_/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-neutral-950 transition-transform hover:scale-105"
          >
            Instagram @umairpixels_
          </a>
          <a
            href="https://www.pexels.com/@umairpixels/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/25 px-6 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            Pexels
          </a>
        </div>
      </section>
    </div>
  );
}