import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme.jsx";
import { profile } from "../data/portfolio";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#resume", label: "Resume" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/85 backdrop-blur-md border-b border-brand-200/40 dark:border-brand-800/40"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#home"
          className="font-display text-lg md:text-xl font-semibold text-ink flex items-center gap-2"
        >
          <span className="w-9 h-9 rounded-full bg-brand-800 dark:bg-brand-300 text-brand-50 dark:text-brand-950 grid place-items-center text-sm font-bold border border-accent/60">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">Sanduni</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-medium text-sm text-ink-soft">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-accent transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="w-10 h-10 rounded-full grid place-items-center border border-brand-300/50 dark:border-brand-700/60 text-ink hover:border-accent hover:text-accent transition-colors duration-200"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden w-10 h-10 rounded-full grid place-items-center border border-brand-300/50 dark:border-brand-700/60 text-ink"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-surface-raised border-t border-brand-200/40 dark:border-brand-800/40 px-5 py-4">
          <ul className="flex flex-col gap-4 font-medium text-ink-soft">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
