const faqs = [
  {
    q: "Hvordan kommer jeg meg til Lyngørporten?",
    a: "Vi anbefaler å komme med bil, og det er god parkeringskapasitet ved hotellet. Ønsker du å komme med båt, kan båtplass avtales direkte med Lyngørporten Hotell. Det er også mulig å ta buss til Vinterkjær, men da må du selv sørge for transport videre til hotellet.",
  },
  {
    q: "Hvor skal jeg bo?",
    a: "Vi har booket hele Hotell Lyngørporten til bryllupshelgen. Informasjon om overnatting og betaling finner du i RSVP-skjemaet.",
  },
  {
    q: "Hva er klesskoden?",
    a: "Fredag: Sommerlig pent, f.eks. kjole + strikkegenser, skjorte + chinos eller lindress. Lørdag: Smoking/mørk dress/lang kjole.",
  },
  {
    q: "Noe spesielt jeg bør pakke?",
    a: "Pakk for både sol og sørlandsvær. En strikkegenser og vindjakke kan være god å ha med når kvelden kommer, og badetøy hvis du får lyst på en dukkert. Til fredagens svabergspils anbefaler vi flate sko.",
  },
  {
    q: "Har du allergier eller andre behov vi bør kjenne til?",
    a: "Gi beskjed i RSVP-skjemaet, så gjør vi vårt beste for å tilrettelegge.",
  },
  {
    q: "Ønsker du å holde tale eller bidra med et innslag?",
    a: "Ta gjerne kontakt med vår toastmaster, Sven Ole, på XXX XX XXX",
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
