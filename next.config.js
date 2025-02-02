/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Enables a single executable for the server
  reactStrictMode: true,
  experimental: {
    serverActions: true, // Needed for server-side actions in Next.js 14
  },
};

module.exports = nextConfig