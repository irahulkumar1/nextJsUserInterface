const { defineConfig } = require('next/config');

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

const config = defineConfig(nextConfig);

module.exports = config;
