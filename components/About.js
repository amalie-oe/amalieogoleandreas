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
    title: "Vielsen",
    text: "Vi gifter oss ute ved sjøen på Lyngør, med havluft og skjærgård som bakteppe. Intimt og kystnært (placeholder).",
  },
  {
    icon: <GlassIcon />,
    title: "Festen",
    text: "Middag og dans følger på (placeholder sted). God mat, gode taler og kanskje en overraskelse eller to.",
  },
  {
    icon: <DressIcon />,
    title: "Kleskode",
    text: "Penklær med et kystnært preg. Ta med sko som takler brygger og svaberg (placeholder).",
  },
];

export default function About() {
  return (
    <section id="om" className="section-padding bg-mist">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="eyebrow">Om bryllupet</p>
          <h2 className="mt-3 heading text-4xl text-steel md:text-5xl">
            Om helgen
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
