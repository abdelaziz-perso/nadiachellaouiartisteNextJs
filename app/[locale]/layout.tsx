import Link from "next/link";
import { notFound } from "next/navigation";
import BrandMark from "@/components/BrandMark";
import CustomCursor from "@/components/CustomCursor";
import DesktopNav from "@/components/DesktopNav";
import FooterSection from "@/components/FooterSection";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import LocaleSync from "@/components/LocaleSync";
import MobileNav from "@/components/MobileNav";
import PageTransition from "@/components/PageTransition";
import StickyHeader from "@/components/StickyHeader";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { getDictionary, i18n, isValidLocale, type Locale } from "@/lib/i18n";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);
  const isRtl = locale === "ar";

  return (
    <div className="min-h-screen">
      <LocaleSync locale={locale as Locale} locales={i18n.locales} />
      <div className="grain-overlay" />
      <CustomCursor />

      <StickyHeader>
        <div className="mx-auto grid w-full max-w-[1500px] grid-cols-[1fr_auto] items-center gap-4 px-6 py-3 xl:px-12 lg:grid-cols-[1fr_auto_1fr]">
          <BrandMark locale={locale} label="Nadia Chellaoui" className="self-center justify-self-start" />

          <div className="hidden justify-self-center lg:block">
            <DesktopNav
              locale={locale}
              homeLabel={dictionary.nav.home}
              worksLabel={dictionary.nav.works}
              aboutLabel={dictionary.nav.about}
              contactLabel={dictionary.nav.contact}
            />
          </div>

          <div className="flex items-center gap-2 justify-self-end">
            <LanguageSwitcher locale={locale as Locale} />
            <MobileNav
              locale={locale}
              homeLabel={dictionary.nav.home}
              worksLabel={dictionary.nav.works}
              aboutLabel={dictionary.nav.about}
              contactLabel={dictionary.nav.contact}
            />
          </div>
        </div>
      </StickyHeader>

      <main className="container-padding mx-auto w-full max-w-6xl py-7 sm:py-10">
        <PageTransition>{children}</PageTransition>
      </main>

      <FooterSection
        locale={locale}
        isRtl={isRtl}
        artistName={dictionary.footer.artistName}
        tagline={dictionary.footer.tagline}
        navTitle={dictionary.footer.navTitle}
        socialTitle={dictionary.footer.socialTitle}
        emailLabel={dictionary.footer.emailLabel}
        emailValue={dictionary.footer.emailValue}
        instagramLabel={dictionary.footer.instagramLabel}
        behanceLabel={dictionary.footer.behanceLabel}
        facebookLabel={dictionary.footer.facebookLabel}
        instagramHandle={dictionary.footer.instagramHandle}
        behanceHandle={dictionary.footer.behanceHandle}
        facebookHandle={dictionary.footer.facebookHandle}
        rights={dictionary.footer.rights}
        navLabels={{
          home: dictionary.nav.home,
          works: dictionary.nav.works,
          about: dictionary.nav.about,
          contact: dictionary.nav.contact
        }}
      />

      <WhatsAppWidget
        label={dictionary.social.whatsapp}
        helloMessage={dictionary.social.whatsappHello}
        placeholder={dictionary.social.whatsappPlaceholder}
        closeLabel={dictionary.social.whatsappClose}
        sendLabel={dictionary.social.whatsappSend}
        phoneNumber="212600000000"
        isRtl={locale === "ar"}
      />
    </div>
  );
}
