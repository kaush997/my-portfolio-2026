import { useState, useEffect } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects } from "../data/portfolio";

function usePageSize() {
  const [pageSize, setPageSize] = useState(
    typeof window !== "undefined" && window.innerWidth < 640 ? 2 : 4
  );

  useEffect(() => {
    const handleResize = () => {
      setPageSize(window.innerWidth < 640 ? 2 : 4);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return pageSize;
}

export default function Projects() {
  const pageSize = usePageSize();
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(projects.length / pageSize);

  // Clamp page in case pageSize changes (e.g. rotating device) and current page no longer exists
  useEffect(() => {
    if (page > totalPages - 1) setPage(0);
  }, [totalPages, page]);

  const start = page * pageSize;
  const visibleProjects = projects.slice(start, start + pageSize);

  const goPrev = () => setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  const goNext = () => setPage((p) => (p === totalPages - 1 ? 0 : p + 1));

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl px-5 mx-auto md:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects"
              subtitle="A few things I've built and shipped recently."
            />

            {totalPages > 1 && (
              <div className="flex items-center gap-3 pb-2">
                <button
                  onClick={goPrev}
                  aria-label="Previous projects"
                  className="grid w-10 h-10 transition-colors duration-200 border rounded-full place-items-center border-brand-300/50 dark:border-brand-700/60 text-ink-soft hover:border-accent hover:text-accent"
                >
                  <ChevronLeft size={18} />
                </button>
                <span className="font-mono text-xs text-ink-faint">
                  {page + 1} / {totalPages}
                </span>
                <button
                  onClick={goNext}
                  aria-label="Next projects"
                  className="grid w-10 h-10 transition-colors duration-200 border rounded-full place-items-center border-brand-300/50 dark:border-brand-700/60 text-ink-soft hover:border-accent hover:text-accent"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 md:gap-6">
          {visibleProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="flex flex-col h-full overflow-hidden transition-all duration-300 border group rounded-2xl border-brand-200/60 dark:border-brand-800/60 bg-surface-raised hover:border-accent/70 hover:-translate-y-1">
                <div className="h-1.5 w-full bg-gradient-to-r from-brand-500 via-brand-400 to-accent" />
                <div className="flex flex-col flex-1 p-6 md:p-7">
                  <h3 className="mb-2 text-xl font-semibold font-display md:text-2xl text-ink">
                    {p.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-ink-soft md:text-base">
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
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}