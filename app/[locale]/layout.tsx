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
import { InstagramIcon } from "@/components/SocialIcons";
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
      <a
        href="#main_content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-black focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to main content
      </a>
      <div className="grain-overlay" />
      <CustomCursor />

      <StickyHeader>
        <div className="mx-auto flex w-full max-w-[1700px] items-center justify-between px-8 py-4 xl:px-12">
          <BrandMark locale={locale} label="Nadia Chellaoui" className="self-center justify-self-start" />

          <div className="hidden items-center gap-6 lg:flex">
            <DesktopNav locale={locale} />
            <Link
              href="https://instagram.com/nadiachellaoui_artiste"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 p-2 text-neutral-700 transition-all duration-200 ease-in-out hover:bg-black/5 hover:text-neutral-900"
              aria-label={dictionary.footer.instagramLabel}
            >
              <InstagramIcon className="h-4 w-4" />
            </Link>
            <LanguageSwitcher locale={locale as Locale} />
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <MobileNav
              locale={locale}
              menuLabel={locale === "ar" ? "القائمة" : locale === "fr" ? "Menu" : "Menu"}
              closeLabel={locale === "ar" ? "إغلاق" : locale === "fr" ? "Fermer" : "Close"}
              socialPrimaryLabel={dictionary.footer.instagramLabel}
              socialPrimaryHref="https://instagram.com/nadiachellaoui_artiste"
              socialSecondaryLabel={dictionary.footer.facebookLabel}
              socialSecondaryHref="https://web.facebook.com/nadia.chellaoui.artiste/?_rdc=1&_rdr#"
              socialTertiaryLabel="Website"
              socialTertiaryHref="https://nadiachellaoui.com/en/"
            />
          </div>
        </div>
      </StickyHeader>

      <main id="main_content" className="container-padding mx-auto w-full max-w-6xl">
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
        facebookLabel={dictionary.footer.facebookLabel}
        instagramHandle={dictionary.footer.instagramHandle}
        facebookHandle={dictionary.footer.facebookHandle}
        rights={dictionary.footer.rights}
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
