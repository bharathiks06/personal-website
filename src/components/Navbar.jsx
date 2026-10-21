const links = [{ label: "Work", href: "#work" }];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-semibold tracking-wide text-white">
          Bharathi<span className="text-rose-500">.</span>
        </a>
        <ul className="flex items-center gap-8 text-sm text-zinc-300">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
