import type { NextConfig } from "next";
import { withMicrofrontends } from "@vercel/microfrontends/next/config";

const nextConfig: NextConfig = {
  // No basePath - dashboard handles both /app/* and /settings/* routes
};

export default withMicrofrontends(nextConfig);
