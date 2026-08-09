import Link from "next/link";
import { posts, getReadingMinutes } from "@/lib/posts";

const dateFormatter = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export default function BlogPreview() {
  const latestPosts = posts.slice(0, 3);

  return (
    <section id="blog" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Blog
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Aus der Vereinsarbeit
            </p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-blue-800 hover:text-blue-600"
          >
            Alle Beiträge ansehen →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-300"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                <time dateTime={post.date}>
                  {dateFormatter.format(new Date(post.date))}
                </time>{" "}
                · {getReadingMinutes(post)} Min. Lesezeit
              </span>
              <h3 className="mt-3 text-lg font-bold text-slate-900">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {post.excerpt}
              </p>
              <span className="mt-4 text-sm font-semibold text-blue-800">
                Weiterlesen →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
