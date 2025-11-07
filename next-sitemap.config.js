// next-sitemap.config.js
module.exports = {
  siteUrl: "https://www.marveltiles.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/404"], // optional
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
