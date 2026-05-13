import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ymaykuwwxxlpnscbibfm.supabase.co",
        pathname: "/storage/v1/object/public/portfolio/**",
      },
    ],
  },
};

export default nextConfig;
