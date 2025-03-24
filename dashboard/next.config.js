/** @type {import('next').NextConfig} */
const path = require('path');
const fs = require('fs');

// For GitHub Pages deployment - using no base path for direct deployment
const isProd = process.env.NODE_ENV === 'production';

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
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Static HTML export for GitHub Pages
  output: 'export',
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
  // Add a workaround for handling route groups properly
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // This helps with route group handling
    config.optimization.moduleIds = 'deterministic';
    
    return config;
  },
  // Custom distDir to avoid issues with nested directories in route groups
  distDir: '.next',
  // Needed for static export with route groups
  trailingSlash: true,
};

module.exports = nextConfig; 