export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignClass} mb-12 md:mb-16`}>
      {eyebrow && (
        <span className="stroke-underline font-mono text-xs md:text-sm tracking-[0.25em] uppercase text-accent mb-4">
          {eyebrow}
          <svg viewBox="0 0 120 8" fill="none" preserveAspectRatio="none">
            <path
              d="M1 5.5C20 2 40 1 60 3.5C80 6 100 3 119 2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ink leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-ink-soft text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
