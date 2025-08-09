/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is enabled by default in Next.js 14
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configure base path for GitHub Pages if repository name is not the domain
  // basePath: '/repository-name', // Uncomment and replace with your repo name if needed
}

module.exports = nextConfig