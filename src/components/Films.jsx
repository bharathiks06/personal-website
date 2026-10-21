import { useState } from "react";
import films from "../data/films";
import FilmScreen from "./FilmScreen";
import VideoModal from "./VideoModal";

export default function Films() {
  const [activeFilm, setActiveFilm] = useState(null);

  return (
    <section id="work" className="relative bg-black">
      <div className="px-6 pt-24 pb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Selected Work
        </h2>
        <p className="text-zinc-400">
          Scroll through a collection of short films, music videos, and
          documentaries.
        </p>
      </div>

      {films.map((film, index) => (
        <FilmScreen
          key={film.id}
          film={film}
          index={index}
          onSelect={setActiveFilm}
        />
      ))}

      <VideoModal film={activeFilm} onClose={() => setActiveFilm(null)} />
    </section>
  );
}
