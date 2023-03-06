/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

//module.exports = nextConfig
const US_SITE= process.env.US_SITE
const IN_SITE= process.env.IN_SITE
module.exports = {
  i18n: {
    locales: ['en-US', 'hi'],
    defaultLocale: 'en-US',
		localeDetection: false,
		domains: [
			{
				domain: `${US_SITE}`,
				defaultLocale: 'en-US',
			},
				{
				domain: `${IN_SITE}`,
				defaultLocale: 'hi',
			},
		],
  }
}
