import { NextRequest, NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages } from './app/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Obtém o idioma do cookie ou do cabeçalho Accept-Language
  let lng
  if (request.cookies.has('NEXT_LOCALE')) {
    lng = acceptLanguage.get(request.cookies.get('NEXT_LOCALE')?.value)
  }
  if (!lng) lng = acceptLanguage.get(request.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng

  // Redirect se o idioma não está no path
  if (
    !languages.some(loc => path.startsWith(`/${loc}/`) || path === `/${loc}`)
  ) {
    return NextResponse.redirect(new URL(`/${lng}${path}`, request.url))
  }

  // Definir cookie se está em um idioma
  if (request.headers.has('referer')) {
    const refererUrl = new URL(request.headers.get('referer') || '')
    const lngInReferer = languages.find(l =>
      refererUrl.pathname.startsWith(`/${l}`),
    )
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set('NEXT_LOCALE', lngInReferer)
    return response
  }

  return NextResponse.next()
}
