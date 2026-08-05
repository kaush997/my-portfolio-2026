import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { about } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Who I am"
            title={about.heading}
          />
        </Reveal>

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-14 items-start">
          <Reveal delay={80} className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-ink-soft text-base md:text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={160}>
            <div className="grid grid-cols-2 gap-4">
              {about.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-brand-200/60 dark:border-brand-800/60 bg-surface-raised p-5 md:p-6"
                >
                  <p className="font-display text-3xl md:text-4xl font-semibold text-brand-700 dark:text-brand-300">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs md:text-sm text-ink-faint">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
