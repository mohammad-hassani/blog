/** @type {import('next').NextConfig} */

module.exports = {
  nextConfig:{
    reactStrictMode: true,
  },
  images: {
    loader: 'akamai',
    domains: ['avatars.githubusercontent.com'],
  },
}
