import { Github, Linkedin, Facebook, GraduationCap, ArrowUp } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-brand-200/50 dark:border-brand-800/50 bg-surface-sunken">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-brand-800 dark:bg-brand-300 text-brand-50 dark:text-brand-950 grid place-items-center text-xs font-bold border border-accent/60">
            {profile.initials}
          </span>
          <div>
            <p className="font-display font-semibold text-ink text-sm">
              {profile.name}
            </p>
            <p className="text-xs text-ink-faint">
              &copy; {year} — Built with React, Vite &amp; Tailwind CSS.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: profile.social.github },
            { icon: Linkedin, href: profile.social.linkedin },
            { icon: Facebook, href: profile.social.facebook },
            { icon: GraduationCap, href: profile.social.scholar },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-brand-300/50 dark:border-brand-700/60 grid place-items-center text-ink-soft hover:border-accent hover:text-accent transition-colors"
            >
              <Icon size={15} />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="w-9 h-9 rounded-full bg-brand-800 dark:bg-brand-300 text-brand-50 dark:text-brand-950 grid place-items-center hover:bg-accent hover:text-brand-950 transition-colors"
          >
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
