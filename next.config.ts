import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for static generation
  reactStrictMode: true,

  // Overridable so a second dev instance can run without fighting over .next
  ...(process.env.NEXT_DIST_DIR ? { distDir: process.env.NEXT_DIST_DIR } : {}),

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
