const ANGEBOTE = [
  {
    title: "KI-Workshops für Schulklassen",
    description:
      "Altersgerechte, praktische Einheiten: Was ist ein Sprachmodell, wie entstehen KI-Bilder, wo lauern Fehler und Vorurteile? Zum Ausprobieren statt nur Zuhören.",
  },
  {
    title: "Fortbildung für Lehrkräfte",
    description:
      "Unterstützung für Pädagoginnen und Pädagogen, die KI-Kompetenz in den Unterricht einbauen möchten – praxisnah und ohne technischen Vorbehalt.",
  },
  {
    title: "Elternabende & Aufklärung",
    description:
      "Verständliche Einordnung für Familien: Welche Chancen und Risiken bringt KI für Kinder und Jugendliche wirklich mit sich?",
  },
];

export default function Schulen() {
  return (
    <section id="schulen" className="bg-blue-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-300">
            Herzensprojekt des Vereins
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            KI an Schulen – für die nächste Generation
          </p>
          <p className="mt-4 text-blue-100">
            Neben der Arbeit mit Betrieben ist uns die Aufklärungsarbeit mit
            Kindern und Jugendlichen ein besonderes Anliegen. Als
            gemeinnütziger Verein wollen wir Schulen im Saalekreis
            kostenfrei oder zu stark vergünstigten Konditionen dabei
            unterstützen, KI-Kompetenz zu vermitteln – verständlich,
            alterstauglich und ohne Werbeabsicht.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {ANGEBOTE.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-blue-100">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-blue-400/30 bg-blue-500/10 p-6 text-sm text-blue-100">
          Sie unterrichten an einer Schule im Saalekreis oder in der Region
          Halle-Leipzig und möchten das Thema KI in Ihrer Klasse oder Ihrem
          Kollegium angehen?{" "}
          <a href="#kontakt" className="font-semibold text-white underline underline-offset-4">
            Sprechen Sie uns an
          </a>
          .
        </div>
      </div>
    </section>
  );
}
