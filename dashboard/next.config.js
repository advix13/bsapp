/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  /* config options here */
  typescript: {
    // !! WARN !!
    // Ignoring TypeScript errors for deployment
    ignoreBuildErrors: true,
  },
  eslint: {
    // !! WARN !!
    // Ignoring ESLint errors for deployment
    ignoreDuringBuilds: true,
  },
  // Ensure we properly handle client components
  experimental: {
    serverActions: true,
  },
  // Add trailing slashes to ensure consistent routing
  trailingSlash: true,
};

module.exports = nextConfig; 