import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["framer-motion", "react-icons", "next-themes"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;