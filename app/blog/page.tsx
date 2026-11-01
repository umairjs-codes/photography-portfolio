import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getAllPosts } from "@/lib/blog";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-32 md:px-16">
      <Reveal>
        <h1 className="font-display text-5xl md:text-7xl">Blog</h1>
      </Reveal>

      <div className="mt-12 divide-y divide-white/10">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group block py-8">
            <p className="text-xs uppercase tracking-widest text-accent">
              {p.tag} · {new Date(p.date).toLocaleDateString("en-IN", { dateStyle: "medium" })}
            </p>
            <h2 className="mt-2 font-display text-3xl transition-colors group-hover:text-accent">
              {p.title}
            </h2>
            <p className="mt-2 text-neutral-400">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}