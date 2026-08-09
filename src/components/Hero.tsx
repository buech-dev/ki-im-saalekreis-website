const TRUST_POINTS = [
  "Gemeinnützig – keine Gewinnabsicht",
  "100 % DSGVO-konform · EU-Hosting",
  "Verwurzelt im Saalekreis",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.35),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(30,64,175,0.35),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <p className="mb-4 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-200 uppercase">
          Gemeinnütziger Verein (in Gründung) · Saalekreis
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Künstliche Intelligenz
          <br />
          <span className="text-blue-300">für unsere Region.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Wir bringen praktisches KI-Wissen und konkrete, DSGVO-konforme
          Lösungen zu kleinen und mittleren Unternehmen im Saalekreis und der
          Region Halle-Leipzig – unabhängig davon, ob eine eigene
          IT-Abteilung vorhanden ist oder nicht. Ohne Gewinnabsicht, mit dem
          Ziel, digitale Teilhabe für den regionalen Mittelstand zu schaffen.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#kontakt"
            className="rounded-full bg-blue-600 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:bg-blue-500"
          >
            Unverbindlich Kontakt aufnehmen
          </a>
          <a
            href="#angebote"
            className="rounded-full border border-white/20 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Was wir anbieten
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
          {TRUST_POINTS.map((point) => (
            <div key={point} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
              <dd className="text-sm text-slate-300">{point}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
