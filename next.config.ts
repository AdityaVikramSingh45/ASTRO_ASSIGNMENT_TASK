import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['www.shutterstock.com'], // whitelist your external domain
  },
};

export default nextConfig;
