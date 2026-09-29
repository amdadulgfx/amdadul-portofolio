# aharif.xyz — v2

Personal portfolio of Md Amdadul Haq Arif. Next.js 15 (App Router) + Tailwind CSS v4, exported as a fully static site.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Edit content

All copy lives in `src/content/` — no need to touch components:

| File | What's in it |
| --- | --- |
| `site.ts` | Name, headline, stats, experience, skills, education, links |
| `work.ts` | Case studies + their architecture diagrams (nodes/edges, pure SVG) |
| `notes.ts` | "Field notes" engineering stories |
| `src/lib/medium.ts` | Medium RSS fetch at build time + fallback list |

Replace `public/Amdadul-Haq-Arif-Resume.pdf` when the resume changes. `public/og.png` is the link-preview image.

## Deploy (Netlify)

`netlify.toml` is included: build command `npm run build`, publish directory `out`, Node 22.
Medium articles are pulled at build time, so trigger a rebuild (or a daily build hook) after publishing a new post.
