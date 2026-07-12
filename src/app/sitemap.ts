import type { MetadataRoute } from "next";

const siteUrl = "https://mygolkahotel.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/kasyno`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/polityka-prywatnosci`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
