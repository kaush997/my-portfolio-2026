import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { about } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl px-5 mx-auto md:px-8">
        <Reveal>
          <SectionHeading eyebrow="Who I am" title={about.heading} />
        </Reveal>

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-14 items-start">
          <Reveal delay={80} className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-ink-soft md:text-lg">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={160}>
            <div className="grid grid-cols-2 gap-4">
              {about.stats.map((s) => (
                <div
                  key={s.label}
                  className="p-5 border rounded-2xl border-brand-200/60 dark:border-brand-800/60 bg-surface-raised md:p-6"
                >
                  <CountUp
                    value={s.value}
                    className="text-3xl font-semibold font-display md:text-4xl text-brand-700 dark:text-brand-300"
                  />
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