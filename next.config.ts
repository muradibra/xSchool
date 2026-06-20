import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.6.172"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.wemark.pro",
      },
    ],
  },
};

export default nextConfig;
