import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Projects"
            subtitle="A few things I've built and shipped recently."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="group h-full flex flex-col rounded-2xl border border-brand-200/60 dark:border-brand-800/60 bg-surface-raised overflow-hidden hover:border-accent/70 hover:-translate-y-1 transition-all duration-300">
                <div className="h-1.5 w-full bg-gradient-to-r from-brand-500 via-brand-400 to-accent" />
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-ink mb-2">
                    {p.title}
                  </h3>
                  <p className="text-ink-soft text-sm md:text-base leading-relaxed flex-1">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-surface-sunken text-ink-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {/* <div className="flex items-center gap-5 mt-6 pt-5 border-t border-brand-200/50 dark:border-brand-800/50">
                    <a
                      href={p.link}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent transition-colors"
                    >
                      <ExternalLink size={15} /> Live
                    </a>
                    <a
                      href={p.repo}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent transition-colors"
                    >
                      <Github size={15} /> Code
                    </a>
                  </div> */}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
