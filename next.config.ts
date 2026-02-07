import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/supomelo-website',
  assetPrefix: '/supomelo-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
