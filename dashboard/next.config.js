/** @type {import('next').NextConfig} */
const path = require('path');
const fs = require('fs');

const nextConfig = {
  // Skip type checking and eslint during build - with enhanced ignoring
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Experimental features with improved error handling
  experimental: {
    forceSwcTransforms: true,
    esmExternals: 'loose', // More lenient ESM handling
    serverComponentsExternalPackages: [], // Prevents issues with external packages
    optimizePackageImports: false, // Disable optimizations that might cause issues
  },
  // Enable image optimization for Vercel
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Disable image size validation
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Disable React strict mode to avoid double renders
  reactStrictMode: false,
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  // Disable powered by header
  poweredByHeader: false,
  // Enable compression
  compress: true,
  // Custom distDir to avoid issues with nested directories in route groups
  distDir: '.next',
  // Ensure we can recover from build errors
  onDemandEntries: {
    // Keep pages in memory for longer
    maxInactiveAge: 60 * 60 * 1000, // 1 hour in milliseconds
    // Maximum number of pages to keep in memory
    pagesBufferLength: 5,
  },
  // Increase timeouts
  staticPageGenerationTimeout: 120,
  // Disable SWC minify as it can sometimes cause issues
  swcMinify: false,
};

module.exports = nextConfig; 