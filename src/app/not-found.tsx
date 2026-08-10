import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 items-center justify-center bg-white px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
            Fehler 404
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Diese Seite gibt es nicht
          </h1>
          <p className="mt-4 max-w-md text-slate-600">
            Möglicherweise wurde die Seite verschoben oder der Link ist
            veraltet. Schauen Sie doch auf der Startseite vorbei.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Zur Startseite
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
