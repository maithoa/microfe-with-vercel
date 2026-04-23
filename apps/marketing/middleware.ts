import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.next()
}

// Matcher
export const config = {
  matcher: [
    /*
     * Allow all rules except for the ones that are handled by other apps or Next.js itself (like API routes, static files, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|app|settings|docs|vc-ap-).*)',
  ],
}