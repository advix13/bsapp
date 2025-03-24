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
    // Add serverActions to ensure proper build
    serverActions: true,
  },
  // Disable image optimization
  images: {
    unoptimized: true,
    domains: ['*'],
  },
  // Use standalone for Vercel compatibility
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
  // Add a workaround for handling route groups properly
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // This helps with route group handling
    config.optimization.moduleIds = 'deterministic';
    
    // Add a plugin to handle the client-reference-manifest issue
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.__NEXT_ROUTER_BASEPATH': JSON.stringify(''),
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
};

module.exports = nextConfig; 