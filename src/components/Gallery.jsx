import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { gallery } from "../data/portfolio";

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);

  const close = () => setOpenIndex(null);
  const prev = () =>
    setOpenIndex((i) => (i - 1 + gallery.length) % gallery.length);
  const next = () => setOpenIndex((i) => (i + 1) % gallery.length);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-surface-sunken">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Moments"
            title="Gallery"
            subtitle="Talks, workshops, and behind-the-scenes moments."
          />
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {gallery.map((g, i) => (
            <Reveal key={g.caption} delay={i * 60} className={i === 0 ? "col-span-2 row-span-2" : ""}>
              <button
                onClick={() => setOpenIndex(i)}
                className="group relative w-full h-full min-h-[140px] md:min-h-[180px] rounded-2xl overflow-hidden block"
              >
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/0 to-brand-950/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  {g.caption}
                </p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-brand-950/90 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-6 right-6 text-white/80 hover:text-accent transition-colors"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-4 md:left-8 text-white/80 hover:text-accent transition-colors"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-4 md:right-8 text-white/80 hover:text-accent transition-colors"
          >
            <ChevronRight size={32} />
          </button>
          <div
            className="max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[openIndex].src}
              alt={gallery[openIndex].caption}
              className="w-full max-h-[75vh] object-contain rounded-xl"
            />
            <p className="text-center text-white/80 mt-4 text-sm">
              {gallery[openIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
