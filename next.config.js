/** @type {import('next').NextConfig} */

module.exports = {
  nextConfig:{
    reactStrictMode: true,
  },
  experimental: {
    images: {
      loader: 'akamai',
      path: ['avatars.githubusercontent.com'],
    },
  },
}
