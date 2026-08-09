const USPS = [
  {
    title: "Regional verwurzelt",
    description:
      "Persönliche Beratung und Betreuung direkt vor Ort im Saalekreis – kombiniert mit kompromisslosem Fokus auf DSGVO-Konformität und rein europäischem Hosting.",
  },
  {
    title: "Ohne Gewinnabsicht",
    description:
      "Als Verein reinvestieren wir Mitgliedsbeiträge und Fördermittel in die Vereinsarbeit – nicht in Gewinnmaximierung. Unsere Beratung ist unabhängig von einzelnen Anbietern.",
  },
  {
    title: "Praktische Umsetzungstiefe",
    description:
      "Keine reine Empfehlung: Wir übernehmen die tiefgehende Integration in Ihre bestehenden Workflows, CRMs und Datenbanken – gemeinsam mit Ihnen erarbeitet.",
  },
];

export default function USPs() {
  return (
    <section id="usps" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-800">
          Warum ein Verein
        </h2>
        <p className="mt-2 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Vertrauen durch Gemeinnützigkeit
        </p>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {USPS.map((usp, index) => (
            <div key={usp.title} className="rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-200">
              <span className="text-sm font-mono text-blue-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-bold text-slate-900">
                {usp.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {usp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
