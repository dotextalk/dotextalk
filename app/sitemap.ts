import type { MetadataRoute } from "next";

const siteUrl = "https://dotextalk.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/architect",
    "/expertise",
    "/services",
    "/services/web-architecture",
    "/services/seo-ai-visibility",
    "/services/digital-solutions",
    "/services/growth-strategy",
    "/works",
    "/referral",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services/") ? 0.9 : 0.7,
  }));
}
