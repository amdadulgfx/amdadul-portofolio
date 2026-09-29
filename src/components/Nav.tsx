import Link from "next/link";
import { profile } from "@/content/site";
import { Download } from "./Icons";

const links = [
  { href: "/#products", label: "Products" },
  { href: "/#work", label: "Case studies" },
  { href: "/#experience", label: "Experience" },
  { href: "/#writing", label: "Writing" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-bg/75 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Primary">
        <Link href="/" className="group flex items-center gap-2 font-mono text-sm">
          <span className="grid size-7 place-items-center rounded-md border border-line bg-surface text-accent transition group-hover:border-accent/60">
            A
          </span>
          <span className="text-fg">aharif</span>
          <span className="text-muted">.xyz</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="rounded-md px-3 py-2 text-sm text-muted transition hover:text-fg">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 text-sm text-fg transition hover:border-accent/60"
          >
            <Download className="size-4 text-accent" /> Resume
          </a>

          {/* Mobile menu: no JS needed */}
          <details className="group relative md:hidden">
            <summary className="grid size-10 cursor-pointer list-none place-items-center rounded-lg border border-line bg-surface [&::-webkit-details-marker]:hidden" aria-label="Menu">
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" className="group-open:hidden" />
                <path d="M6 6l12 12M18 6 6 18" className="hidden group-open:block" />
              </svg>
            </summary>
            <ul className="absolute right-0 mt-2 w-48 overflow-hidden rounded-xl border border-line bg-surface p-1 shadow-2xl">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="block rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-raised hover:text-fg">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </nav>
    </header>
  );
}
