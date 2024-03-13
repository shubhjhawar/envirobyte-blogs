const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
      remotePatterns:[
        {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com',
          port:'',
          pathname:'/shubhjhawar/blogposts/main/images/**',
        }
      ]
    }
}

module.exports = withContentlayer(nextConfig)