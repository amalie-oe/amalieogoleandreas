# Veiledning: bryllupssiden vår 💍

Hei! Dette er nettsiden vår til bryllupet på Lyngør. Denne veiledningen tar deg
gjennom alt steg for steg, uten at du trenger å kunne kode. Ta det i ditt eget
tempo, og hopp gjerne rett til delen du trenger.

Innhold:
1. Hva du har fått
2. Førstegangs-oppsett (gjøres én gang)
3. Se siden på din egen maskin
4. Endre innhold (tekst, program, spørsmål og svar)
5. Legge inn RSVP-skjema
6. Legge inn et forsidebilde (valgfritt)
7. Publisere siden på nett (Vercel)
8. Ordliste + hjelp hvis noe kræsjer

---

## 1. Hva du har fått

En mappe som heter `bryllup-lyngor`. Inni ligger alle filene til nettsiden.
Det viktigste for deg er mappen som heter **`components`** – det er der all
tekst og innhold bor. Du trenger nesten aldri å røre resten.

Anbefalt gratis-program for å redigere: **Visual Studio Code** (kalt "VS Code").
Last ned her: https://code.visualstudio.com → installer → åpne det → velg
`File` → `Open Folder…` → velg mappen `bryllup-lyngor`.

---

## 2. Førstegangs-oppsett (gjøres én gang)

Nettsiden trenger et lite verktøy som heter **Node.js** for å kjøre på maskinen.

1. Gå til https://nodejs.org og last ned versjonen merket **LTS**.
2. Installer (bare trykk "Neste/Next" hele veien).
3. Åpne mappen i VS Code. Øverst i menyen: `Terminal` → `New Terminal`.
   Det dukker opp et lite skrivefelt nederst.
4. Skriv dette og trykk Enter (det henter delene siden er bygget av):

   ```
   npm install
   ```

   La den jobbe et par minutter til den er ferdig. Dette gjør du bare én gang.

---

## 3. Se siden på din egen maskin

I samme terminal-felt, skriv:

```
npm run dev
```

Etter noen sekunder står det noe slikt som `Local: http://localhost:3000`.
Hold `Ctrl` og klikk på lenken, eller åpne `http://localhost:3000` i nettleseren.
Nå ser du siden! 🎉

- Mens dette kjører kan du endre tekst i filene, lagre (`Ctrl + S`), og siden
  oppdaterer seg selv i nettleseren med en gang.
- For å stoppe: klikk i terminal-feltet og trykk `Ctrl + C`.

---

## 4. Endre innhold

All tekst ligger i mappen `components`. Åpne filen, finn teksten mellom
anførselstegn `" "`, skriv om, og lagre. **Ikke** slett anførselstegn, komma
eller krøllparenteser rundt – bare selve teksten inni.

| Fil | Hva du endrer der |
| --- | --- |
| `components/Hero.js` | Forsiden: navn, datoen "6.-8. august", "Lyngør", knappen |
| `components/About.js` | De tre boksene: Vielsen, Festen, Kleskode |
| `components/Program.js` | Programmet: dager, klokkeslett og hva som skjer |
| `components/PraktiskInfo.js` | Spørsmål og svar (FAQ) |
| `components/Rsvp.js` | RSVP – her limer du inn skjema-lenken (se punkt 5) |
| `components/Footer.js` | Teksten helt nederst på siden |

**Eksempel – bytte et klokkeslett i programmet.** I `components/Program.js`
finner du linjer som ser slik ut:

```
{
  time: "13:00",
  title: "Vielse",
  text: "Våre løfter ved sjøen (placeholder sted).",
},
```

Vil du endre tid, tittel eller tekst, skriver du bare om det som står mellom
anførselstegnene, f.eks. `time: "14:30"`. Lagre, så er det endret.

**Legge til et nytt punkt i programmet:** kopier en hel slik blokk (fra `{` til
`},`), lim inn rett under, og endre teksten. Pass på at kommaet etter `}` blir
med.

