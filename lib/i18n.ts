export const i18n = {
  defaultLocale: "fr" as const,
  locales: ["fr", "en", "ar"] as const
};

export type Locale = (typeof i18n.locales)[number];

export type Dictionary = {
  nav: {
    home: string;
    works: string;
    about: string;
    contact: string;
  };
  home: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaWorks: string;
    ctaContact: string;
    scrollLabel: string;
  };
  works: {
    title: string;
    intro: string;
    openArtwork: string;
    closeLightbox: string;
    previous: string;
    next: string;
  };
  about: {
    title: string;
    eyebrow: string;
    quote: string;
    bio: string;
    portraitAlt: string;
  };
  contact: {
    title: string;
    eyebrow: string;
    intro: string;
    emailLabel: string;
    instagramLabel: string;
    locationLabel: string;
    city: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    emailValue: string;
    instagramValue: string;
  };
  footer: {
    artistName: string;
    tagline: string;
    navTitle: string;
    socialTitle: string;
    emailLabel: string;
    emailValue: string;
    instagramLabel: string;
    behanceLabel: string;
    facebookLabel: string;
    instagramHandle: string;
    behanceHandle: string;
    facebookHandle: string;
    rights: string;
  };
  social: {
    title: string;
    whatsapp: string;
    whatsappHello: string;
    whatsappPlaceholder: string;
    whatsappClose: string;
    whatsappSend: string;
  };
};

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  fr: () => import("@/messages/fr.json").then((module) => module.default),
  en: () => import("@/messages/en.json").then((module) => module.default),
  ar: () => import("@/messages/ar.json").then((module) => module.default)
};

export async function getDictionary(locale: string): Promise<Dictionary> {
  const safeLocale: Locale = isValidLocale(locale) ? locale : i18n.defaultLocale;
  return dictionaries[safeLocale]();
}

export function isValidLocale(locale: string): locale is Locale {
  return i18n.locales.includes(locale as Locale);
}

export function t(dictionary: Dictionary, key: string): string {
  return key.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return key;
  }, dictionary) as string;
}

