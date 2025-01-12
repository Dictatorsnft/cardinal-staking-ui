const HOST_MAPPINGS = [
  {
    name: 'dictators',
    hostname: 'citadel.thedictator.xyz',
  },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MAINNET_PRIMARY: process.env.MAINNET_PRIMARY,
    BASE_CLUSTER: process.env.BASE_CLUSTER,
  },
  async rewrites() {
    return HOST_MAPPINGS.reduce(
      (acc, mapping) =>
        mapping.hostname
          ? [
              ...acc,
              {
                source: '/:path(.*)',
                destination: `/${mapping.name}`,
                has: [
                  {
                    type: 'host',
                    value: mapping.hostname,
                  },
                ],
              },
            ]
          : acc,
      []
    )
  },
  async redirects() {
    return HOST_MAPPINGS.reduce(
      (acc, mapping) =>
        mapping.hostname
          ? [
              ...acc,
              {
                source: '/',
                destination: `/${mapping.name}`,
                permanent: true,
                has: [
                  {
                    type: 'host',
                    value: mapping.hostname,
                  },
                ],
              },
            ]
          : acc,
      []
    )
  },
}

module.exports = nextConfig
