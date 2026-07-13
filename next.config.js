/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Jika gambar berasal dari domain eksternal, tambahkan di sini (opsional)
    // domains: ['example.com'],
  },
};

module.exports = nextConfig;
