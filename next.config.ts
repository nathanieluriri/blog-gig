import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "commondatastorage.googleapis.com",
        pathname: "/gtv-videos-bucket/**",
      },
    ],
  },
};

export default nextConfig;
