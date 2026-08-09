import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButton from "@/components/blog/ShareButton";
import {
  getPostBySlug,
  getAdjacentPosts,
  getReadingMinutes,
  posts,
} from "@/lib/posts";

const dateFormatter = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Beitrag nicht gefunden | KI im Saalekreis e.V." };
  }

  return {
    title: `${post.title} | KI im Saalekreis e.V.`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { previous, next } = getAdjacentPosts(slug);

  return (
    <>
      <Header />
      <main>
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-3xl px-6">
            <Link
              href="/blog"
              className="text-sm font-semibold text-blue-300 hover:text-blue-200"
            >
              ← Zurück zum Blog
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-blue-200">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-blue-500/10 px-3 py-1">
                  {tag}
                </span>
              ))}
              <time dateTime={post.date} className="text-slate-400">
                {dateFormatter.format(new Date(post.date))}
              </time>
              <span className="text-slate-400">
                · {getReadingMinutes(post)} Min. Lesezeit
              </span>
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {post.title}
            </h1>

            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/20 text-sm font-bold text-blue-200">
                CB
              </span>
              <div className="text-sm text-slate-300">
                <p className="font-semibold text-white">Christopher Büchner</p>
                <p>Gründer, KI im Saalekreis e.V.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <article className="mx-auto max-w-3xl px-6 text-lg text-slate-700">
            <div className="space-y-6">
              {post.content.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 border-t border-slate-200 pt-8">
              <ShareButton title={post.title} />
            </div>
          </article>

          {(previous || next) && (
            <nav className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 border-t border-slate-200 px-6 pt-10 sm:grid-cols-2">
              {previous ? (
                <Link
                  href={`/blog/${previous.slug}`}
                  className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    ← Vorheriger Beitrag
                  </span>
                  <p className="mt-2 font-semibold text-slate-900">
                    {previous.title}
                  </p>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={`/blog/${next.slug}`}
                  className="rounded-2xl border border-slate-200 p-5 text-right transition hover:border-blue-300"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Nächster Beitrag →
                  </span>
                  <p className="mt-2 font-semibold text-slate-900">
                    {next.title}
                  </p>
                </Link>
              ) : (
                <span />
              )}
            </nav>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
