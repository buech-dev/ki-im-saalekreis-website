const CONTACT_DETAILS = [
  { label: "E-Mail", value: "info4tbuechner@gmail.com", href: "mailto:info4tbuechner@gmail.com" },
  { label: "Standort", value: "06246 Bad Lauchstädt (Saalekreis)" },
  { label: "Einsatzgebiet", value: "Saalekreis & Region Halle-Leipzig" },
];

export default function Kontakt() {
  return (
    <section id="kontakt" className="bg-blue-900 py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-200">
          Kontakt
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Lassen Sie uns über Ihren Betrieb sprechen
        </p>
        <p className="mx-auto mt-4 max-w-xl text-blue-100">
          Ob als teilnehmender Betrieb, Fördermitglied oder mit einer
          allgemeinen Frage – im ersten Gespräch hören wir erstmal zu.
          Unverbindlich und ohne Fachchinesisch.
        </p>

        <a
          href="mailto:info4tbuechner@gmail.com?subject=Kontaktaufnahme%20KI%20im%20Saalekreis%20e.V."
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-blue-900 transition hover:bg-blue-50"
        >
          Jetzt Kontakt aufnehmen
        </a>

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 border-t border-white/15 pt-10 text-left sm:grid-cols-3">
          {CONTACT_DETAILS.map((detail) => (
            <div key={detail.label}>
              <dt className="text-xs font-semibold uppercase tracking-wide text-blue-300">
                {detail.label}
              </dt>
              <dd className="mt-1 text-sm text-blue-50">
                {detail.href ? (
                  <a href={detail.href} className="hover:underline">
                    {detail.value}
                  </a>
                ) : (
                  detail.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
