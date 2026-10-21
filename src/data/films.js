// Drop your video files in public/videos/ and poster images in
// public/thumbnails/, then reference them below with a leading "/"
// (files in public/ are served from the site root, e.g. public/videos/x.mp4
// becomes "/videos/x.mp4"). If a .mov won't play in the browser, convert it
// to .mp4 first (see the chat for the ffmpeg command).

const films = [
  {
    id: 1,
    title: "Lose Control",
    role: "Producer",
    category: "Music Video",
    thumbnail: "/thumbnails/lose-control.jpg",
    videoUrl: "/videos/lose-control.mp4",
  },
  {
    id: 2,
    title: "Seaside Serenade",
    role: "Director",
    category: "Short Film",
    thumbnail: "/thumbnails/final-cut-prom-reveal.jpg",
    videoUrl: "/videos/final-cut-prom-reveal.mp4",
  },
  {
    id: 3,
    title: "Ella Baila Sola",
    role: "Cinematographer",
    category: "Music Video",
    thumbnail: "/thumbnails/faa-music-video.jpg",
    videoUrl: "/videos/faa-music-video.mp4",
  },
];

export default films;
