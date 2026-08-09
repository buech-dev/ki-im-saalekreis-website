export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "warum-wir-ki-an-schulen-bringen-wollen",
    title: "Warum wir KI an Schulen bringen wollen",
    date: "2026-08-01",
    excerpt:
      "Kinder wachsen mit KI auf, ohne zu verstehen, wie sie funktioniert. Wir wollen das ändern – mit Workshops, die zeigen statt nur zu warnen.",
    tags: ["Schulen", "Vereinsarbeit"],
    content: [
      "Kinder und Jugendliche nutzen heute selbstverständlich Chatbots, Bild-KI und KI-gestützte Apps – oft ganz ohne zu verstehen, was im Hintergrund passiert. Diese Wissenslücke wollen wir als Verein schließen, bevor sie zu einer digitalen Kluft zwischen Generationen wird.",
      "Unser Ansatz ist bewusst praktisch: Statt abstrakter Warnungen vor 'der KI' wollen wir mit Schulklassen gemeinsam ausprobieren, wie ein Sprachmodell tatsächlich funktioniert, wo es Fehler macht, und warum ein kritischer Blick auf die Ergebnisse dazugehört. Wissen statt Angst, Neugier statt Verbot.",
      "Wir befinden uns aktuell im Aufbau des Vereins und stehen am Anfang dieser Arbeit. Wenn Sie an einer Schule im Saalekreis unterrichten oder Kontakt zu einer Schule herstellen können, freuen wir uns über eine Nachricht – gemeinsam entwickeln wir passende Formate für unterschiedliche Altersgruppen.",
    ],
  },
  {
    slug: "ki-grundwissen-fuer-familien",
    title: "KI-Grundwissen für Familien: Chancen und Risiken einfach erklärt",
    date: "2026-08-01",
    excerpt:
      "Was Eltern wissen sollten, bevor ihre Kinder mit ChatGPT & Co. arbeiten – ohne Fachchinesisch.",
    tags: ["Familien", "Aufklärung"],
    content: [
      "Viele Eltern fühlen sich unsicher, wenn ihre Kinder KI-Werkzeuge für Hausaufgaben oder einfach zum Spaß nutzen. Das ist verständlich: Die Technologie entwickelt sich schneller, als Aufklärung dazu entstehen kann.",
      "Ein paar Grundregeln helfen bereits viel: KI-Antworten sind wahrscheinlich richtig klingend, aber nicht automatisch korrekt. Persönliche Daten gehören nicht in einen Chat mit einem KI-Dienst, dessen Datenverarbeitung man nicht kennt. Und: Ein Werkzeug zu benutzen ersetzt nicht, das Ergebnis zu verstehen.",
      "Wir planen regelmäßige Elternabende zu genau diesen Themen – verständlich, ohne Verkaufsabsicht und mit Raum für Fragen. Sobald Termine feststehen, kündigen wir sie hier an.",
    ],
  },
  {
    slug: "der-verein-nimmt-form-an",
    title: "Der Verein nimmt Form an",
    date: "2026-08-01",
    excerpt:
      "Ein kurzer Einblick, warum wir 'KI im Saalekreis' als gemeinnützigen Verein aufbauen und wie es jetzt weitergeht.",
    tags: ["Vereinsarbeit"],
    content: [
      "KI im Saalekreis e.V. befindet sich aktuell in Gründung. Der Gedanke dahinter: KI-Kompetenz sollte nicht davon abhängen, ob sich ein Betrieb oder eine Familie eine teure Beratung leisten kann.",
      "Als Verein reinvestieren wir Mitgliedsbeiträge und mögliche Fördermittel direkt in die Vereinsarbeit – in Workshops für Schulen, Sprechstunden für kleine Betriebe und frei zugängliches Wissen wie unsere KI-Tools-Übersicht auf dieser Website.",
      "In den kommenden Monaten kümmern wir uns um die formale Gründung, erste Kontakte zu Schulen und Betrieben in der Region sowie den Aufbau eines kleinen Kreises an Mitstreitenden. Wer mitmachen möchte, ist herzlich willkommen.",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

const WORDS_PER_MINUTE = 200;

export function getReadingMinutes(post: Post): number {
  const wordCount = post.content.join(" ").trim().split(/\s+/).length;
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}

export function getAdjacentPosts(slug: string): {
  previous: Post | null;
  next: Post | null;
} {
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }
  return {
    previous: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  };
}
