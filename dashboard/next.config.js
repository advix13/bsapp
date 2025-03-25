/** @type {import('next').NextConfig} */
const nextConfig = {
  // Skip build errors
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Optimization settings
  reactStrictMode: false,
  swcMinify: false,
  // Basic image settings
  images: {
    unoptimized: true
  },
  // Disable minimization
  webpack: (config) => {
    config.optimization.minimize = false;
    return config;
  }
};

module.exports = nextConfig; 