// next.config.js
import nextConfig from 'next/config';

const {
  // Retrieve values from the default/previous next.config.js file
  serverRuntimeConfig,
  publicRuntimeConfig,
  ...otherConfig
} = nextConfig();

// Add your custom configurations here
const customConfig = {
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

// Merge the default configurations with the custom configurations
module.exports = {
  ...otherConfig,
  ...customConfig,
  serverRuntimeConfig,
  publicRuntimeConfig,
};