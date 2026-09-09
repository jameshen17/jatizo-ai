import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://jatizo.ai", lastModified: new Date("2026-09-10"), changeFrequency: "monthly", priority: 1 },
    { url: "https://jatizo.ai/privacy", lastModified: new Date("2026-09-10"), changeFrequency: "yearly", priority: 0.3 }
  ];
}
