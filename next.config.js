/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['gsap','hover-effect']);

const nextConfig = withTM({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
})

module.exports = nextConfig
