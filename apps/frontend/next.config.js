/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "mtp-cf-images.s3-eu-west-1.amazonaws.com",
      "mitp-p-001-delivery.sitecorecontenthub.cloud",
      "axwwgrkdco.cloudimg.io",
      "cloudimg.io",
      "axwwgrkdco.cloudimg.io/v7/mtp-cf-images.s3-eu-west-1.amazonaws.com"
    ],
  },
};

module.exports = nextConfig;
