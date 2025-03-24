/** @type {import('next').NextConfig} */
const path = require('path');
const fs = require('fs');

// For GitHub Pages deployment
const isProd = process.env.NODE_ENV === 'production';
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGitHubActions ? '/bsapp' : '';

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
  // Set basePath for GitHub Pages - THIS IS CRITICAL
  basePath: basePath,
  // Set assetPrefix for GitHub Pages assets
  assetPrefix: basePath,
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
    
    // Add a plugin to handle the client-reference-manifest issue
    if (webpack.DefinePlugin) {
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.__NEXT_ROUTER_BASEPATH': JSON.stringify(basePath),
        })
      );
    }
    
    return config;
  },
  // Custom distDir to avoid issues with nested directories in route groups
  distDir: '.next',
  // Needed for static export with route groups
  trailingSlash: true,
};

module.exports = nextConfig; 