/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/products/Graphite%20Grey/:path*", destination: "/products/graphite-grey/:path*" },
      { source: "/products/Graphite Grey/:path*", destination: "/products/graphite-grey/:path*" },
      { source: "/products/Arctic%20White/:path*", destination: "/products/arctic-white/:path*" },
      { source: "/products/Arctic White/:path*", destination: "/products/arctic-white/:path*" },
      { source: "/products/Midnight%20Teal/:path*", destination: "/products/midnight-teal/:path*" },
      { source: "/products/Midnight Teal/:path*", destination: "/products/midnight-teal/:path*" },
      { source: "/products/Crimson%20Red/:path*", destination: "/products/crimson-red/:path*" },
      { source: "/products/Crimson Red/:path*", destination: "/products/crimson-red/:path*" },
      { source: "/products/Limited%20Edition%20Signal%20Orange/:path*", destination: "/products/signal-orange/:path*" },
      { source: "/products/Limited Edition Signal Orange/:path*", destination: "/products/signal-orange/:path*" },
      { source: "/products/Black%20Prototype/:path*", destination: "/products/black-prototype/:path*" },
      { source: "/products/Black Prototype/:path*", destination: "/products/black-prototype/:path*" },
    ];
  },
};
export default nextConfig;
