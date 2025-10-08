import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for static generation
  reactStrictMode: true,

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
