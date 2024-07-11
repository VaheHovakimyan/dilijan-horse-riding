/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
//   env: {
//     googleAnalyticsID: "G-MK2YDLVJBY",
//   },

  // i18n,

  // reactStrictMode: true,
  // swcMinify: false,
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    let id = String(Date.now());
    return id;
  },

  devIndicators: {
    buildActivityPosition: "top-right",
  },


};

module.exports = withBundleAnalyzer(nextConfig);

