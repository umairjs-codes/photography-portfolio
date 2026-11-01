import StoryImage from "@/components/about/StoryImage";

function Peek({
  src,
  className,
  delay,
}: {
  src: string;
  className: string;
  delay: string;
}) {
  return (
    <div
      className={`absolute inset-0 animate-fade-up overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 transition-transform duration-700 ease-out motion-reduce:animate-none motion-reduce:transition-none ${className}`}
      style={{ animationDelay: delay }}
    >
      <StoryImage src={src} alt="" sizes="(min-width: 768px) 28rem, 70vw" />
    </div>
  );
}

export default function PortraitStack({ photos }: { photos: string[] }) {
  const [main, second, third] = photos;
  if (!main) return null;

  return (
    <div className="group relative mx-auto aspect-[4/5] w-full max-w-sm md:mr-0 md:max-w-md">
      {third && (
        <Peek
          src={third}
          delay="0.9s"
          className="translate-x-3 rotate-[7deg] group-hover:translate-x-8 group-hover:rotate-[10deg]"
        />
      )}
      {second && (
        <Peek
          src={second}
          delay="0.75s"
          className="-translate-x-3 -rotate-[6deg] group-hover:-translate-x-8 group-hover:-rotate-[10deg]"
        />
      )}

      <figure className="absolute inset-0 z-10 animate-reveal overflow-hidden rounded-3xl bg-neutral-900 shadow-2xl shadow-black/60 motion-reduce:animate-none">
        <div className="absolute inset-0 animate-kenburns motion-reduce:animate-none">
          <StoryImage
            src={main}
            alt="Portrait of Umair Ali"
            sizes="(min-width: 768px) 28rem, 90vw"
            priority
          />
        </div>
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-12">
          <p className="font-hand text-2xl leading-none">Umair, behind the lens</p>
        </figcaption>
      </figure>
    </div>
  );
}