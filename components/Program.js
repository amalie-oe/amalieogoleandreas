const days = [
  {
    date: "Fredag 6. august",
    items: [
      {
        time: "15:00 - 17:00",
        title: "Ankomst & innsjekk",
        text: "Innsjekk på hotellet er tilgjengelig fra kl. 15:00.",
      },
      {
        time: "17:00",
        title: "Svabergspils",
        text: "Hvis værgudene spiller på lag, blir det pils og bobler ved hytta til Amalie. Vi ordner båttransport fra hotellet til Lyngør.",
      },
      {
        time: "19:00",
        title: "Velkomstmiddag på Seilmakeren",
        text: "Pizza, noe godt i glasset og tid til å bli kjent med hverandre før den store dagen. Vi ordner båttransport tilbake til hotellet.",
      },
    ],
  },
  {
    date: "Lørdag 7. august",
    items: [
      {
        time: "08:00 - 10:00",
        title: "Frokost",
        text: "Frokost serveres i hotellets restaurant fra kl. 08:00-10:00",
      },
      {
        time: "14:30",
        title: "Vielse",
        text: "Vielsen finner sted i Dypvåg kirke. Transport til og fra kirken ordnes av oss, og informasjon om oppmøtested og avgang fra hotellet kommer nærmere bryllupet.",
      },
      {
        time: "15:30",
        title: "Mingling og seillas",
        text: "Etter vielsen tar vi sjøveien til Lyngørporten. Her blir det tid til mingling, noe godt i glasset og en liten smak av sørlandssommeren.",
      },
      {
        time: "17:30",
        title: "Middag og fest",
        text: "Bryllupsmiddag med påfølgende fest på Hotell Lyngørporten.",
      },
    ],
  },
  {
    date: "Søndag 8. august",
    items: [
      {
        time: "09:00 - 11:00",
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
