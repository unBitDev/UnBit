/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    CONTENTFUL_TOKEN: process.env.CONTENTFUL_TOKEN,
    CONTENTFUL_ENVIROMENT: process.env.CONTENTFUL_ENVIROMENT
  }
}

module.exports = nextConfig
