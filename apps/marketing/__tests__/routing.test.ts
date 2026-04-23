/** @jest-environment node */
import { validateRouting } from "@vercel/microfrontends/next/testing";
import test, { describe } from "node:test";


describe("microfrontends routing", () => {
    const configPath = "./microfrontends.json";

    test("routes marketing paths to marketing app", () => {
        expect(() =>
            validateRouting(configPath, {
                "acme-marketing": ["/", "/pricing", "/about", "/contact"],
            })).not.toThrow();
    });

    it('should pass a basic check', () => {
        expect(true).toBe(true);
    });

    test("routes docs paths to docs app", () => {
        expect(() =>
            validateRouting(configPath, {
                "acme-docs": [
                    "/docs"
                ],
            })
        ).not.toThrow();
    });

    test("routes dashboard paths to dashboard app", () => {
        expect(() =>
            validateRouting(configPath, {
                "acme-dashboard": [
                    "/app",
                    "/app/*",
                    "/settings",
                    "/settings/*"
                ],
            })
        ).not.toThrow();
    });

    test("404 paths fall through to default app", () => {
        expect(() =>
            validateRouting(configPath, {
                "acme-marketing": ["/unknown-page", "/random/nested/path"],
            })
        ).not.toThrow();
    });

    test("EXAMPLE: this would catch a misconfiguration", () => {
        expect(() =>
            validateRouting("./microfrontends.json", {
                // Wrong! /docs should route to docs, not marketing
                "acme-marketing": ["/docs"],
            })
        ).toThrow();
    });
});

