import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // The site is fully static: `next build` writes plain HTML, CSS and JS to `out/`, which any static host can serve.
  output: "export",
  images: {
    // A static export has no server to resize images on request, so they are served as the files in `public/`.
    unoptimized: true,
  },
}

export default nextConfig
