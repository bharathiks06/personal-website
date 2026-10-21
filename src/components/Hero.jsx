import heroBg from "../assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-fixed bg-contain bg-no-repeat bg-center opacity-90"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black" />

      <div className="relative z-10 max-w-4xl">
        <p className="text-rose-500 text-sm uppercase tracking-[0.3em] mb-6">
          Filmmaker &amp; Visual Storyteller
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Hi! I'm Bharathi Kaliraj.
        </h1>
        <p className="mt-8 text-zinc-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
        I’m a filmmaker and third-year student at UC Irvine, drawn to 
        stories about culture, emotions, and identities that make people 
        distinct. I love exploring ideas across multiple disciplines and 
        how film can reveal their connections to our lives. Through 
        directing and producing, I hope to create stories that invite
         people to think and feel more deeply, while challenging myself 
         to explore unfamiliar perspectives along the way!

        </p>
        <a
          href="#work"
          className="mt-10 inline-block px-6 py-3 rounded-full bg-rose-600 text-white font-medium hover:bg-rose-500 transition-colors"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
