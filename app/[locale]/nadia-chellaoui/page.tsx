import Image from "next/image";
import { notFound } from "next/navigation";
import { isValidLocale, type Locale } from "@/lib/i18n";

type AboutArtistPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutArtistPage({ params }: AboutArtistPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }
  const content = aboutContent[locale];

  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <header className={`space-y-4 ${locale === "ar" ? "text-right" : ""}`}>
        <p className="text-xs uppercase tracking-[0.35em] text-ink/55">{content.eyebrow}</p>
        <h1 className="font-display text-3xl leading-tight sm:text-5xl">{content.title}</h1>
      </header>

      <section className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
        <div className={`space-y-4 text-sm leading-8 text-ink/80 sm:text-base ${locale === "ar" ? "text-right" : ""}`}>
          {content.introParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/10">
          <div className="relative aspect-[4/3]">
            <Image src={content.introImage} alt={content.introImageAlt} fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/10">
          <div className="relative aspect-square">
            <Image src={content.craftImage} alt={content.craftImageAlt} fill className="object-cover" />
          </div>
        </div>
        <div className={`space-y-4 ${locale === "ar" ? "text-right" : ""}`}>
          <h2 className="font-display text-2xl sm:text-4xl">{content.craftTitle}</h2>
          {content.craftParagraphs.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-8 text-ink/80 sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {content.works.map((work, index) => {
        const reverse = index % 2 === 1;
        return (
          <section key={work.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className={`${reverse ? "lg:order-2" : ""}`}>
              <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/10">
                <div className="relative aspect-square">
                  <Image src={work.image} alt={work.imageAlt} fill className="object-cover" />
                </div>
              </div>
            </div>
            <div className={`space-y-4 ${reverse ? "lg:order-1" : ""} ${locale === "ar" ? "text-right" : ""}`}>
              <h3 className="font-display text-2xl sm:text-4xl">{work.title}</h3>
              <p className="text-xs uppercase tracking-[0.24em] text-ink/55">{work.year}</p>
              <p className="text-sm leading-8 text-ink/80 sm:text-base">{work.description}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
}

type Work = {
  title: string;
  year: string;
  description: string;
  image: string;
  imageAlt: string;
};

type AboutPageContent = {
  eyebrow: string;
  title: string;
  introParagraphs: string[];
  introImage: string;
  introImageAlt: string;
  craftTitle: string;
  craftParagraphs: string[];
  craftImage: string;
  craftImageAlt: string;
  works: Work[];
};

const sharedWorks = {
  calipsohImage: "https://nadiachellaoui.com/wp-content/uploads/2025/08/calipsoh.png",
  transcendenceImage: "https://nadiachellaoui.com/wp-content/uploads/2025/08/IMG_3809-scaled-1.jpeg",
  symphonyImage: "https://nadiachellaoui.com/wp-content/uploads/2025/08/FullSizeRender.jpeg",
  awakeningImage: "https://nadiachellaoui.com/wp-content/uploads/2025/08/IMG_9184-scaled-1.jpeg",
  abyssImage: "https://nadiachellaoui.com/wp-content/uploads/2025/08/9f5102d0-cbde-4cfc-b4f1-f7da2240285d.jpg"
};

const aboutContent: Record<Locale, AboutPageContent> = {
  en: {
    eyebrow: "About",
    title: "The artist Nadia Chellaoui",
    introParagraphs: [
      "In 2007, Nadia Chellaoui gave herself fully to painting, moving from formal training to an instinctive artistic practice.",
      "Each brushstroke shaped a more personal expression and affirmed an increasingly distinctive visual identity.",
      "In 2017, driven by the desire to create relentlessly, she expanded her universe into leather goods with her first bag, Calips'Oh.",
      "She then developed a lineage of bags inspired by mythological figures, continuing her signature dialogue between symbols, shape, and color.",
      "This approach creates a deliberate bridge between painting and craft through recurring motifs: the heart, the eye, the mouth, the dove, and the star."
    ],
    introImage: "https://nadiachellaoui.com/wp-content/uploads/2025/08/nc.jpg",
    introImageAlt: "Portrait of Nadia Chellaoui",
    craftTitle: "A history of art.",
    craftParagraphs: [
      "In this new artistic venture, Nadia Chellaoui combined embroidery and leather to create an original and refined body of work.",
      "Each piece is handmade and offered in carefully crafted variations, enriched with subtle metallic details.",
      "She collaborated with expert artisans, honoring ancestral craftsmanship while maintaining a contemporary and cultural artistic language."
    ],
    craftImage: "https://nadiachellaoui.com/wp-content/uploads/2025/08/nc-art.jpg",
    craftImageAlt: "Nadia Chellaoui artwork detail",
    works: [
      {
        title: "The Calips'Oh.",
        year: "2015",
        description:
          "This iconic painting, vibrant with color and geometric forms, explores duality and emotional complexity through a fragmented and stylized face.",
        image: sharedWorks.calipsohImage,
        imageAlt: "The Calips'Oh painting"
      },
      {
        title: "Transcendence.",
        year: "2019",
        description:
          "Dominated by deep blues, this work expresses introspection and emotional depth through an enigmatic gaze and vivid accents.",
        image: sharedWorks.transcendenceImage,
        imageAlt: "Transcendence painting"
      },
      {
        title: "Symphony.",
        year: "2020",
        description:
          "Through strong blues and geometric fragmentation, this composition reflects the evolving search for identity and perception.",
        image: sharedWorks.symphonyImage,
        imageAlt: "Symphony painting"
      },
      {
        title: "Awakening.",
        year: "2022",
        description:
          "A contemplative piece where abstract gestures and a penetrating gaze evoke a moment of inner awakening.",
        image: sharedWorks.awakeningImage,
        imageAlt: "Awakening painting"
      },
      {
        title: "Abyss.",
        year: "2024",
        description:
          "One of the artist's newest pieces, this canvas immerses the viewer in mystery and hidden truth through deep, layered blue tones.",
        image: sharedWorks.abyssImage,
        imageAlt: "Abyss painting"
      }
    ]
  },
  fr: {
    eyebrow: "A propos",
    title: "L'artiste Nadia Chellaoui",
    introParagraphs: [
      "En 2007, Nadia Chellaoui se consacre pleinement a la peinture, passant de la formation technique a une pratique instinctive.",
      "Chaque geste du pinceau affirme une expression personnelle et un style de plus en plus distinctif.",
      "En 2017, animee par un elan de creation continu, elle etend son univers a la maroquinerie avec son premier sac, Calips'Oh.",
      "Elle poursuit ensuite cette lignee de pieces inspirees de figures mythologiques, dans un dialogue entre symboles, formes et couleurs.",
      "Cette demarche tisse un lien volontaire entre peinture et artisanat autour de motifs recurrents: le coeur, l'oeil, la bouche, la colombe et l'etoile."
    ],
    introImage: "https://nadiachellaoui.com/wp-content/uploads/2025/08/nc.jpg",
    introImageAlt: "Portrait de Nadia Chellaoui",
    craftTitle: "Une histoire d'art.",
    craftParagraphs: [
      "Dans cette nouvelle aventure artistique, Nadia Chellaoui associe broderie et cuir pour creer des pieces originales et raffinees.",
      "Chaque creation est realisee a la main, proposee en variations soignees et enrichie de details metalliques subtils.",
      "Elle collabore avec des artisans d'exception, valorisant les savoir-faire ancestraux dans une vision contemporaine et culturelle."
    ],
    craftImage: "https://nadiachellaoui.com/wp-content/uploads/2025/08/nc-art.jpg",
    craftImageAlt: "Detail d'oeuvre de Nadia Chellaoui",
    works: [
      {
        title: "Le Calips'Oh.",
        year: "2015",
        description:
          "Cette oeuvre iconique, vibrante de couleurs et de formes geometriques, explore la dualite et la complexite emotionnelle a travers un visage fragmente et stylise.",
        image: sharedWorks.calipsohImage,
        imageAlt: "Peinture Le Calips'Oh"
      },
      {
        title: "Transcendence.",
        year: "2019",
        description:
          "Dominee par des bleus profonds, cette toile exprime l'introspection et une forte intensite emotionnelle a travers un regard enigmatique.",
        image: sharedWorks.transcendenceImage,
        imageAlt: "Peinture Transcendence"
      },
      {
        title: "Symphonie.",
        year: "2020",
        description:
          "Entre nuances de bleu et fragmentation geometrique, cette composition traduit une recherche evolutive de l'identite et de la perception.",
        image: sharedWorks.symphonyImage,
        imageAlt: "Peinture Symphonie"
      },
      {
        title: "Eveil.",
        year: "2022",
        description:
          "Une piece contemplative ou gestes abstraits et regard penetrant evoquent un moment d'eveil interieur.",
        image: sharedWorks.awakeningImage,
        imageAlt: "Peinture Eveil"
      },
      {
        title: "Abysse.",
        year: "2024",
        description:
          "Parmi les oeuvres recentes de l'artiste, cette toile plonge dans le mystere et la verite interieure grace a des couches de bleus profonds.",
        image: sharedWorks.abyssImage,
        imageAlt: "Peinture Abysse"
      }
    ]
  },
  ar: {
    eyebrow: "نبذة",
    title: "الفنانة ناديا شلاوي",
    introParagraphs: [
      "في عام 2007 كرست ناديا شلاوي نفسها للرسم، وانتقلت من التكوين التقني إلى ممارسة فنية تلقائية.",
      "كل ضربة فرشاة رسخت أسلوبا شخصيا وهوية بصرية أكثر تميزا.",
      "وفي 2017 وسعت عالمها الإبداعي إلى فنون الجلد بإطلاق أول حقيبة لها: كاليبسو.",
      "ثم واصلت تطوير هذه السلسلة بأسماء مستوحاة من الأساطير، في حوار بين الرمز والشكل واللون.",
      "هذا المسار يربط عمدا بين اللوحة والحرفة عبر رموز متكررة: القلب، العين، الفم، الحمامة، والنجمة."
    ],
    introImage: "https://nadiachellaoui.com/wp-content/uploads/2025/08/nc.jpg",
    introImageAlt: "صورة للفنانة ناديا شلاوي",
    craftTitle: "حكاية فن.",
    craftParagraphs: [
      "في هذا المسار الفني الجديد، جمعت ناديا شلاوي بين التطريز والجلد لصناعة أعمال أصلية راقية.",
      "كل قطعة مصنوعة يدويا وتقدم بصيغ متعددة مع تفاصيل معدنية ذهبية دقيقة.",
      "كما تعاونت مع حرفيين متميزين لإبراز الحرف التقليدية ضمن رؤية معاصرة وثقافية."
    ],
    craftImage: "https://nadiachellaoui.com/wp-content/uploads/2025/08/nc-art.jpg",
    craftImageAlt: "تفاصيل عمل فني لناديا شلاوي",
    works: [
      {
        title: "كاليبسو.",
        year: "2015",
        description:
          "لوحة أيقونية نابضة بالألوان والأشكال الهندسية، تعبر عن الازدواجية وتعقيد المشاعر عبر وجه مجزأ ومؤثر.",
        image: sharedWorks.calipsohImage,
        imageAlt: "لوحة كاليبسو"
      },
      {
        title: "التسامي.",
        year: "2019",
        description:
          "تهيمن عليها درجات الأزرق العميقة، وتعكس عمقا عاطفيا وتأملا داخليا من خلال نظرة غامضة.",
        image: sharedWorks.transcendenceImage,
        imageAlt: "لوحة التسامي"
      },
      {
        title: "سيمفونية.",
        year: "2020",
        description:
          "تركيب بصري بين الأزرق والتفكيك الهندسي يعكس تطور البحث عن الهوية والإدراك.",
        image: sharedWorks.symphonyImage,
        imageAlt: "لوحة سيمفونية"
      },
      {
        title: "الصحوة.",
        year: "2022",
        description:
          "عمل تأملي تمزج فيه اللمسات التجريدية مع نظرة نافذة لتجسيد لحظة وعي داخلي.",
        image: sharedWorks.awakeningImage,
        imageAlt: "لوحة الصحوة"
      },
      {
        title: "الهاوية.",
        year: "2024",
        description:
          "من أحدث أعمال الفنانة، يغمر المتلقي في فضاء من الغموض والحقيقة الداخلية عبر طبقات زرقاء كثيفة.",
        image: sharedWorks.abyssImage,
        imageAlt: "لوحة الهاوية"
      }
    ]
  }
};
