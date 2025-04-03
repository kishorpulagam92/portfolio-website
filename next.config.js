/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['raw.githubusercontent.com'],
  },
  basePath: '/portfolio-website',
  assetPrefix: '/portfolio-website/',
  output: 'export',
}

module.exports = nextConfig 