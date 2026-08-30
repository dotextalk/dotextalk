/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/about-us',
        destination: '/architect',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/social-media-marketing',
        destination: '/services/seo-ai-visibility',
        permanent: true,
      },
      {
        source: '/content-writing',
        destination: '/services/seo-ai-visibility',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
