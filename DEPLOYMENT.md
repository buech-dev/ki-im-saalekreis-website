# Deployment auf Vercel

Kurzanleitung, um die Website live zu schalten. Dauert ca. 5 Minuten, keine
Kommandozeile nötig.

## 1. Bei Vercel anmelden

Auf [vercel.com](https://vercel.com) gehen und **"Sign Up"** wählen.
Am einfachsten mit **"Continue with GitHub"** anmelden – dann ist der
Zugriff auf das Repository direkt vorhanden.

## 2. Projekt importieren

1. Im Vercel-Dashboard auf **"Add New..." → "Project"** klicken
2. Das Repository `buech-dev/ki-im-saalekreis-website` auswählen und
   **"Import"** klicken
   - Falls es nicht in der Liste erscheint: **"Adjust GitHub App
     Permissions"** klicken und den Zugriff auf das Repo erlauben
3. Vercel erkennt Next.js automatisch – keine weiteren Einstellungen nötig

## 3. Deploy

Auf **"Deploy"** klicken und warten (ca. 1–2 Minuten). Danach erhältst du
eine Live-URL wie:

```
https://ki-im-saalekreis-website.vercel.app
```

## 4. Eigene Domain verbinden (optional)

Sobald eine Domain existiert (z. B. `ki-im-saalekreis.de`):

1. Im Vercel-Projekt zu **"Settings" → "Domains"** gehen
2. Domain eingeben und den angezeigten DNS-Eintrag beim Domain-Anbieter
   (z. B. IONOS, Namecheap) hinterlegen

## Automatische Updates

Jeder Push auf den Branch `main` löst automatisch ein neues Deployment aus –
kein manueller Schritt nötig, sobald das Projekt einmal verbunden ist.
