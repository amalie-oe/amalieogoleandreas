// Lim inn embed-lenken til skjemaet ditt her (Google Form eller Tally).
// Google Form: Åpne skjema -> Send -> ikonet </> -> kopier src-lenken fra iframe.
// Tally: Share -> Embed -> kopier lenken.
const FORM_EMBED_URL = "https://docs.google.com/forms/d/e/1FAIpQLScWxwnkozMl5HpWwNmY-A4j72CDyZP9us5Iak4DM55zShyMaw/viewform?usp=dialog"; // f.eks. "https://docs.google.com/forms/d/e/XXXX/viewform?embedded=true"

export default function Rsvp() {
  return (
    <section id="rsvp" className="section-padding bg-linen">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Kan du komme i bryllupet?</p>
        <h2 className="mt-3 heading text-3xl text-steel md:text-5xl">RSVP</h2>

        <div className="mt-12">
          {FORM_EMBED_URL ? (
            <iframe
              src={FORM_EMBED_URL}
              title="RSVP-skjema"
              className="h-[1300px] w-full rounded-lg border border-stone"
            >
              Laster skjema&hellip;
            </iframe>
          ) : (
            <div className="rounded-lg border-2 border-dashed border-slate/50 bg-mist/60 p-12 text-slate">
              <p className="font-display text-2xl text-steel">
                Skjema kommer her
              </p>
              <p className="mt-3 text-sm">
                Lim inn embed-lenken din i variabelen{" "}
                <code className="rounded bg-white px-1 py-0.5 text-steel">
                  FORM_EMBED_URL
                </code>{" "}
                i filen <code>components/Rsvp.js</code>.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
