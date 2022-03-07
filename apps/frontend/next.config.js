/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "axwwgrkdco.cloudimg.io",
      "mtp-cf-images.s3-eu-west-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
