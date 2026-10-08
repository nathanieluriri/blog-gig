import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    // Cloudflare Workers has no built-in Next image optimizer; images are pre-compressed instead.
    unoptimized: true,
  },
};

export default nextConfig;
