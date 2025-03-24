/** @type {import('next').NextConfig} */
const path = require('path');
const fs = require('fs');

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
  // Enable image optimization for Vercel
  images: {
    domains: [],
    // Only needed for static export, remove for Vercel
    // unoptimized: true,
  },
  // Remove static export for Vercel
  // output: 'export',
  // Disable React strict mode
  reactStrictMode: false,
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  // Disable powered by header
  poweredByHeader: false,
  // Enable compression
  compress: true,
  // Custom distDir to avoid issues with nested directories in route groups
  distDir: '.next',
  // Only needed for static export, not for Vercel
  // trailingSlash: true,
};

module.exports = nextConfig; 