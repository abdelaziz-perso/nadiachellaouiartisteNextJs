import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { isValidLocale } from "@/lib/i18n";

type PressPageProps = {
  params: Promise<{ locale: string }>;
};

const texts = {
  fr: {
    title: "Press",
    intro: "Articles, interviews et mentions mediatique.",
    item: "Interview studio - Revue d'art contemporain"
  },
  en: {
    title: "Press",
    intro: "Articles, interviews, and media mentions.",
    item: "Studio interview - Contemporary art review"
  },
  ar: {
    title: "الصحافة",
    intro: "مقالات، مقابلات، وظهور إعلامي.",
    item: "مقابلة في الاستوديو - مجلة الفن المعاصر"
  }
} as const;

export default async function PressPage({ params }: PressPageProps) {
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
