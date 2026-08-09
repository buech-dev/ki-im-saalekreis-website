const STEPS = [
  {
    step: "01",
    title: "Am echten Betrieb ansetzen",
    description:
      "Keine generischen Folien. Wir schauen uns Ihre tatsächlichen Anrufe, Dokumente und Abläufe an und arbeiten von Tag eins an am echten Anwendungsfall.",
  },
  {
    step: "02",
    title: "Hands-on statt Frontalvortrag",
    description:
      "Gemeinsam bauen und testen wir – live, am eigenen Beispiel. So verstehen Sie nicht nur, was die KI tut, sondern auch warum.",
  },
  {
    step: "03",
    title: "Wiederholbare Abläufe hinterlassen",
    description:
      "Jede Umsetzung endet mit einem dokumentierten, wiederholbaren Workflow – damit Ihr Team eigenständig weiterarbeiten kann, auch ohne uns.",
  },
  {
    step: "04",
    title: "Wissen bleibt im Betrieb",
    description:
      "Unser Ziel ist Befähigung, keine Abhängigkeit. Schulung und Dokumentation gehören zu jeder Begleitung dazu.",
  },
];

export default function Arbeitsweise() {
  return (
    <section id="arbeitsweise" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-300">
          Wie wir arbeiten
        </h2>
        <p className="mt-2 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Praxisnah, wiederholbar, auf Augenhöhe
        </p>
        <p className="mt-4 max-w-2xl text-slate-300">
          Unsere Arbeitsweise orientiert sich an modernen, praxiserprobten
          Prinzipien der KI-Weiterbildung: lernen durch Tun, an echter Arbeit,
          mit einem wiederholbaren Vorgehen statt Einzeltricks.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {STEPS.map((item) => (
            <div key={item.step} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <span className="font-mono text-sm text-blue-300">{item.step}</span>
              <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
