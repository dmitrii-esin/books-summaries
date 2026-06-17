import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/books-summaries',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
