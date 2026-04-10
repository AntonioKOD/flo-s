import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  serverExternalPackages: ["better-sqlite3"],
  transpilePackages: ["aicms"],
};

export default nextConfig;
