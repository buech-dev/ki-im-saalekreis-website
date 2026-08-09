"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Post } from "@/lib/posts";
import { getReadingMinutes } from "@/lib/posts";

const dateFormatter = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export default function PostList({
  posts,
  tags,
}: {
  posts: Post[];
  tags: string[];
}) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    if (!activeTag) return posts;
    return posts.filter((post) => post.tags.includes(activeTag));
  }, [posts, activeTag]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveTag(null)}
          className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
            activeTag === null
              ? "bg-blue-900 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          Alle
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
              activeTag === tag
                ? "bg-blue-900 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <p className="mt-10 text-sm text-slate-500">
          Keine Beiträge mit diesem Tag gefunden.
        </p>
      ) : (
        <div className="mt-10 space-y-10">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-blue-800">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-blue-100 px-3 py-1">
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
              <h2 className="mt-4 text-2xl font-bold text-slate-900">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-blue-800">
                Weiterlesen →
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
