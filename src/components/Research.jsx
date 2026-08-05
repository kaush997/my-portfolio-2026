import { FileText, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { researches } from "../data/portfolio";

export default function Research() {
  return (
    <section id="research" className="py-24 md:py-32 bg-surface-sunken">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Publications"
            title="Research"
            subtitle="Selected papers and academic work."
          />
        </Reveal>

        <div className="space-y-5">
          {researches.map((r, i) => (
            <Reveal key={r.title} delay={i * 90}>
              <a
                href={r.link}
                className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 rounded-2xl border border-brand-200/60 dark:border-brand-800/60 bg-surface-raised p-6 md:p-7 hover:border-accent/70 transition-colors duration-300"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-brand-800 dark:bg-brand-300 text-brand-50 dark:text-brand-950 grid place-items-center">
                  <FileText size={18} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg md:text-xl font-semibold text-ink group-hover:text-accent transition-colors duration-200">
                    {r.title}
                  </h3>
                  <p className="font-mono text-xs md:text-sm text-brand-600 dark:text-brand-400 mt-1">
                    {r.venue}
                  </p>
                  <p className="text-ink-soft text-sm md:text-base mt-2 leading-relaxed">
                    {r.description}
                  </p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-ink-faint group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
