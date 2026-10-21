export default function Footer() {
  return (
    <footer className="py-6 px-6 border-t border-white/10 bg-black text-center">
      <p className="text-zinc-500 text-sm">
        © {new Date().getFullYear()} Bharathi. All rights reserved.
      </p>
    </footer>
  );
}
