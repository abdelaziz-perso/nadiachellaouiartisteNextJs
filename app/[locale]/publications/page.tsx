import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { isValidLocale } from "@/lib/i18n";

type PublicationsPageProps = {
  params: Promise<{ locale: string }>;
};

const texts = {
  fr: {
    title: "Bibliography",
    intro: "Publications, catalogues et references critiques.",
    item: "Catalogue d'exposition - Edition speciale 2026"
  },
  en: {
    title: "Bibliography",
    intro: "Publications, catalogues, and critical references.",
    item: "Exhibition catalogue - Special edition 2026"
  },
  ar: {
    title: "بيبليوغرافيا",
    intro: "منشورات وكتالوغات ومراجع نقدية.",
    item: "كتالوج المعرض - إصدار خاص 2026"
  }
} as const;

export default async function PublicationsPage({ params }: PublicationsPageProps) {
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
          <p className="text-base text-ink/85 sm:text-lg">{content.item}</p>
        </div>
      </Reveal>
    </section>
  );
}
