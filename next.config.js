/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  headers: [
    {
      key: 'X-Robots-Tag',
      value: 'index',
    },
  ],
}

module.exports = nextConfig
