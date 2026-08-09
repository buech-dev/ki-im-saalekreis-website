type Certificate = {
  title: string;
  provider: string;
  instructor: string;
  hours: string;
  date: string;
  verifyUrl: string;
};

const CERTIFICATES: Certificate[] = [
  {
    title: "PHP-Bootcamp: Vom Anfänger zum PHP-Entwickler",
    provider: "Udemy",
    instructor: "Jannis Seemann",
    hours: "16,5 Std.",
    date: "5. März 2025",
    verifyUrl: "https://ude.my/UC-77fcb52a-cf4a-47a6-a157-302558a66022",
  },
  {
    title: "Cursor AI: Learn by Building Full-Stack Next.js 15 App",
    provider: "Udemy",
    instructor: "Piotr Jura",
    hours: "4,5 Std.",
    date: "5. März 2025",
    verifyUrl: "https://ude.my/UC-e9c6319f-241b-41d3-9ee3-b1d7df9105bd",
  },
  {
    title: "Data Science & Maschinelles Lernen in Python – am Beispiel",
    provider: "Udemy",
    instructor: "Sundog Education by Frank Kane, Jannis Seemann",
    hours: "9 Std.",
    date: "5. März 2025",
    verifyUrl: "https://ude.my/UC-17c46c4a-7407-41bc-a0b2-a9235929aa46",
  },
];

export default function Qualifikationen() {
  return (
    <section id="qualifikationen" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-800">
          Fortbildung &amp; Nachweise
        </h2>
        <p className="mt-2 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Kontinuierlich am Ball
        </p>
        <p className="mt-4 max-w-2xl text-slate-600">
          Technisches Wissen veraltet schnell. Neben der praktischen Arbeit
          bilde ich mich laufend gezielt weiter – nachvollziehbar und
          überprüfbar.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.verifyUrl}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6"
            >
              <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">
                {cert.provider}
              </span>
              <h3 className="mt-3 text-base font-bold text-slate-900">
                {cert.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500">{cert.instructor}</p>
              <p className="mt-1 text-xs text-slate-400">
                {cert.hours} · {cert.date}
              </p>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm font-semibold text-blue-800 hover:text-blue-600"
              >
                Zertifikat verifizieren →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
