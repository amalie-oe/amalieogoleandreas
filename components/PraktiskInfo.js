const faqs = [
  {
    q: "Transport",
    a: "Vi anbefaler å komme med bil, og det er god parkeringskapasitet ved hotellet. Ønsker du å komme med båt, kan båtplass avtales direkte med Lyngørporten Hotell. Det er også mulig å ta buss til Vinterkjær, men da må du selv sørge for transport videre til hotellet.",
  },
  {
    q: "Overnatting",
    a: "Vi har booket hele Hotell Lyngørporten til bryllupshelgen. Egenandelen er 2000 kr per person og inkluderer overnatting, frokost og matpakke lørdag. Detaljer om booking og betaling finner du i RSVP-skjemaet.",
  },
  {
    q: "Kleskode",
    a: "Fredag: Sommerlig pent, f.eks. kjole + strikkegenser, skjorte + chinos eller lindress. Lørdag: Smoking/mørk dress/lang kjole.",
  },
  {
    q: "Vær og klær",
    a: "Pakk for både sol og sørlandsvær. En strikkegenser og vindjakke kan være god å ha med når kvelden kommer, og badetøy hvis du får lyst på en dukkert. Til fredagens svabergspils anbefaler vi flate sko.",
  },
  {
    q: "Allergier og behov",
    a: "Gi beskjed i RSVP-skjemaet, så gjør vi vårt beste for å tilrettelegge.",
  },
  {
    q: "Taler og innslag",
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
