/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Unofficial nchat',
    description: 'My unofficial nchat build',
    icon: 'https://user-images.githubusercontent.com/5698566/230345149-ef757e51-6eb9-479d-94f5-a13e4ad33b03.png',
    listUrl: 'https://chriswilson2020.github.com/kasm-workspaces-nchat/',
    contactUrl: 'https://chriswilson2020.github.com/kasm-workspaces-nchat/issues/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-workspaces-nchat/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
