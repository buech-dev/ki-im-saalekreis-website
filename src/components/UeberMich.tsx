const COMPETENCIES = [
  {
    title: "Empathie & Kundenservice-Erfahrung",
    description:
      "Aus der praktischen Arbeit im Kundenservice kenne ich die echten Schmerzpunkte: überlastete Telefonleitungen, lange Wartezeiten, repetitive FAQ-Fragen und verpasste Anrufe außerhalb der Öffnungszeiten. Dieses Wissen fließt direkt in jede Umsetzung ein.",
  },
  {
    title: "Full-Stack-Entwicklungskompetenz",
    description:
      "Im Gegensatz zu reinen No-Code-Resellern entwickle ich komplexe Schnittstellen, Datenbankstrukturen und moderne Weboberflächen selbst – für Integrationen, die über Standardlösungen hinausgehen.",
  },
];

export default function UeberMich() {
  return (
    <section id="ueber-uns" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-800">
            Über uns
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Christopher Büchner, Gründer
          </p>
          <p className="mt-4 text-slate-600">
            Ich gründe den Verein &bdquo;KI im Saalekreis&ldquo; mit Sitz in
            Bad Lauchstädt, um mittelständischen Unternehmen in der Region
            einen vertrauenswürdigen, lokalen Zugang zu moderner
            KI-Technologie zu ermöglichen – verständlich erklärt, sauber
            integriert, DSGVO-konform und ohne Gewinnabsicht.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-3">
          {COMPETENCIES.map((item) => (
            <div key={item.title}>
              <h3 className="text-lg font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
