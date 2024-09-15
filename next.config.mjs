/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_TYPE_1: process.env.NEXT_PUBLIC_TYPE_1,
    NEXT_PUBLIC_TYPE_2: process.env.NEXT_PUBLIC_TYPE_2,
    NEXT_PUBLIC_TYPE_3: process.env.NEXT_PUBLIC_TYPE_3,
  },
  reactStrictMode: false,
};

export default nextConfig;
