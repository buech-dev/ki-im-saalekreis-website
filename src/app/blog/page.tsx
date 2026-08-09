import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostList from "@/components/blog/PostList";
import { posts, getAllTags } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | KI im Saalekreis e.V.",
  description:
    "Einblicke in unsere Vereinsarbeit: KI-Aufklärung für Schulen, Familien und den regionalen Mittelstand im Saalekreis.",
};

export default function BlogIndexPage() {
  const tags = getAllTags();

  return (
    <>
      <Header />
      <main>
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <p className="mb-4 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-200 uppercase">
              Blog
            </p>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
              Aus der Vereinsarbeit
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Offene Einblicke in unseren Aufbau, unsere Haltung zu KI in
              Schulen und im Mittelstand – und was wir dabei lernen.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6">
            <PostList posts={posts} tags={tags} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
