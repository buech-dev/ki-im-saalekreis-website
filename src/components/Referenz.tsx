const TECH_STACK = [
  "Next.js & Tailwind",
  "PostgreSQL + pgvector",
  "n8n (EU-gehostet)",
  "Mistral / EU-Modelle",
  "Hetzner Cloud (Falkenstein/Frankfurt)",
];

export default function Referenz() {
  return (
    <section id="referenz" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-300">
              Technisches Referenzprojekt
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Eigenentwicklung statt reiner Weiterverkauf
            </p>
            <p className="mt-4 text-slate-300">
              Als Open-Source-Projekt des Vereins betreiben wir einen
              vollständig lokalen KI-Telefonassistenten auf Basis von
              Mistral 7B und Ollama – Echtzeit-Spracherkennung, natürliche
              Dialoge und drei Betriebsmodi (Terminbuchung, Produktinfo,
              Support), ganz ohne Cloud-API-Kosten. Er zeigt, dass wir
              Voice-AI nicht nur erklären, sondern von Grund auf verstehen
              und selbst bauen – und stellt den Quellcode frei zur Verfügung.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <a
              href="https://github.com/buech-dev/ki-telefonassistent-mit-mistral-7b"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Projekt auf GitHub ansehen
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">
              Compliance ab Werk
            </p>
            <p className="mt-3 text-lg font-bold">
              EU AI Act Kennzeichnungspflicht seit August 2026
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Jeder implementierte Voice Agent erhält ein vorgeschaltetes
              Audio-Intro (&bdquo;Guten Tag, ich bin der digitale Assistent
              von …&ldquo;), damit Ihr Unternehmen die gesetzliche
              Kennzeichnungspflicht für synthetische Sprache zu 100 % erfüllt
              – rechtssicher und ohne Abmahnrisiko.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-sm">
              <div>
                <p className="font-semibold text-white">DSGVO</p>
                <p className="text-slate-400">Daten verarbeitet & gehostet in der EU</p>
              </div>
              <div>
                <p className="font-semibold text-white">Hosting</p>
                <p className="text-slate-400">Ausschließlich EU-Rechenzentren</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
