import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, GraduationCap, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Let's talk"
            title="Contact"
            subtitle="Have a project in mind, or just want to say hello? My inbox is open."
          />
        </Reveal>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-14">
          <Reveal delay={80} className="space-y-6">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 group"
            >
              <span className="w-11 h-11 rounded-full bg-brand-800 dark:bg-brand-300 text-brand-50 dark:text-brand-950 grid place-items-center shrink-0">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs text-ink-faint">Email</p>
                <p className="text-ink font-medium group-hover:text-accent transition-colors">
                  {profile.email}
                </p>
              </div>
            </a>
            <a href={`tel:${profile.phone}`} className="flex items-center gap-4 group">
              <span className="w-11 h-11 rounded-full bg-brand-800 dark:bg-brand-300 text-brand-50 dark:text-brand-950 grid place-items-center shrink-0">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-xs text-ink-faint">Phone</p>
                <p className="text-ink font-medium group-hover:text-accent transition-colors">
                  {profile.phone}
                </p>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <span className="w-11 h-11 rounded-full bg-brand-800 dark:bg-brand-300 text-brand-50 dark:text-brand-950 grid place-items-center shrink-0">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-xs text-ink-faint">Location</p>
                <p className="text-ink font-medium">{profile.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
              {[
                { icon: Github, href: profile.social.github },
                { icon: Linkedin, href: profile.social.linkedin },
                { icon: Facebook, href: profile.social.facebook },
                { icon: GraduationCap, href: profile.social.scholar },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-brand-300/50 dark:border-brand-700/60 grid place-items-center text-ink-soft hover:border-accent hover:text-accent transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-ink-faint mb-1.5 block">Name</label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-xl bg-surface-raised border border-brand-200/60 dark:border-brand-800/60 px-4 py-3 text-ink placeholder:text-ink-faint focus:border-accent outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs text-ink-faint mb-1.5 block">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full rounded-xl bg-surface-raised border border-brand-200/60 dark:border-brand-800/60 px-4 py-3 text-ink placeholder:text-ink-faint focus:border-accent outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-ink-faint mb-1.5 block">Subject</label>
                <input
                  type="text"
                  className="w-full rounded-xl bg-surface-raised border border-brand-200/60 dark:border-brand-800/60 px-4 py-3 text-ink placeholder:text-ink-faint focus:border-accent outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="text-xs text-ink-faint mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full rounded-xl bg-surface-raised border border-brand-200/60 dark:border-brand-800/60 px-4 py-3 text-ink placeholder:text-ink-faint focus:border-accent outline-none transition-colors resize-none"
                  placeholder="Tell me a bit about your project..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-800 dark:bg-brand-300 text-brand-50 dark:text-brand-950 font-medium hover:bg-accent hover:text-brand-950 transition-colors duration-300"
              >
                <Send size={16} />
                {status === "sent" ? "Message sent!" : "Send message"}
              </button>
              
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
