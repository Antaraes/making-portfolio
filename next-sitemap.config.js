/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://minbhonethant.com',
  generateRobotsTxt: true, // (optional) Generate robots.txt
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/api/*', '/admin/*', '/server-sitemap.xml'], // Exclude these paths
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://minbhonethant.com/server-sitemap.xml', // If you have dynamic routes
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 0,
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for specific pages
    const customConfig = {
      '/': { priority: 1.0, changefreq: 'daily' },
      '/about': { priority: 0.9, changefreq: 'weekly' },
      '/services': { priority: 0.9, changefreq: 'weekly' },
      '/work': { priority: 0.9, changefreq: 'daily' },
      '/work/chat-application': { priority: 0.8, changefreq: 'weekly' },
      '/work/inventory-application': { priority: 0.8, changefreq: 'weekly' },
      '/contact': { priority: 0.8, changefreq: 'monthly' },
    };

    const customSettings = customConfig[path] || {};

    return {
      loc: path,
      changefreq: customSettings.changefreq || config.changefreq,
      priority: customSettings.priority || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => {
    const result = [];

    // Add any additional dynamic routes here if needed
    // For example, if you have blog posts or dynamic project pages
    // result.push(await config.transform(config, '/additional-page'));

    return result;
  },
};
