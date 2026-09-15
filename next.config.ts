import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/here-there/support", destination: "/here-there/support/index.html" },
      { source: "/here-there/privacy", destination: "/here-there/privacy/index.html" }
    ];
  }
};

export default nextConfig;
