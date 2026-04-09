import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  transpilePackages: ["aicms"],
  serverExternalPackages: ["better-sqlite3"],
};

export default nextConfig;
