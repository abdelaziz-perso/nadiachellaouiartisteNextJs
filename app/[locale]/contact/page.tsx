import { notFound } from "next/navigation";
import ContactSection from "@/components/ContactSection";
import { getDictionary, isValidLocale } from "@/lib/i18n";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);

  return (
    <section className="py-10 sm:py-14">
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
