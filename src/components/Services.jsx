import { Code2, BrainCircuit, Compass, PenTool } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { services } from "../data/portfolio";

const ICONS = { Code2, BrainCircuit, Compass, PenTool };

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface-sunken">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What I do"
            title="Services"
            subtitle="A mix of engineering and research work — pick what fits your project."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Code2;
            return (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-brand-200/60 dark:border-brand-800/60 bg-surface-raised p-7 md:p-8 hover:border-accent/70 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-brand-800 dark:bg-brand-300 text-brand-50 dark:text-brand-950 grid place-items-center mb-6 group-hover:bg-accent group-hover:text-brand-950 transition-colors duration-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-ink mb-3">
                    {s.title}
                  </h3>
                  <p className="text-ink-soft text-sm md:text-base leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
