// Pulls the latest Medium posts at build time (static export), with a
// hand-maintained fallback so the build never fails if Medium is unreachable.

export type Article = {
  title: string;
  url: string;
  date: string; // ISO
  tags: string[];
};

const FEED = "https://medium.com/feed/@amdadulgfx";

export const fallbackArticles: Article[] = [
  {
    title: "RAG From First Principles: What the Math Actually Shows",
    url: "https://medium.com/@amdadulgfx/rag-from-first-principles-what-the-math-actually-shows-a0d1a79000d8",
    date: "2026-09-13",
    tags: ["AI", "RAG"],
  },
  {
    title: "Database Partitioning in PostgreSQL: Performance Gains, Trade-offs, and Real Benchmarks",
    url: "https://medium.com/@amdadulgfx/database-partitioning-in-postgresql-performance-gains-trade-offs-and-real-benchmarks-a40834c830cc",
    date: "2026-05-23",
    tags: ["PostgreSQL", "Performance"],
  },
  {
    title: "AWS Architecture: Two Ways to Build a Scalable Reminder System",
    url: "https://medium.com/@amdadulgfx/aws-architecture-two-ways-to-build-a-scalable-reminder-system-ca9ff8945297",
    date: "2026-05-12",
    tags: ["AWS", "System design"],
  },
  {
    title: "Beyond REST: Why gRPC Is the Backbone of High-Performance Backend Systems",
    url: "https://medium.com/@amdadulgfx/beyond-rest-why-grpc-is-the-backbone-of-high-performance-backend-systems-946b7f62950d",
    date: "2026-04-27",
    tags: ["gRPC", "Backend"],
  },
  {
    title: "Implementing Infinite Scroll: A Deep Dive into GraphQL Cursors",
    url: "https://medium.com/@amdadulgfx/implementing-infinite-scroll-a-deep-dive-into-graphql-cursors-7ba109f5d956",
    date: "2026-03-14",
    tags: ["GraphQL"],
  },
  {
    title: "GraphQL: 4 Best Practices Scaling with Precision",
    url: "https://medium.com/@amdadulgfx/graphql-best-practices-74fac313b474",
    date: "2026-03-09",
    tags: ["GraphQL"],
  },
  {
    title: "The Developer's Safety Net: A Pragmatic Guide to Unit Testing",
    url: "https://medium.com/@amdadulgfx/the-developers-safety-net-a-pragmatic-guide-to-unit-testing-7ff20dad30f2",
    date: "2026-02-28",
    tags: ["Testing"],
  },
];

const decode = (s: string) =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .trim();

const pick = (xml: string, tag: string) => {
  const m = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return m ? decode(m[1]) : "";
};

export async function getArticles(limit = 6): Promise<Article[]> {
  try {
    const res = await fetch(FEED, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error(`Medium feed ${res.status}`);
    const xml = await res.text();
    const items = xml.split("<item>").slice(1).map((chunk) => chunk.split("</item>")[0]);
    const articles = items
      .map((item) => {
        const tags = [...item.matchAll(/<category>([\s\S]*?)<\/category>/g)]
          .map((m) => decode(m[1]))
          .slice(0, 2);
        const link = pick(item, "link").split("?")[0];
        const date = new Date(pick(item, "pubDate"));
        return {
          title: pick(item, "title"),
          url: link,
          date: isNaN(date.getTime()) ? "" : date.toISOString().slice(0, 10),
          tags: tags.map((t) => t.replace(/-/g, " ")),
        };
      })
      .filter((a) => a.title && a.url);
    if (!articles.length) throw new Error("empty feed");
    return articles.slice(0, limit);
  } catch {
    return fallbackArticles.slice(0, limit);
  }
}
