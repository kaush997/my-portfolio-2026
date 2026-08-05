import { useState } from "react";
import { Briefcase, GraduationCap, Gauge, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience, education, skills, certificates } from "../data/portfolio";

const TABS = [
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "skills", label: "Skills", icon: Gauge },
  { id: "certificates", label: "Certificates", icon: Award },
];

export default function Resume() {
  const [active, setActive] = useState("experience");

  return (
    <section id="resume" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Background"
            title="Resume"
            subtitle="Experience, education, skills and certifications — the full picture."
          />
        </Reveal>

        {/* Tabs */}
        <Reveal delay={80}>
          <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
            {TABS.map((t) => {
              const Icon = t.icon;
              const isActive = active === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`inline-flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-full text-sm font-medium border transition-colors duration-200 ${
                    isActive
                      ? "bg-brand-800 dark:bg-brand-300 text-brand-50 dark:text-brand-950 border-transparent"
                      : "border-brand-300/50 dark:border-brand-700/60 text-ink-soft hover:border-accent hover:text-accent"
                  }`}
                >
                  <Icon size={16} />
                  {t.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {active === "experience" && (
          <div className="space-y-8">
            {experience.map((e, i) => (
              <Reveal key={e.role + e.org} delay={i * 90}>
                <div className="grid md:grid-cols-[220px_1fr] gap-3 md:gap-8 border-l-2 border-brand-300/50 dark:border-brand-700/60 pl-6 relative">
                  <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent" />
                  <div>
                    <p className="font-mono text-xs md:text-sm text-ink-faint">{e.period}</p>
                    <p className="text-xs md:text-sm text-ink-faint mt-1">{e.location}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-ink">
                      {e.role}
                    </h3>
                    <p className="text-brand-600 dark:text-brand-400 font-medium mb-3">
                      {e.org}
                    </p>
                    <ul className="space-y-2">
                      {e.points.map((pt, j) => (
                        <li key={j} className="flex gap-2 text-ink-soft text-sm md:text-base leading-relaxed">
                          <span className="text-accent mt-2 shrink-0">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {active === "education" && (
          <div className="space-y-8">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 90}>
                <div className="grid md:grid-cols-[220px_1fr] gap-3 md:gap-8 border-l-2 border-brand-300/50 dark:border-brand-700/60 pl-6 relative">
                  <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent" />
                  <p className="font-mono text-xs md:text-sm text-ink-faint">{e.period}</p>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-ink">
                      {e.degree}
                    </h3>
                    <p className="text-brand-600 dark:text-brand-400 font-medium mb-2">
                      {e.school}
                    </p>
                    <p className="text-ink-soft text-sm md:text-base">{e.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {active === "skills" && (
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {skills.map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-ink font-medium">{s.name}</span>
                    <span className="font-mono text-ink-faint">{s.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-surface-sunken overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent transition-all duration-1000"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {active === "certificates" && (
          <div className="grid sm:grid-cols-2 gap-5">
            {certificates.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="rounded-2xl border border-brand-200/60 dark:border-brand-800/60 bg-surface-raised p-6 flex gap-4 items-start hover:border-accent/70 transition-colors duration-300">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-accent/15 text-accent grid place-items-center">
                    <Award size={18} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-ink leading-snug">
                      {c.title}
                    </h4>
                    <p className="text-ink-soft text-sm mt-1">
                      {c.issuer} · <span className="font-mono">{c.year}</span>
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
