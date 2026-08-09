# KI im Saalekreis e.V. – Website

Webauftritt von **KI im Saalekreis e.V.** (in Gründung), einem gemeinnützigen
Verein, der mittelständischen Unternehmen sowie Schulen im Saalekreis und
der Region Halle-Leipzig praktisches KI-Wissen und DSGVO-konforme
Umsetzungsbegleitung vermittelt.

## Inhalt

- **Mission & Angebote** – Vereinszweck, AI Voice Agents, Corporate LLM & RAG
- **KI an Schulen** – Workshops, Lehrkräfte-Fortbildung, Elternabende
- **KI-Tools** (`/ki-tools`) – kuratierte, praxisnahe Übersicht nützlicher KI-Werkzeuge
- **Blog** (`/blog`) – Einblicke in die Vereinsarbeit, mit Tag-Filter, Lesezeit
  und Beitragsnavigation
- **Qualifikationen** – verifizierbare Fortbildungsnachweise

## Tech-Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com)

## Entwicklung

```bash
npm install
npm run dev
```

Anschließend [http://localhost:3000](http://localhost:3000) öffnen.

## Build

```bash
npm run build
```

## Deployment

Siehe [DEPLOYMENT.md](DEPLOYMENT.md) für die Schritt-für-Schritt-Anleitung
zum Deployment auf Vercel.

## Verwandtes Projekt

Der Verein betreibt außerdem ein offenes technisches Referenzprojekt: einen
vollständig lokalen KI-Telefonassistenten auf Basis von Mistral 7B –
[KI-Telefonassistent-mit-Mistral-7B](https://github.com/buech-dev/KI-Telefonassistent-mit-Mistral-7B).
