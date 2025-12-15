import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    loader: 'custom',
    loaderFile: './app/local-or-prod-loader.ts',
  },
  basePath: '/jvs-range-buddy',
  assetPrefix: '/jvs-range-buddy/',
};

export default nextConfig;
