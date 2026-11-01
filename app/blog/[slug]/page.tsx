import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  return post
    ? { title: post.meta.title, description: post.meta.excerpt }
    : {};
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <p className="text-xs uppercase tracking-widest text-accent">
        {post.meta.tag}
      </p>
      <h1 className="mt-3 font-display text-4xl md:text-6xl">
        {post.meta.title}
      </h1>
      <div className="prose prose-invert prose-lg mt-10 prose-headings:font-display prose-a:text-accent">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}