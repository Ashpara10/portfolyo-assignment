/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portfolio-image-store.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
