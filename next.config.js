/** @type {import('next').NextConfig} */

module.exports = {
  nextConfig:{
    reactStrictMode: true,
  },
  images: {
    loader: 'akamai',
    path: ['avatars.githubusercontent.com'],
  },
}
