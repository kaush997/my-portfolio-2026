import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-brand-300/30 dark:bg-brand-700/25 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-[24rem] h-[24rem] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute inset-0 bg-grain opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-8 w-full grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-8 items-center">
        <div>
          <p className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-6">
            Portfolio — {profile.location}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-ink">
            {profile.name.split(" ")[0]}{" "}
            <span className="italic text-brand-600 dark:text-brand-400">
              {profile.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-soft max-w-xl">
            {profile.tagline}
          </p>
          <p className="mt-2 font-mono text-sm text-ink-faint">
            {profile.role}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-800 dark:bg-brand-300 text-brand-50 dark:text-brand-950 font-medium hover:bg-accent hover:text-brand-950 transition-colors duration-300"
            >
              Get in touch
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand-400/50 dark:border-brand-600/60 text-ink font-medium hover:border-accent hover:text-accent transition-colors duration-300"
            >
              Download résumé
            </a>
          </div>
        </div>

        {/* Signature seal badge */}
        <div className="relative mx-auto flex items-center justify-center">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 animate-float">
            <svg viewBox="0 0 200 200" className="w-full h-full seal-ring">
              <defs>
                <path
                  id="sealCircle"
                  d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                />
              </defs>
              <circle
                cx="100"
                cy="100"
                r="78"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1"
                strokeDasharray="1 6"
              />
              <text className="font-mono" fontSize="9.5" letterSpacing="3" fill="var(--ink-soft)">
                <textPath href="#sealCircle" startOffset="0%">
                  SOFTWARE ENGINEER • RESEARCHER • COLOMBO •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-6 rounded-full bg-brand-800 dark:bg-brand-900 border border-accent/40 grid place-items-center shadow-2xl shadow-brand-900/30">
              <span className="font-display text-5xl sm:text-6xl font-semibold text-brand-50 dark:text-brand-100">
                {profile.initials}
              </span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-ink-faint hover:text-accent transition-colors"
      >
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
