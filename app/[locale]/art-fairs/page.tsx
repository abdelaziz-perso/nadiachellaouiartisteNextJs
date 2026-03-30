import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { isValidLocale } from "@/lib/i18n";

type ArtFairsPageProps = {
  params: Promise<{ locale: string }>;
};

const texts = {
  fr: {
    title: "Art fairs",
    intro: "Participation aux foires d'art et evenements internationaux.",
    item: "Art Fair Selection - Europe & MENA"
  },
  en: {
    title: "Art fairs",
    intro: "Participation in art fairs and international events.",
    item: "Art Fair Selection - Europe & MENA"
  },
  ar: {
    title: "معارض الفن",
    intro: "مشاركة في معارض الفن والفعاليات الدولية.",
    item: "مختارات معارض الفن - أوروبا والشرق الأوسط وشمال أفريقيا"
  }
} as const;

export default async function ArtFairsPage({ params }: ArtFairsPageProps) {
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
