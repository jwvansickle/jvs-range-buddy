import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: '/jvs-range-buddy',
  assetPrefix: '/jvs-range-buddy/',
};

export default nextConfig;
