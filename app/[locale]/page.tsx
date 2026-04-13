import { notFound } from "next/navigation";
import AboutSection from "@/components/AboutSection";
import AnimatedGallery from "@/components/AnimatedGallery";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Reveal from "@/components/Reveal";
import { getDictionary, isValidLocale, t } from "@/lib/i18n";

const worksPhotos = [
  {
    src: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?auto=format&fit=crop&w=1200&q=80",
    alt: "Painted texture close up",
    title: "Chromatic Surface I"
  },
  {
    src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    alt: "Minimal sculpture in studio",
    title: "Silent Studio Form"
  },
  {
    src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1200&q=80",
    alt: "Immersive abstract installation",
    title: "Immersive Field"
  },
  {
    src: "https://picsum.photos/seed/contemporary-framed-art/1200/1500",
    alt: "Contemporary framed art",
    title: "Frame and Light"
  },
  {
    src: "https://images.unsplash.com/photo-1577720643272-265f09367456?auto=format&fit=crop&w=1200&q=80",
    alt: "Expressive colorful canvas",
    title: "Gesture in Crimson"
  },
  {
    src: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=1200&q=80",
    alt: "Gallery room with modern art",
    title: "Gallery Nocturne"
  }
];

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);

  return (
    <section className="space-y-10 pb-16 sm:space-y-14 sm:pb-20">
      <HeroSection
        locale={locale}
        eyebrow={t(dictionary, "home.eyebrow")}
        title={t(dictionary, "home.title")}
        subtitle={t(dictionary, "home.subtitle")}
        ctaWorks={t(dictionary, "home.ctaWorks")}
        ctaContact={t(dictionary, "home.ctaContact")}
        scrollLabel={t(dictionary, "home.scrollLabel")}
      />

      <div id="exhibitions" className="h-0 scroll-mt-28" />
      <div id="art-fairs" className="h-0 scroll-mt-28" />
      <div id="cv" className="h-0 scroll-mt-28" />
      <div id="bibliography" className="h-0 scroll-mt-28" />
      <div id="press" className="h-0 scroll-mt-28" />

      <section id="works" className="space-y-6 scroll-mt-28 sm:space-y-8">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-5xl">{dictionary.works.title}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-sm leading-relaxed text-ink/75 sm:text-base">
            {dictionary.works.intro}
          </p>
        </Reveal>
        <AnimatedGallery
          items={worksPhotos}
          openLabel={dictionary.works.openArtwork}
          closeLabel={dictionary.works.closeLightbox}
          previousLabel={dictionary.works.previous}
          nextLabel={dictionary.works.next}
        />
      </section>

      <AboutSection
        title={dictionary.about.title}
        eyebrow={dictionary.about.eyebrow}
        quote={dictionary.about.quote}
        bio={dictionary.about.bio}
        portraitAlt={dictionary.about.portraitAlt}
        isRtl={locale === "ar"}
      />

      <ContactSection
        title={dictionary.contact.title}
        eyebrow={dictionary.contact.eyebrow}
        intro={dictionary.contact.intro}
        emailLabel={dictionary.contact.emailLabel}
        instagramLabel={dictionary.contact.instagramLabel}
        locationLabel={dictionary.contact.locationLabel}
        city={dictionary.contact.city}
        formName={dictionary.contact.formName}
        formEmail={dictionary.contact.formEmail}
        formMessage={dictionary.contact.formMessage}
        formSubmit={dictionary.contact.formSubmit}
        emailValue={dictionary.contact.emailValue}
        instagramValue={dictionary.contact.instagramValue}
        isRtl={locale === "ar"}
      />
    </section>
  );
}
