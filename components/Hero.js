import Lighthouse from "./Lighthouse";

export default function Hero() {
  return (
    <section
      id="hjem"
      className="relative flex min-h-screen flex-col items-center justify-end overflow-hidden bg-navy px-6 pb-20 pt-24 text-mist"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-steel/60 via-navy to-navy" />
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_50%_15%,#67717E_0,transparent_45%)]" />

      <Lighthouse />

      <div className="relative z-10 flex flex-col items-center text-center">
       <h1 className="heading text-4xl leading-tight md:text-7xl"> 
          <span className="whitespace-nowrap"> 
            Amalie<span className="mx-3 font-light text-stone">&amp;</span> 
          </span> 
          <wbr /> 
          <span className="whitespace-nowrap">Ole Andreas</span> 
        </h1>

        <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-4">
          <span className="h-px flex-1 bg-mist/40" />
          <p className="text-sm uppercase tracking-[0.3em]">6.-8. august</p>
          <span className="h-px flex-1 bg-mist/40" />
        </div>
        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-stone">
          Lyngør / Gjeving
        </p>
        <a
          href="#rsvp"
          className="mt-6 inline-block rounded-full border border-mist/70 px-10 py-3 text-xs uppercase tracking-[0.3em] transition-colors hover:bg-mist hover:text-navy"
        >
          RSVP
        </a>
      </div>
    </section>
  );
}
