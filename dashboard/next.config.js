/** @type {import('next').NextConfig} */
const nextConfig = {
  // Skip type checking and eslint during build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Experimental features
  experimental: {
    forceSwcTransforms: true,
  },
  // Disable image optimization
  images: {
    unoptimized: true,
    domains: ['*'],
  },
  // Output standalone build
  output: "standalone",
  // Disable React strict mode
  reactStrictMode: false,
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  // Disable powered by header
  poweredByHeader: false,
  // Enable compression
  compress: true,
  // Increase the build timeout
  staticPageGenerationTimeout: 1000,
};

module.exports = nextConfig; 