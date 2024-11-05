import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  experimental: {
    dynamicIO: true,
  },
};

export default config;
