import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/manuscript", destination: "/index", permanent: true }];
  },
};

export default nextConfig;
