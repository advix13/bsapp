/** @type {import('next').NextConfig} */
const nextConfig = {
  // Skip type checking and eslint during build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable static optimization to avoid client manifest issues
  experimental: {
    serverActions: true,
    forceSwcTransforms: true,
    optimizePackageImports: false,
  },
  // Disable image optimization to reduce build complexity
  images: {
    unoptimized: true,
  },
  // Disable static page generation
  staticPageGenerationTimeout: 1000,
  // Add output standalone for better Vercel compatibility
  output: "standalone",
  // Disable React strict mode for more permissive builds
  reactStrictMode: false,
  // Increase build memory limit
  env: {
    NODE_OPTIONS: '--max-old-space-size=4096'
  },
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  // Disable powered by header
  poweredByHeader: false,
  // Generate ETags for better caching
  generateEtags: true,
  // Disable x-powered-by header
  compress: true,
  // Allow all domains for images
  images: {
    domains: ['*'],
    unoptimized: true,
  },
};

module.exports = nextConfig; 