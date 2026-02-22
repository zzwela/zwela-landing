import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [{ source: "/terms", destination: "/tcs", permanent: true }];
  },
};

export default nextConfig;
