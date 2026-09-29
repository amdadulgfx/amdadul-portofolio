import { profile } from "@/content/site";
import { GitHub, LinkedIn, Medium } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:px-8">
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} {profile.name} · Built with Next.js & Tailwind
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.socials.github} aria-label="GitHub" className="hover:text-fg"><GitHub /></a>
          <a href={profile.socials.linkedin} aria-label="LinkedIn" className="hover:text-fg"><LinkedIn /></a>
          <a href={profile.socials.medium} aria-label="Medium" className="hover:text-fg"><Medium /></a>
        </div>
      </div>
    </footer>
  );
}
