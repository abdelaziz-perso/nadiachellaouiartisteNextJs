import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { isValidLocale } from "@/lib/i18n";

type ExhibitionsPageProps = {
  params: Promise<{ locale: string }>;
};

const texts = {
  fr: {
    title: "Expositions",
    intro: "Selection d'expositions recentes et a venir.",
    current: "Exposition personnelle - Casablanca, 2026"
  },
  en: {
    title: "Exhibitions",
    intro: "Selection of recent and upcoming exhibitions.",
    current: "Solo exhibition - Casablanca, 2026"
  },
  ar: {
    title: "المعارض",
    intro: "مختارات من المعارض الحديثة والقادمة.",
    current: "معرض فردي - الدار البيضاء، 2026"
  }
} as const;

export default async function ExhibitionsPage({ params }: ExhibitionsPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  const content = texts[locale];

  return (
    <section className="space-y-6 py-10 sm:space-y-8 sm:py-14">
      <Reveal>
        <h1 className="font-display text-3xl sm:text-5xl">{content.title}</h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="max-w-2xl text-sm leading-relaxed text-ink/75 sm:text-base">{content.intro}</p>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="max-w-2xl rounded-2xl border border-black/10 bg-white/70 p-5">
          <p className="text-base text-ink/85 sm:text-lg">{content.current}</p>
        </div>
      </Reveal>
    </section>
  );
}
