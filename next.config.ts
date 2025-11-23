import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "commondatastorage.googleapis.com",
        pathname: "/gtv-videos-bucket/**",
      },
      {
        protocol: "https",
        hostname: "iili.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.iili.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "http://player-rising-api.aleeaqee.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
