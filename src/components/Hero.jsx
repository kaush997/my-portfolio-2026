import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";
import Avatar from "./Avatar"; 

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen pb-20 overflow-hidden pt-28"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
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
          <p className="max-w-xl mt-6 text-lg md:text-xl text-ink-soft">
            {profile.tagline}
          </p>
          <p className="mt-2 font-mono text-sm text-ink-faint">
            {profile.role}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium transition-colors duration-300 rounded-full group bg-brand-800 dark:bg-brand-300 text-brand-50 dark:text-brand-950 hover:bg-accent hover:text-brand-950"
            >
              Get in touch
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-medium transition-colors duration-300 border rounded-full border-brand-400/50 dark:border-brand-600/60 text-ink hover:border-accent hover:text-accent"
              >
              Download resume
              {/* <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              /> */}
            </a>
          </div>
        </div>

        {/* Signature seal badge */}
        <div className="relative flex items-center justify-center mx-auto">
        <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[32rem] md:h-[32rem] lg:w-[38rem] lg:h-[38rem] animate-float">
          <div className="absolute inset-0 grid rounded-full place-items-center">
            <div className="w-full h-full">
              <Avatar />
            </div>
          </div>
        </div>
      </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute flex-col items-center hidden gap-2 transition-colors -translate-x-1/2 md:flex bottom-8 left-1/2 text-ink-faint hover:text-accent"
      >
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
