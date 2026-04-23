/** @jest-environment node */ 
import { validateMiddlewareConfig } from "@vercel/microfrontends/next/testing";
import {config as marketingMiddlewareConfig } from "../middleware";

describe("middleware configuraiton", () => {
    const configPath = "./microfrontends.json"

    test("marketing middleware config is compatible with microfrontends", () => {
        expect(() =>
            validateMiddlewareConfig(marketingMiddlewareConfig, configPath)
        ).not.toThrow();
    });
});