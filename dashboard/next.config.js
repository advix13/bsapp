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
    // Add serverActions to ensure proper build
    serverActions: true,
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
  // Add a workaround for handling route groups properly
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // This helps with route group handling
    config.optimization.moduleIds = 'deterministic';
    return config;
  },
};

module.exports = nextConfig; 