> Tips: Ordet "placeholder" i tekstene betyr bare "fyll inn her senere". Bytt
> dem ut etter hvert som ting spikres.

---

## 5. Legge inn RSVP-skjema

Vi bruker et ferdig skjema (Google Forms eller Tally) som gjestene fyller ut.

1. Lag skjemaet:
   - **Google Forms:** gå til https://forms.google.com, lag skjemaet, trykk
     `Send` → velg `< >`-ikonet → kopier lenken som står i `src="…"`
     (den slutter på `?embedded=true`).
   - **Tally:** https://tally.so → lag skjema → `Share` → `Embed` → kopier lenken.
2. Åpne `components/Rsvp.js`. Helt øverst står det:

   ```
   const FORM_EMBED_URL = "";
   ```

3. Lim lenken inn mellom anførselstegnene:

   ```
   const FORM_EMBED_URL = "https://docs.google.com/forms/d/e/XXXX/viewform?embedded=true";
   ```

4. Lagre. Skjemaet dukker opp på siden automatisk.

Forslag til felter i skjemaet: navn, kommer/kommer ikke, antall personer,
allergier/matbehov, og eventuelt overnattingsbehov.

---

## 6. Legge inn et forsidebilde (valgfritt)

1. Legg bildefilen i mappen `public` (lag mappen hvis den ikke finnes), og kall
   den f.eks. `hero.jpg`.
2. I `components/Hero.js`, finn linjen som begynner med
   `<div className="absolute inset-0 bg-gradient-to-b …`. Bytt den ut med:

   ```
   <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center" />
   ```

3. Lagre og se resultatet. (Behold gjerne mørk tekst-lesbarhet – si fra til meg
   om det blir vanskelig å lese teksten, så justerer jeg.)

---

## 7. Publisere siden på nett (Vercel)

Vercel er gratis og gjør siden tilgjengelig på en ekte nettadresse.

Enkleste vei:

1. Lag konto på https://vercel.com (logg gjerne inn med Google/GitHub).
2. Last koden opp til **GitHub** (gratis lagringssted for kode):
   - Lag konto på https://github.com
   - Følg GitHubs veiviser "Create a new repository", og last opp mappen
     `bryllup-lyngor`. (VS Code kan hjelpe: menyen `Source Control` til venstre.)
3. I Vercel: trykk `Add New` → `Project` → velg repoet ditt → `Deploy`.
   Vercel skjønner selv at det er en Next.js-side; du trenger ikke stille inn noe.
4. Etter et par minutter får du en adresse som `…​.vercel.app`. Del den med
   gjestene!

Hver gang du senere endrer tekst og laster opp til GitHub, oppdaterer Vercel
siden automatisk.

Egen adresse (f.eks. `amalie-og-oleandreas.no`) kan legges til i Vercel under
`Settings` → `Domains` (koster litt hvis du kjøper eget domene).

> Har du ikke lyst til å styre med GitHub? Si fra, så kan vi bruke Vercel sitt
> eget opplastingsverktøy i stedet.

---

## 8. Ordliste + hjelp

- **Node.js** – motoren som lar siden kjøre på maskinen (punkt 2).
- **Terminal** – skrivefeltet nederst i VS Code der du skriver kommandoer.
- **npm install** – henter delene siden er bygget av (én gang).
- **npm run dev** – starter en forhåndsvisning på din egen maskin.
- **Deploy / publisere** – legge siden ut på en ekte nettadresse.
- **Repo / GitHub** – nettlager for koden.

**Hvis noe kræsjer:**
- Rødt i terminalen? Trykk `Ctrl + C`, og skriv `npm run dev` på nytt.
- Siden ser rar ut etter en endring? Du har sannsynligvis slettet et
  anførselstegn, komma eller en parentes. Trykk `Ctrl + Z` for å angre til det
  virker igjen.
- Fortsatt stuck? Ta en skjermdump av feilen og send til meg. 💛

Lykke til – dette er lettere enn det ser ut! 🌊
