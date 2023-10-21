/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    esmExternals: "loose",
  },
  requiresDevicePermission: ["camera"],
};

module.exports = nextConfig;
