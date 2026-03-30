import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { isValidLocale } from "@/lib/i18n";

type CvPageProps = {
  params: Promise<{ locale: string }>;
};

const texts = {
  fr: {
    title: "CV",
    intro: "Parcours artistique, formations et expositions.",
    block1: "Nadia Chellaoui - Artiste visuelle basee au Maroc.",
    block2: "Expositions personnelles et collectives depuis 2018."
  },
  en: {
    title: "CV",
    intro: "Artistic path, education, and exhibitions.",
    block1: "Nadia Chellaoui - Visual artist based in Morocco.",
    block2: "Solo and group exhibitions since 2018."
  },
  ar: {
    title: "السيرة الفنية",
    intro: "المسار الفني، التكوين، والمعارض.",
    block1: "ناديا شلاوي - فنانة بصرية مقيمة في المغرب.",
    block2: "معارض فردية وجماعية منذ 2018."
  }
} as const;

export default async function CvPage({ params }: CvPageProps) {
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
        <div className="grid max-w-3xl gap-4 rounded-2xl border border-black/10 bg-white/70 p-5">
          <p className="text-ink/85">{content.block1}</p>
          <p className="text-ink/85">{content.block2}</p>
        </div>
      </Reveal>
    </section>
  );
}
