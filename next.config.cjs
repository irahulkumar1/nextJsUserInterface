// Enable ES module support in CommonJS
require = require('esm')(module /*, options*/);

// Import the defineConfig function from next/config
const { defineConfig } = require('next/config');

// Define your nextConfig object
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sarkarifiling-assets.s3.ap-south-1.amazonaws.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  experimental: {
    outputFileTracing: true,
    outputStandalone: true,
    esmExternals: true,
  },
};

// Export the config using defineConfig
module.exports = defineConfig(nextConfig);
