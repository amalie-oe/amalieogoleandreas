const RingsIcon = () => (

  <svg

    viewBox="0 0 64 64"

    className="mx-auto h-12 w-12"

    fill="none"

    stroke="#67717E"

    strokeWidth="1.4"

  >

    <circle cx="26" cy="39" r="13" />

    <circle cx="40" cy="30" r="13" />

    <path d="M22 20l4 6.5L30 20" />

    <path d="M26 20h4" strokeLinecap="round" />

  </svg>

);

 

const Divider = () => (

  <div className="mx-auto mt-10 flex items-center justify-center gap-3">

    <span className="h-px w-12 bg-steel/30" />

    <svg width="9" height="9" viewBox="0 0 8 8" className="text-steel/50">

      <path d="M4 0l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="currentColor" />

    </svg>

    <span className="h-px w-12 bg-steel/30" />

  </div>

);

 

export default function About() {

  return (

    <section id="om" className="section-padding bg-mist">

      <div className="mx-auto max-w-3xl px-6">

        <div className="relative overflow-hidden rounded-sm border border-steel/25 bg-linen/25 px-8 py-14 text-center shadow-[0_24px_60px_-32px_rgba(56,65,79,0.55)] md:px-16 md:py-16">

          {/* indre hårlinje-ramme for invitasjonsfølelse */}

          <span className="pointer-events-none absolute inset-3 rounded-sm border border-steel/15" />

 

          <div className="relative">

            <RingsIcon />

 

            <p className="eyebrow mt-6">Velkommen</p>

 

            <p className="mt-5 font-display text-2xl italic text-steel md:text-3xl">

              Kjære familie og venner

            </p>

 

            <div className="mx-auto mt-6 max-w-xl space-y-5 text-[15px] leading-relaxed text-slate">

              <p>

                Vi skal gifte oss, og håper du vil dele den store dagen med oss

                på Lyngør! Her har Amalie tilbrakt somrene så lenge hun kan

                huske, ytterst i skjærgården med sjø og svaberg så langt øyet

                rekker.

              </p>

              <p>

                Feiringen går over hele helgen, med vielse i Dypvåg kirke lørdag

                7. august.

              </p>

              <p>

                Svar utbedes innen 15. februar 2027. Svarskjema og praktisk

                informasjon finner du her på denne siden.

              </p>

            </div>

 

            <Divider />

 

            <p className="mt-6 heading text-3xl text-steel md:text-4xl">

              Amalie

              <span className="mx-2 font-light text-stone">&amp;</span>

              Ole Andreas

            </p>

            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-stone">

              6.–8. august 2027 · Lyngør

            </p>

          </div>

        </div>

      </div>

    </section>

  );

}
