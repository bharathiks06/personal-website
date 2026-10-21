export default function FilmScreen({ film, index, onSelect }) {
  return (
    <section
      className="sticky top-0 h-screen w-full flex items-end md:items-center"
      style={{
        maskImage: "linear-gradient(to bottom, transparent, black 14%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 14%)",
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${film.thumbnail})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

      <div className="relative z-10 w-full px-6 md:px-16 pb-20 md:pb-0">
        <p className="text-rose-500 text-sm uppercase tracking-[0.3em] mb-3">
          {String(index + 1).padStart(2, "0")} · {film.category} · {film.year}
        </p>
        <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-3xl leading-tight">
          {film.title}
        </h3>
        <p className="mt-4 text-zinc-300 text-lg">{film.role}</p>
        <button
          type="button"
          onClick={() => onSelect(film)}
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/30 text-white font-medium backdrop-blur-sm hover:bg-white/20 transition-colors"
        >
          <span className="text-xl leading-none">▶</span>
          Watch Film
        </button>
      </div>
    </section>
  );
}
