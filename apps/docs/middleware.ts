import { NextRequest, NextResponse } from "next/server";

// middleware.ts in docs app
export function middleware(request: NextRequest) {
    // This ONLY runs for /docs/* requests
    // Requests to /app/* never reach this middleware, as they are handled by the marketing app's middleware.

}