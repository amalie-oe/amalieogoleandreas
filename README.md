# Amalie & Ole Andreas - Bryllup på Lyngør

Bryllupsside bygget med Next.js (App Router) og Tailwind CSS. Rustikk/kystnær
stil, på norsk. One-page med seksjonene: Hjem, Program, Praktisk info og RSVP.

## Kjøre lokalt

Krever Node.js (installert). I PowerShell:

```powershell
cd bryllup-lyngor
npm install
npm run dev
```

Åpne http://localhost:3000 i nettleseren.

## Hvor endrer jeg innhold?

Alt innhold ligger i `components/`:

| Fil | Hva du endrer |
| --- | --- |
| `components/Hero.js` | Forsiden: navn, dato, tekst, "gifte oss"-tekst |
| `components/Program.js` | Programmet: dager, tidspunkter og innslag (i `days`) |
| `components/PraktiskInfo.js` | Spørsmål og svar (i `faqs`) |
| `components/Rsvp.js` | RSVP-skjema (se under) |
| `components/Footer.js` | Bunntekst |

Fargepaletten endres i `tailwind.config.js` (cream, sand, driftwood, sea,
deepsea, terracotta).

## Legge inn RSVP-skjema

1. Lag et skjema i Google Forms eller Tally.
2. Hent embed-lenken:
   - **Google Forms:** Åpne skjema → `Send` → `</>`-ikonet → kopier `src`-lenken
     fra iframe-koden (den slutter på `?embedded=true`).
   - **Tally:** `Share` → `Embed` → kopier lenken.
3. Åpne `components/Rsvp.js` og lim lenken inn i:

   ```js
   const FORM_EMBED_URL = "DIN_LENKE_HER";
   ```

Skjemaet vises automatisk når lenken er satt.

## Legge inn eget forsidebilde (valgfritt)

1. Legg bildet i mappen `public/`, f.eks. `public/hero.jpg`.
2. I `components/Hero.js`, bytt gradient-`div`-en mot en bakgrunn:
   `className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center"`.

## Deploye til Vercel

1. Lag en konto på https://vercel.com (gratis).
2. Legg koden i et GitHub-repo (anbefalt), eller bruk Vercel CLI:

   **Via GitHub:**
   - Last opp mappen til et nytt GitHub-repo.
   - I Vercel: `Add New` → `Project` → importer repoet → `Deploy`.
   - Vercel oppdager Next.js automatisk. Ingen ekstra konfigurasjon trengs.

   **Via Vercel CLI:**
   ```powershell
   npm i -g vercel
   vercel
   ```

3. Etter deploy får du en `.vercel.app`-adresse. Egen domene (f.eks.
   `amalie-og-oleandreas.no`) legges til under `Settings` → `Domains`.

Hver gang du pusher endringer til GitHub, bygger Vercel siden på nytt automatisk.
