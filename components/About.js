const RingsIcon = () => (
  <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke="#45505F" strokeWidth="1.4">
    <circle cx="25" cy="38" r="14" />
    <circle cx="39" cy="38" r="14" />
    <path d="M32 6l4 8h-8l4-8z" />
  </svg>
);

const GlassIcon = () => (
  <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke="#45505F" strokeWidth="1.4">
    <path d="M14 12h36L34 34v16" strokeLinejoin="round" />
    <path d="M24 50h20" strokeLinecap="round" />
    <circle cx="44" cy="16" r="3" />
  </svg>
);

const DressIcon = () => (
  <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke="#45505F" strokeWidth="1.4">
    <path d="M26 10c0 4 12 4 12 0" />
    <path d="M26 10l-6 12 6 4-6 26h28l-6-26 6-4-6-12" strokeLinejoin="round" />
  </svg>
);

const items = [
  {
    icon: <RingsIcon />,
    title: "Overnatting",
    text: "Vi har booket hele Hotell Lyngørporten til bryllupshelgen. Vi fordeler gjestene på rom, og egenandelen er 2 000 kr per person. Praktisk informasjon om overnatting og betaling finner du i RSVP-skjemaet.",
  },
  {
    icon: <GlassIcon />,
    title: "RSVP",
    text: "Vi håper du vil feire dagen sammen med oss! RSVP-skjemaet finner du nederst på siden eller via RSVP-knappen i fanen øverst. Her registrerer du overnatting og annen praktisk informasjon. Svar innen 15. februar 2027.",
  },
  {
    icon: <GlassIcon />,
    title: "Taler og innslag",
    text: "Ønsker du å holde tale eller bidra med et innslag i løpet av bryllupshelgen, kan du kontakt med vår toastmaster Sven Ole på XXX XX XXX.",
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
