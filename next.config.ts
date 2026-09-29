import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `next build` writes plain HTML to /out (Netlify, Vercel, GitHub Pages all work).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
