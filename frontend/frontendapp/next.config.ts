import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/users/:path*',
        destination: 'http://localhost:3000/users/:path*', // Redirige solicitudes al backend
      },
    ];
  },
};

export default nextConfig;
