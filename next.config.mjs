/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; img-src 'self' data: https:;",
  },
};

export default nextConfig;
