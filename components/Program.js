const days = [
  {
    date: "Fredag 6. august",
    items: [
      {
        time: "16:00",
        title: "Ankomst & innsjekk",
        text: "Kom deg ut til Lyngør, finn deg til rette og nyt utsikten (placeholder).",
      },
      {
        time: "19:00",
        title: "Velkomstmiddag",
        text: "Uformell samling for tilreisende gjester (placeholder).",
      },
    ],
  },
  {
    date: "Lørdag 7. august",
    items: [
      {
        time: "13:00",
        title: "Vielse",
        text: "Våre løfter ved sjøen (placeholder sted).",
      },
      {
        time: "14:00",
        title: "Mingling & foto",
        text: "Bobler og små biter mens vi fanger øyeblikkene.",
      },
      {
        time: "17:00",
        title: "Bryllupsmiddag",
        text: "God mat, varme taler og gode historier.",
      },
      {
        time: "21:00",
        title: "Fest & dans",
        text: "En avslappet kveld med dans til langt på natt.",
      },
    ],
  },
  {
    date: "Søndag 8. august",
    items: [
      {
        time: "11:00",
        title: "Frokost & farvel",
        text: "Felles brunsj før hjemreise (placeholder).",
      },
    ],
  },
];

const Anchor = () => (
  <svg viewBox="0 0 80 120" className="h-40 w-auto" fill="none" stroke="#67717E" strokeWidth="2">
    <circle cx="40" cy="16" r="9" />
    <path d="M40 25v80" strokeLinecap="round" />
    <path d="M20 45h40" strokeLinecap="round" />
    <path d="M12 82c0 18 14 26 28 26s28-8 28-26" strokeLinecap="round" />
    <path d="M12 82l-7 6 9 2M68 82l7 6-9 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Program() {
  return (
    <section id="program" className="section-padding bg-linen">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p className="eyebrow">Helgen</p>
          <h2 className="mt-3 heading text-4xl text-steel md:text-5xl">
            Program
          </h2>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-[auto,1fr]">
          <div className="hidden justify-center pt-6 text-slate md:flex">
            <Anchor />
          </div>

          <div className="space-y-12">
            {days.map((day) => (
              <div key={day.date}>
                <p className="font-display text-2xl text-slate">{day.date}</p>
                <ul className="mt-5 space-y-5">
                  {day.items.map((item) => (
                    <li
                      key={item.time}
                      className="flex flex-col gap-1 border-b border-dotted border-steel/40 pb-4 sm:flex-row sm:items-baseline sm:gap-6"
                    >
                      <span className="w-20 shrink-0 font-display text-xl text-steel">
                        {item.time}
                      </span>
                      <div>
                        <p className="text-lg text-steel">{item.title}</p>
                        <p className="mt-1 text-sm text-slate">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
