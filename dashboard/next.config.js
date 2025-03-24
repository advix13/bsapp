/** @type {import('next').NextConfig} */
const path = require('path');
const fs = require('fs');

// Get repository name from package.json or default to empty string
const getBasePath = () => {
  return process.env.GITHUB_ACTIONS === 'true' ? '/bsapp' : '';
};

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
    // Add serverActions to ensure proper build
    serverActions: true,
  },
  // Disable image optimization
  images: {
    unoptimized: true,
    domains: ['*'],
  },
  // Use 'export' for GitHub Pages
  output: 'export',
  // Set basePath for GitHub Pages
  basePath: getBasePath(),
  // Set assetPrefix for GitHub Pages
  assetPrefix: getBasePath(),
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
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.__NEXT_ROUTER_BASEPATH': JSON.stringify(getBasePath()),
      })
    );
    
    return config;
  },
  // Custom distDir to avoid issues with nested directories in route groups
  distDir: '.next',
  // Ensure routes with parentheses are handled correctly
  async rewrites() {
    return [
      {
        source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
        destination: '/$1',
      },
    ];
  },
  // Needed for static export with route groups
  trailingSlash: true,
};

module.exports = nextConfig; 