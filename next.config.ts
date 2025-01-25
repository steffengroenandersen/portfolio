import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === "production";
// export const basePath = isProd ? "/portfolio" : "";
export const basePath = "/portfolio";

const nextConfig: NextConfig = {
  basePath: basePath,
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
