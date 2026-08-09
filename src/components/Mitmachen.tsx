const WAYS = [
  {
    title: "Fördermitglied werden",
    description:
      "Unterstützen Sie die Vereinsarbeit mit einem Mitgliedsbeitrag und ermöglichen Sie KI-Aufklärung für Betriebe, die sich Beratung sonst nicht leisten könnten.",
  },
  {
    title: "Als Betrieb teilnehmen",
    description:
      "Sie führen ein Unternehmen im Saalekreis oder der Region Halle-Leipzig? Nehmen Sie unverbindlich Kontakt auf – wir schauen gemeinsam, wo KI Ihnen wirklich hilft.",
  },
  {
    title: "Wissen & Zeit einbringen",
    description:
      "Ob Ehrenamt, Workshops oder Fachwissen: Wer Lust hat, die digitale Teilhabe in der Region mitzugestalten, ist bei uns willkommen.",
  },
];

export default function Mitmachen() {
  return (
    <section id="mitmachen" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-800">
          Mitmachen
        </h2>
        <p className="mt-2 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Gemeinsam mehr Wirkung erzielen
        </p>
        <p className="mt-4 max-w-2xl text-slate-600">
          Ein Verein lebt von seinen Mitgliedern. Es gibt verschiedene Wege,
          die Arbeit für den Saalekreis zu unterstützen.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {WAYS.map((way) => (
            <div key={way.title} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-bold text-slate-900">{way.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {way.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
