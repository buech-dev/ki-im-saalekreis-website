const PROBLEMS = [
  "Akuter Fachkräftemangel trifft auf enormen Transformationsdruck durch KI.",
  "Viele Betriebe im Saalekreis haben keine eigene IT-Abteilung und niemanden, der KI verständlich erklärt.",
  "Kinder und Jugendliche wachsen mit KI auf, lernen aber in der Schule selten, wie sie wirklich funktioniert.",
  "Kommerzielle Anbieter sind für kleine Betriebe und für Bildungsarbeit oft zu teuer oder zu unpersönlich.",
];

export default function Mission() {
  return (
    <section id="mission" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Unser Vereinszweck
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Digitale Teilhabe statt digitaler Kluft
            </p>
            <p className="mt-4 text-slate-600">
              Der Saalekreis ist geprägt von einem starken, traditionellen
              Mittelstand – Handwerk, freie Berufe, Praxen. Genau diese
              Betriebe drohen bei der KI-Transformation zurückzubleiben, weil
              ihnen Zeit, Wissen oder Ansprechpartner vor Ort fehlen. Als
              gemeinnütziger Verein (in Gründung) wollen wir diese Lücke
              schließen: mit Aufklärung, Schulungen und praktischer
              Umsetzungsbegleitung – unabhängig von Anbietern und ohne
              Gewinnabsicht.
            </p>
            <p className="mt-4 text-slate-600">
              Genauso wichtig ist uns die nächste Generation: Wir wollen
              Kindern und Jugendlichen an Schulen in der Region altersgerecht
              und verständlich näherbringen, wie KI funktioniert – damit sie
              sie mündig nutzen statt nur konsumieren.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              Warum es diesen Verein braucht
            </h3>
            <ul className="mt-4 space-y-4">
              {PROBLEMS.map((problem) => (
                <li key={problem} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
                  <span className="text-sm text-slate-700">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
