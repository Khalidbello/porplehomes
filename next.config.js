/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
       
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'porplehomes.com',
          port: '',
        },
      ],
      },
}

// domains: [
//   'localhost',
//   'digitalhippo-production.up.railway.app',
// ],

module.exports = nextConfig
