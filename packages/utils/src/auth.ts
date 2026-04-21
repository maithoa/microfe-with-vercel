import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

export interface AuthToken {
    userId: string;
    email: string;
    exp: number;
}

export function getAuthToken (request: NextRequest): string | undefined {
    return request.cookies.get("auth-token")?.value;
}

export function isAuthenticated(request: NextRequest): boolean {
    const token = getAuthToken(request);
    if(!token) return false;
    // In a real app, verify the JWT here.
    return true;
}

export function decodeToken(token:string): AuthToken | null {
    try{
        // In a real app, use a proper JWT library
        const payload = jwtDecode<AuthToken>(token);

        return payload as AuthToken;

    } catch {
        return null;
    }
}

