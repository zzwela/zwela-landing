import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  serverExternalPackages: ["firebase-admin"],
  async redirects() {
    return [{ source: "/terms", destination: "/tcs", permanent: true }];
  },
};

export default nextConfig;
