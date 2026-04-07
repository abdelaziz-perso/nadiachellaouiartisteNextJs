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
      "Nadia Chellaoui is a Moroccan painter whose universe stands out through the emotional intensity of her works, the power of the gaze, and the vibration of color. Self-taught, she has developed over the years a singular pictorial language where sensitivity, materiality, identity, and the depth of the human soul come together.",
      "Born in Rabat and based in Casablanca, she builds a deeply inhabited body of work, driven by a constant search for authenticity. Her canvases, often marked by expressive faces and a vibrant palette dominated by blue, explore femininity, memory, interiority, and silent emotions. Through her painting, Nadia Chellaoui seeks less to represent than to reveal, giving form to the invisible and opening a space of intimate resonance with the viewer.",
      "Her artistic journey has unfolded in Morocco and internationally through several landmark exhibitions. The year 2025 marks an important stage in her visibility, with a collective exhibition in Rome in February, participation in art3f Milan in March, a presence at MUST Museum - Museo Storico di Lecce in May, and a two-month solo exhibition in Venice, a key moment of maturity and recognition in her career. This momentum continued with a collective exhibition in Madrid in November and an announced presence at the Carrousel du Louvre in Paris, confirming the international anchoring of her work.",
      "Through each of her creations, Nadia Chellaoui affirms a sensitive and embodied painting, where color becomes language, the gaze becomes passage, and the work becomes a meeting place between emotion, memory, and humanity."
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
      "Nadia Chellaoui est une artiste peintre marocaine dont l’univers se distingue par l’intensité émotionnelle de ses œuvres, la puissance du regard et la vibration de la couleur. Autodidacte, elle a développé au fil des années une écriture picturale singulière, où se rencontrent sensibilité, matière, identité et profondeur de l’âme humaine.",
      "Née à Rabat et basée à Casablanca, elle construit une œuvre profondément habitée, portée par une recherche constante d’authenticité. Ses toiles, souvent marquées par des visages expressifs et une palette vibrante dominée par le bleu, explorent la féminité, la mémoire, l’intériorité et les émotions silencieuses. À travers sa peinture, Nadia Chellaoui cherche moins à représenter qu’à révéler, en donnant forme à l’invisible et en ouvrant un espace de résonance intime avec le regardeur.",
      "Son parcours artistique s’est déployé au Maroc comme à l’international, à travers plusieurs expositions marquantes. L’année 2025 constitue une étape importante de son rayonnement, avec une exposition collective à Rome en février, une participation à art3f Milan en mars, une présence au MUST Museum – Museo Storico di Lecce en mai, ainsi qu’une exposition personnelle à Venise sur deux mois, moment fort de maturité et de visibilité dans son parcours. Cette dynamique s’est poursuivie avec une exposition collective à Madrid en novembre et une présence annoncée au Carrousel du Louvre à Paris, confirmant l’ancrage international de son œuvre.",
      "À travers chacune de ses créations, Nadia Chellaoui affirme une peinture sensible et incarnée, où la couleur devient langage, le regard devient passage, et l’œuvre un lieu de rencontre entre émotion, mémoire et humanité."
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
      "ناديا شلاوي فنانة تشكيلية مغربية يتميز عالمها الفني بكثافة العاطفة في أعمالها، وقوة النظرة، واهتزاز اللون. وبكونها عصامية، طورت على مر السنوات كتابة تشكيلية متفردة تلتقي فيها الحساسية والمادة والهوية وعمق الروح الإنسانية.",
      "وُلدت في الرباط وتقيم في الدار البيضاء، وتبني مشروعا فنيا نابضا من الداخل، تقوده رغبة دائمة في الأصالة. لوحاتها، التي كثيرا ما تتسم بوجوه معبرة وبألوان نابضة يهيمن عليها الأزرق، تستكشف الأنوثة والذاكرة والعالم الداخلي والمشاعر الصامتة. ومن خلال الرسم، تسعى ناديا شلاوي أقل إلى التمثيل وأكثر إلى الكشف، فتعطي شكلا لغير المرئي وتفتح فضاءً من الصدى الحميم مع المتلقي.",
      "وقد امتد مسارها الفني داخل المغرب وخارجه عبر معارض بارزة متعددة. وشكل عام 2025 محطة مهمة في إشعاعها، من خلال معرض جماعي في روما في فبراير، ومشاركة في art3f ميلانو في مارس، وحضور في MUST Museum - Museo Storico di Lecce في مايو، إضافة إلى معرض فردي في البندقية على مدى شهرين، شكّل لحظة نضج وظهور قوية في مسيرتها. واستمرت هذه الدينامية عبر معرض جماعي في مدريد في نوفمبر، وحضور معلن في كاروسيل اللوفر بباريس، بما يؤكد ترسخ أعمالها على الساحة الدولية.",
      "ومن خلال كل أعمالها، تؤكد ناديا شلاوي على رسم حساس ومتجسد، حيث يصبح اللون لغة، وتصبح النظرة معبرا، ويغدو العمل فضاءً للقاء بين العاطفة والذاكرة والإنسانية."
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
