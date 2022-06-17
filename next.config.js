module.exports = {
  
  // Will be available on both server and client
  publicRuntimeConfig: {
    
    staticFolder: '/static',
  },

  reactStrictMode: true, // was there by default

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.txt$/i,
      loader: "raw-loader",
    });

    // Important: return the modified config
    return config;
  },
};