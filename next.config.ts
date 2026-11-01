import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.13"],
  outputFileTracingIncludes: {
    "/api/download/**": ["./content/presets/**/*"],
    "/blog/**": ["./content/blog/**/*"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com" }],
  },
};

export default nextConfig;
