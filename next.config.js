// next.config.js
import { defineConfig } from 'next/config';

export default defineConfig({
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
});