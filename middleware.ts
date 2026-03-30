import { NextRequest, NextResponse } from "next/server";
import { i18n, isValidLocale } from "@/lib/i18n";

function getLocaleFromRequest(request: NextRequest) {
  const cookieLocale = request.cookies.get("locale")?.value;

  if (cookieLocale && isValidLocale(cookieLocale)) {
    return cookieLocale;
  }

  return i18n.defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const hasLocale = i18n.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${i18n.defaultLocale}`;
    return NextResponse.redirect(url);
  }

  if (!hasLocale) {
    const locale = getLocaleFromRequest(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(url);
  }

  const localeInPath = pathname.split("/")[1];
  const response = NextResponse.next();

  if (isValidLocale(localeInPath)) {
    response.cookies.set("locale", localeInPath, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"]
};
