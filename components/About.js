const EnvelopeIcon = () => (
  <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke="#45505F" strokeWidth="1.4">
    <rect x="12" y="18" width="40" height="28" rx="2" />
    <path d="M12 22l20 14 20-14" />
  </svg>
);

const GlassIcon = () => (
  <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke="#45505F" strokeWidth="1.4">
    <path d="M14 12h36L34 34v16" strokeLinejoin="round" />
    <path d="M24 50h20" strokeLinecap="round" />
    <circle cx="44" cy="16" r="3" />
  </svg>
);

const HotelIcon = () => (
  <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke="#45505F" strokeWidth="1.4">
    <path d="M12 50V20h40v30" />
    <path d="M12 32h40" />
    <path d="M20 26h8v6h-8z" />
    <path d="M36 26h8v6h-8z" />
    <path d="M12 50h40" />
  </svg>
);

const items = [
  {
    icon: <HotelIcon />,
    title: "Overnatting",
    text: (<> Vi har booket hele Hotell Lyngørporten til bryllupshelgen. <strong>Egenandelen er 2 000 kr per person</strong> og inkluderer overnatting i to netter, frokost begge dager og enkel lunsj lørdag. Praktisk informasjon om overnatting og betaling finner du i RSVP-skjemaet. </>),
  },
  {
    icon: <EnvelopeIcon />,
    title: "RSVP",
    text: (<> Vi håper du vil feire dagen sammen med oss! RSVP-skjemaet finner du nederst på siden eller ved å trykke på knappen under. Her gir du beskjed om du kan komme, og registrerer overnatting og annen praktisk informasjon. <strong>Svar innen 15. februar 2027</strong>.</>),
  },
  {
    icon: <GlassIcon />,
    title: "Taler og innslag",
    text: (<> Ønsker du å holde tale eller bidra med et innslag i løpet av bryllupshelgen? Ta kontakt med vår toastmaster Sven Ole på <strong>XXX XX XXX.</strong></>),
  },
];

export default function About() {
  return (
    <section id="om" className="section-padding bg-mist">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="eyebrow">Detaljer</p>
          <h2 className="mt-3 heading text-4xl text-steel md:text-5xl">
            Om bryllupet
          </h2>
        </div>

        <div className="grid gap-12 text-center md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              {item.icon}
              <h3 className="mt-5 font-display text-2xl text-steel">
                {item.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate">
                {item.text}
              </p>
              {item.title === "RSVP" && (
                <a
                  href="#rsvp"
                  className="mt-6 inline-block rounded-full border border-steel/40 px-8 py-3 text-xs uppercase tracking-[0.2em] text-steel transition-colors hover:bg-steel hover:text-white"
                >
                  RSVP
                </a>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
