type Plan = {
  badge: string;
  title: string;
  audience: string;
  features: string[];
  highlighted?: boolean;
};

const PLANS: Plan[] = [
  {
    badge: "Angebot 1",
    title: "AI Voice Agent",
    audience:
      "Handwerk, Arztpraxen, Physiotherapie, Hotels & Gastronomie, Makler, Versicherungen",
    features: [
      "Kostenlose Analyse Ihrer Anrufprozesse & Anforderungen",
      "Begleitung bei Einrichtung & Gesprächslogik auf DSGVO-konformer Basis",
      "Integration in Kalender, CRM & E-Mail",
      "Gemeinsame Optimierung anhand echter Anruflogs",
      "EU AI Act Kennzeichnungspflicht inklusive",
    ],
  },
  {
    badge: "Angebot 2",
    title: "Corporate LLM & RAG",
    audience:
      "Kanzleien, Steuerberater, Industrie & Logistik, Gesundheitswesen",
    features: [
      "Analyse-Workshop & Strukturierung Ihrer Datenquellen",
      "Aufbau eines RAG-Systems für internes Wissen (PDFs, Word, Wikis)",
      "Modellauswahl mit EU-Hosting (z. B. Mistral)",
      "Individuelle Weboberfläche für Ihr Team",
      "Schulung Ihres Teams für maximale Akzeptanz",
    ],
    highlighted: true,
  },
];

export default function Leistungen() {
  return (
    <section id="angebote" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-800">
            Unsere Angebote
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Zwei Wege zu mehr KI im Betrieb
          </p>
          <p className="mt-4 text-slate-600">
            Als Verein richten wir uns nach dem tatsächlichen Bedarf und den
            Möglichkeiten Ihres Betriebs – nicht nach starren Paketen. In
            einem ersten, unverbindlichen Gespräch klären wir gemeinsam,
            welche Unterstützung sinnvoll ist und wie sie sich im Rahmen
            unserer Vereinsarbeit gestalten lässt.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {PLANS.map((plan) => (
            <div
              key={plan.title}
              className={`flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-blue-900 bg-slate-950 text-white shadow-xl"
                  : "border-slate-200 bg-white"
              }`}
            >
              <span
                className={`inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                  plan.highlighted
                    ? "bg-blue-500/20 text-blue-200"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {plan.badge}
              </span>
              <h3 className="mt-4 text-2xl font-bold">{plan.title}</h3>
              <p
                className={`mt-2 text-sm ${
                  plan.highlighted ? "text-slate-300" : "text-slate-500"
                }`}
              >
                {plan.audience}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${
                        plan.highlighted ? "bg-blue-400" : "bg-blue-700"
                      }`}
                    />
                    <span
                      className={
                        plan.highlighted ? "text-slate-200" : "text-slate-700"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-500"
                    : "bg-blue-900 text-white hover:bg-blue-800"
                }`}
              >
                Unverbindlich anfragen
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8">
          <h3 className="text-lg font-bold text-slate-900">
            Ergänzend: Custom Full-Stack Integrations
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Anbindung an CRMs, ERPs und Datenbanken sowie maßgeschneiderte
            Dashboards – für Betriebe, die über Standardlösungen hinaus
            eigene Workflows abbilden möchten.
          </p>
        </div>
      </div>
    </section>
  );
}
