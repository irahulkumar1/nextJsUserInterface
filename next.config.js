module.exports = {
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
  }
  module.exports = {
    experimental: {
      outputFileTracing: true,
      outputStandalone: true,
      esmExternals: true,
    },
  };