const faqs = [
  {
    q: "Hvordan kommer jeg meg til Lyngør?",
    a: "Lyngør er en øy uten bilvei. Kjør til Gjeving og ta båt/vannbuss ut til Lyngør. Detaljert reisebeskrivelse og båttider legges ut her (placeholder).",
  },
  {
    q: "Hvor kan jeg parkere?",
    a: "Det er parkering på fastlandet ved Gjeving brygge. Adresse og pris kommer (placeholder).",
  },
  {
    q: "Hvor bor jeg?",
    a: "Vi anbefaler overnatting på Lyngør eller i nærområdet. Forslag til hoteller, gjestehus og hytter kommer her (placeholder).",
  },
  {
    q: "Hva er kleskoden?",
    a: "Penklær med et kystnært preg. Ta med behagelige sko for brygger og svaberg (placeholder).",
  },
  {
    q: "Kan jeg ta med barn?",
    a: "Gi oss beskjed i RSVP-skjemaet, så finner vi en løsning (placeholder).",
  },
  {
    q: "Allergier og spesielle behov?",
    a: "Noter det i RSVP-skjemaet, så tar vi hensyn til det (placeholder).",
  },
];

export default function PraktiskInfo() {
  return (
    <section id="praktisk" className="section-padding bg-mist">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <p className="eyebrow">Godt å vite</p>
          <h2 className="mt-3 heading text-4xl text-steel md:text-5xl">
            Praktisk info
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group border-b border-dotted border-steel/40 pb-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-xl text-steel">
                {faq.q}
                <span className="text-slate transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
