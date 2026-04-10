import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  serverExternalPackages: ["better-sqlite3"],
  turbopack: {
    resolveAlias: {
      aicms: "./lib/aicms-mock.ts",
      "aicms/server": "./lib/aicms-server-mock.ts",
      "aicms/widget": "./lib/aicms-widget-mock.ts",
    },
  },
};

export default nextConfig;
