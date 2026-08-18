const RingsIcon = () => (
  <svg
    viewBox="0 0 64 64"
    className="mx-auto h-16 w-16"
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

export default function About() {
  return (
    <section
      id="om"
      className="bg-mist px-6 pb-20 pt-10 md:px-12 md:pb-28 md:pt-14"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <RingsIcon />
        <h2 className="mt-6 heading text-4xl text-steel md:text-5xl">
          Velkommen til bryllup!
        </h2>
        <div className="mx-auto mt-8 max-w-xl space-y-5 text-[15px] leading-relaxed text-slate">
          <p>Kjære familie og venner,</p>
          <p>
            Vi skal gifte oss, og håper du vil dele den store dagen med oss på Lyngør! 
            Her har Amalie tilbrakt somrene så lenge hun kan huske, 
            ytterst i skjærgården med sjø og svaberg så langt øyet rekker.
          </p>

          <p>
            Feiringen går over hele helgen, med vielse i Dypvåg kirke lørdag 7. august.
          </p>
          <p>
            Svar utbedes innen 15. februar 2027. Svarskjema og praktisk
            informasjon finner du her på denne siden.
          </p>
          <p>
          Vi gleder oss til å feire sammen med dere!
          </p>
        </div>
        <p className="mt-8 font-display text-lg italic text-steel">
          Amalie &amp; Ole Andreas
        </p>
      </div>
    </section>

  );

}
