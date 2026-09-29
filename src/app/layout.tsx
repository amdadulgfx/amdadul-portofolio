import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { profile } from "@/content/site";

const title = `${profile.name} — ${profile.role}`;
const description =
  "Senior full stack engineer building scalable SaaS backends with Node.js, PostgreSQL, GraphQL and AWS. Case studies, experience and writing.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: { default: title, template: `%s · ${profile.name}` },
  description,
  keywords: [
    "Senior Full Stack Engineer",
    "Backend Engineer",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "GraphQL",
    "System Design",
    "Bangladesh",
    "Remote",
  ],
  authors: [{ name: profile.name, url: profile.url }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: profile.url,
    title,
    description,
    siteName: profile.name,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: profile.url,
  email: `mailto:${profile.email}`,
  image: `${profile.url}/arif.webp`,
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  alumniOf: "Daffodil International University",
  knowsAbout: ["Node.js", "PostgreSQL", "AWS", "GraphQL", "System Design", "React"],
  sameAs: Object.values(profile.socials),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-dvh font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
