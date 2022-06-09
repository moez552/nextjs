
module.exports = (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        reactStrictMode: false, 
    images: {
      domains: ['via.placeholder.com'],
    },
      /* config options here */
    }
    return nextConfig
  }

