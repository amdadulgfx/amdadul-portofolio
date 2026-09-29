import type { MetadataRoute } from "next";
import { profile } from "@/content/site";
import { caseStudies } from "@/content/work";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${profile.url}/`, lastModified: now, priority: 1 },
    ...caseStudies.map((c) => ({ url: `${profile.url}/work/${c.slug}/`, lastModified: now, priority: 0.8 })),
  ];
}
