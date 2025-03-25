/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic configuration
  reactStrictMode: false,
  swcMinify: false,
  poweredByHeader: false,
  compress: true,
  
  // Ignore TypeScript and ESLint errors
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Enable static exports
  output: 'export',
  distDir: 'out',
  
  // Basic image configuration - unoptimized for static export
  images: {
    unoptimized: true
  },
  
  // Disable minimization completely with webpack
  webpack: (config) => {
    config.optimization.minimize = false;
    config.optimization.minimizer = [];
    return config;
  }
};

module.exports = nextConfig; 