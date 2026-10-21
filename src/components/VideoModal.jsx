import { useEffect } from "react";

export default function VideoModal({ film, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!film) return null;

  const isEmbed = /^https?:\/\//.test(film.videoUrl);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white font-semibold text-lg">{film.title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close video"
            className="text-zinc-300 hover:text-white text-2xl leading-none"
          >
            &times;
          </button>
        </div>
        <div className="aspect-video rounded-lg overflow-hidden bg-black">
          {isEmbed ? (
            <iframe
              className="w-full h-full"
              src={`${film.videoUrl}${film.videoUrl.includes("?") ? "&" : "?"}autoplay=1`}
              title={film.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              key={film.videoUrl}
              className="w-full h-full"
              src={film.videoUrl}
              poster={film.thumbnail}
              controls
              autoPlay
              playsInline
            >
              Your browser doesn't support this video format.
            </video>
          )}
        </div>
      </div>
    </div>
  );
}
