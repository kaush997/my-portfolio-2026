import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, GraduationCap, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setStatus("sent");
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl px-5 mx-auto md:px-8">
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
              <span className="grid rounded-full w-11 h-11 bg-brand-800 dark:bg-brand-300 text-brand-50 dark:text-brand-950 place-items-center shrink-0">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs text-ink-faint">Email</p>
                <p className="font-medium transition-colors text-ink group-hover:text-accent">
                  {profile.email}
                </p>
              </div>
            </a>
            <a href={`tel:${profile.phone}`} className="flex items-center gap-4 group">
              <span className="grid rounded-full w-11 h-11 bg-brand-800 dark:bg-brand-300 text-brand-50 dark:text-brand-950 place-items-center shrink-0">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-xs text-ink-faint">Phone</p>
                <p className="font-medium transition-colors text-ink group-hover:text-accent">
                  {profile.phone}
                </p>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <span className="grid rounded-full w-11 h-11 bg-brand-800 dark:bg-brand-300 text-brand-50 dark:text-brand-950 place-items-center shrink-0">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-xs text-ink-faint">Location</p>
                <p className="font-medium text-ink">{profile.location}</p>
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
                  className="grid w-10 h-10 transition-colors border rounded-full border-brand-300/50 dark:border-brand-700/60 place-items-center text-ink-soft hover:border-accent hover:text-accent"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs text-ink-faint mb-1.5 block">Name</label>
                  <input
                    required
                    name="name"
                    type="text"
                    className="w-full px-4 py-3 transition-colors border outline-none rounded-xl bg-surface-raised border-brand-200/60 dark:border-brand-800/60 text-ink placeholder:text-ink-faint focus:border-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs text-ink-faint mb-1.5 block">Email</label>
                  <input
                    required
                    name="email"
                    type="email"
                    className="w-full px-4 py-3 transition-colors border outline-none rounded-xl bg-surface-raised border-brand-200/60 dark:border-brand-800/60 text-ink placeholder:text-ink-faint focus:border-accent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-ink-faint mb-1.5 block">Subject</label>
                <input
                  name="title"
                  type="text"
                  className="w-full px-4 py-3 transition-colors border outline-none rounded-xl bg-surface-raised border-brand-200/60 dark:border-brand-800/60 text-ink placeholder:text-ink-faint focus:border-accent"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="text-xs text-ink-faint mb-1.5 block">Message</label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 transition-colors border outline-none resize-none rounded-xl bg-surface-raised border-brand-200/60 dark:border-brand-800/60 text-ink placeholder:text-ink-faint focus:border-accent"
                  placeholder="Tell me a bit about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 px-6 py-3 font-medium transition-colors duration-300 rounded-full bg-brand-800 dark:bg-brand-300 text-brand-50 dark:text-brand-950 hover:bg-accent hover:text-brand-950 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send size={16} />
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                  ? "Message sent!"
                  : "Send message"}
              </button>

              {status === "error" && (
                <p className="text-sm text-red-500">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
              
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
