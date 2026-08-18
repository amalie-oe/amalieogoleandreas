const days = [
  {
    date: "Fredag 6. august",
    items: [
      {
        time: "15:00",
        title: "Ankomst & innsjekk",
        text: "Innsjekk på hotellet er tilgjengelig fra kl. 15:00.",
      },
      {
        time: "17:00",
        title: "Svabergspils",
        text: "Hvis værgudene spiller på lag, blir det svabergspils ved hytta til Amalie. Vi ordner båttransport til og fra Lyngør.",
      },
      {
        time: "19:00",
        title: "Velkomstmiddag på Seilmakeren",
        text: "Pizza, noe godt i glasset og tid til å bli kjent med hverandre før den store dagen. Vi ordner transport tilbake til hotellet.",
      },
    ],
  },
  {
    date: "Lørdag 7. august",
    items: [
      {
        time: "09:00",
        title: "Frokost",
        text: "Frokost serveres i hotellets restaurant fra kl. 08:00-10:00",
      },
      {
        time: "14:30",
        title: "Vielse",
        text: "Vi sier ja til hverandre i Dypvåg kirke. Transport til og fra kirken ordnes av oss.",
      },
      {
        time: "15:30",
        title: "Mingling og seillas",
        text: "Etter vielsen tar vi sjøveien til Lyngørporten. Her blir det tid til mingling, noe godt i glasset og en liten smak av sørlandssommeren.",
      },
      {
        time: "17:30",
        title: "Bryllupsmiddag",
        text: "Tre-retters middag, vin i glasset og taler.",
      },
      {
        time: "21:30",
        title: "Fest og dans",
        text: "Etter middag og kake åpner vi dansegulvet og skrur opp tempoet.",
      },
    ],
  },
  {
    date: "Søndag 8. august",
    items: [
      {
        time: "09:00",
        title: "Frokost & farvel",
        text: "Frokost før vi sier takk for helgen og setter kursen hjemover.",
      },
    ],
  },
];

export default function Program() {
  return (
    <section id="program" className="section-padding bg-linen">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <p className="eyebrow">Helgen</p>
          <h2 className="mt-3 heading text-4xl text-steel md:text-5xl">
            Program
          </h2>
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
    </section>
  );
}
