import type { NextConfig } from "next";
import { withMicrofrontends } from "@vercel/microfrontends/next/config"

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async() => [
    {
      source: "/documentation",
      destination: "/docs",
      permanent: true,
    },
  ],

  experimental: {
    // multiZoneDraftMode sync states between host app and remote app
    multiZoneDraftMode: true,
  }
};

export default withMicrofrontends(nextConfig);
