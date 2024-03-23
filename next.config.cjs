// require = require('esm')(module /*, options*/);

const { defineConfig } = require("next/config");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sarkarifiling-assets.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/images/**",
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
