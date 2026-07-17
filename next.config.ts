import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/language",
  images: {
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

export default nextConfig;