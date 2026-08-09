import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "KI-Tools für den Mittelstand | KI im Saalekreis e.V.",
  description:
    "Eine kuratierte, praxisnahe Übersicht nützlicher KI-Tools für kleine und mittlere Unternehmen – von Telefonie über Textarbeit bis Automatisierung.",
};

type Tool = {
  name: string;
  description: string;
  useCase: string;
  euHosted?: boolean;
};

type Category = {
  title: string;
  intro: string;
  tools: Tool[];
};

const CATEGORIES: Category[] = [
  {
    title: "Telefonie & Sprachassistenten",
    intro:
      "Für Betriebe, die Anrufe nicht mehr verpassen wollen – ob als fertige Plattform oder als Baustein für eigene Lösungen.",
    tools: [
      {
        name: "fonio",
        description:
          "DSGVO-konforme Voice-AI-Plattform aus dem DACH-Raum für Telefon-Assistenten – Basis unserer Umsetzungsbegleitung.",
        useCase: "Terminvergabe, Erreichbarkeit außerhalb der Öffnungszeiten",
        euHosted: true,
      },
      {
        name: "Ollama + Mistral 7B",
        description:
          "Open-Source-Werkzeug, um Sprachmodelle vollständig lokal zu betreiben – keine Cloud-Kosten, volle Datenkontrolle.",
        useCase: "Eigenständiger, selbst gehosteter Telefon- oder Chat-Assistent",
        euHosted: true,
      },
    ],
  },
  {
    title: "Text, Chat & Wissensmanagement",
    intro:
      "Für Korrespondenz, Recherche und den schnellen Zugriff auf internes Wissen.",
    tools: [
      {
        name: "Claude",
        description:
          "Sprachmodell von Anthropic, stark bei Textarbeit, Zusammenfassungen und der Analyse längerer Dokumente.",
        useCase: "Angebote, Berichte, Vertragsanalyse vorbereiten",
      },
      {
        name: "Mistral Le Chat",
        description:
          "Chat-Anwendung des französischen Anbieters Mistral AI – europäische Alternative mit Fokus auf EU-Datenverarbeitung.",
        useCase: "Alltägliche Textaufgaben mit europäischem Anbieter",
        euHosted: true,
      },
      {
        name: "NotebookLM",
        description:
          "Von Google – lädt eigene Dokumente hoch und beantwortet Fragen ausschließlich auf deren Basis, inklusive Quellenangaben.",
        useCase: "Schnelle Orientierung in Handbüchern, Verträgen, Protokollen",
      },
      {
        name: "Perplexity",
        description:
          "KI-gestützte Suchmaschine mit Quellenangaben für aktuelle, belegbare Antworten.",
        useCase: "Marktrecherche, Wettbewerbsbeobachtung",
      },
    ],
  },
  {
    title: "Automatisierung & Workflows",
    intro:
      "Um wiederkehrende Aufgaben zwischen Ihren bestehenden Systemen zu verbinden – ohne für jede Anbindung neu programmieren zu müssen.",
    tools: [
      {
        name: "n8n",
        description:
          "Visuelles, selbst hostbares Automatisierungstool – verbindet CRM, Kalender, E-Mail und KI-Modelle miteinander.",
        useCase: "Automatisches Reporting, Lead-Weiterleitung, Terminlogik",
        euHosted: true,
      },
      {
        name: "Make",
        description:
          "Cloud-basierte Automatisierungsplattform mit großer Auswahl an vorgefertigten Anbindungen.",
        useCase: "Schnelle Prototypen für Workflow-Automatisierung",
      },
    ],
  },
  {
    title: "Programmierung & Entwicklung",
    intro: "Für die technische Umsetzung individueller Lösungen.",
    tools: [
      {
        name: "GitHub Copilot",
        description:
          "KI-Unterstützung direkt im Code-Editor für schnellere, konsistentere Softwareentwicklung.",
        useCase: "Individuelle Dashboards und Schnittstellen entwickeln",
      },
      {
        name: "Claude Code",
        description:
          "Agentenbasiertes Entwicklungswerkzeug, das komplette Programmieraufgaben eigenständig bearbeitet.",
        useCase: "Prototyping und Wartung von Individualsoftware",
      },
    ],
  },
];

export default function KiToolsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <p className="mb-4 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-200 uppercase">
              Wissen zum Weitergeben
            </p>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
              KI-Tools für den Mittelstand
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Eine praxisnahe, unabhängige Auswahl an Werkzeugen, mit denen
              wir selbst arbeiten oder die wir für regionale Betriebe
              sinnvoll finden. Diese Liste ist Teil unserer Vereinsarbeit zur
              digitalen Aufklärung – kostenlos und ohne Verkaufsabsicht.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl space-y-16 px-6">
            {CATEGORIES.map((category) => (
              <div key={category.title}>
                <h2 className="text-2xl font-bold text-slate-900">
                  {category.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-600">
                  {category.intro}
                </p>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {category.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-lg font-bold text-slate-900">
                          {tool.name}
                        </h3>
                        {tool.euHosted && (
                          <span className="shrink-0 rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-800">
                            EU-Option
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-slate-600">
                        {tool.description}
                      </p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Einsatzbeispiel
                      </p>
                      <p className="mt-1 text-sm text-slate-700">
                        {tool.useCase}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-900">
              <strong>Hinweis zur DSGVO:</strong> Nicht jedes hier gelistete
              Tool verarbeitet Daten standardmäßig in der EU. Prüfen Sie vor
              dem produktiven Einsatz die Datenschutzbedingungen des
              jeweiligen Anbieters – wir unterstützen Mitgliedsbetriebe dabei
              gerne im persönlichen Gespräch.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
