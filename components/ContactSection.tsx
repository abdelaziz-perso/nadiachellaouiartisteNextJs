"use client";

import { motion } from "framer-motion";

type ContactSectionProps = {
  title: string;
  eyebrow: string;
  intro: string;
  emailLabel: string;
  instagramLabel: string;
  locationLabel: string;
  city: string;
  formName: string;
  formEmail: string;
  formMessage: string;
  formSubmit: string;
  emailValue: string;
  instagramValue: string;
  isRtl: boolean;
};

export default function ContactSection({
  title,
  eyebrow,
  intro,
  emailLabel,
  instagramLabel,
  locationLabel,
  city,
  formName,
  formEmail,
  formMessage,
  formSubmit,
  emailValue,
  instagramValue,
  isRtl
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="scroll-mt-28 rounded-3xl border border-black/10 bg-gradient-to-b from-ink/[0.04] to-white/65 px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-14"
    >
      <div className={`space-y-4 ${isRtl ? "text-right" : "text-left"}`}>
        <p className="text-[10px] uppercase tracking-[0.35em] text-ink/55 sm:text-xs">{eyebrow}</p>
        <h2 className="font-display text-3xl leading-tight sm:text-5xl">{title}</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/75 sm:text-base">{intro}</p>
      </div>

      <div className="my-7 h-px w-full bg-black/10 sm:my-10" />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className={`rounded-2xl border border-black/10 bg-white/75 p-5 backdrop-blur-md sm:p-6 ${isRtl ? "text-right" : "text-left"}`}
        >
          <div className="space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-ink/50">{emailLabel}</p>
              <a className="link-underline mt-1 block break-all text-base sm:text-lg" href={`mailto:${emailValue}`}>
                {emailValue}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-ink/50">{instagramLabel}</p>
              <a
                className="link-underline mt-1 block text-base sm:text-lg"
                href={`https://instagram.com/${instagramValue.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
              >
                {instagramValue}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-ink/50">{locationLabel}</p>
              <p className="mt-1 text-base sm:text-lg">{city}</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={(event) => event.preventDefault()}
          className={`rounded-2xl border border-black/10 bg-white/85 p-5 shadow-sm sm:p-6 ${
            isRtl ? "text-right" : "text-left"
          }`}
        >
          <div className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-xs uppercase tracking-[0.22em] text-ink/55">{formName}</span>
              <input
                type="text"
                name="name"
                className="w-full rounded-xl border border-black/15 bg-transparent px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-ink/35 focus:border-black/35 focus:bg-white focus:shadow-[0_0_0_2px_rgba(0,0,0,0.04)]"
                placeholder={formName}
              />
            </label>

            <label className="grid gap-2">
              <span className="text-xs uppercase tracking-[0.22em] text-ink/55">{formEmail}</span>
              <input
                type="email"
                name="email"
                className="w-full rounded-xl border border-black/15 bg-transparent px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-ink/35 focus:border-black/35 focus:bg-white focus:shadow-[0_0_0_2px_rgba(0,0,0,0.04)]"
                placeholder={formEmail}
              />
            </label>

            <label className="grid gap-2">
              <span className="text-xs uppercase tracking-[0.22em] text-ink/55">{formMessage}</span>
              <textarea
                name="message"
                rows={6}
                className="w-full resize-none rounded-xl border border-black/15 bg-transparent px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-ink/35 focus:border-black/35 focus:bg-white focus:shadow-[0_0_0_2px_rgba(0,0,0,0.04)]"
                placeholder={formMessage}
              />
            </label>

            <button
              type="submit"
              className="btn-premium mt-2 inline-flex w-full items-center justify-center rounded-full bg-ink px-6 py-3 text-sm uppercase tracking-[0.2em] text-ivory sm:w-auto"
            >
              {formSubmit}
            </button>
          </div>
        </motion.form>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 overflow-hidden rounded-2xl border border-black/10 sm:mt-8"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.5178962740915!2d-7.639372324177329!3d33.59186457333378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2edb166e795%3A0x8f7623c91e3e1231!2sNADIA%20CHELLAOUI!5e0!3m2!1sen!2sma!4v1774881201949!5m2!1sen!2sma"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-72 w-full sm:h-80"
        />
      </motion.div>
    </section>
  );
}
