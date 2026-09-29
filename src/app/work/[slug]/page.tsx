import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Diagram from "@/components/Diagram";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@/components/Icons";
import { caseStudies, getCaseStudy } from "@/content/work";
import { features } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.summary,
    alternates: { canonical: `/work/${c.slug}/` },
    robots: features.caseStudies ? undefined : { index: false, follow: false },
    openGraph: { title: c.title, description: c.summary, images: ["/og.png"] },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();

  const idx = caseStudies.findIndex((x) => x.slug === c.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <article className="mx-auto max-w-4xl px-5 pb-24 pt-10 sm:px-8 sm:pt-16">
      <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
        <ArrowLeft /> All work
      </Link>

      <header className="mt-10">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          Case study · {c.company}
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{c.title}</h1>
        <p className="mt-5 text-lg text-muted text-pretty">{c.summary}</p>
        {c.product && (
          <a
            href={c.product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-3.5 py-2 text-sm transition hover:border-accent/60"
          >
            <span className="size-2 rounded-full bg-ok" /> Live product: {c.product.name} <ArrowUpRight />
          </a>
        )}

        <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-line py-6 font-mono text-xs sm:grid-cols-3">
          <div>
            <dt className="text-muted">Role</dt>
            <dd className="mt-1 text-sm text-fg">{c.role}</dd>
          </div>
          <div>
            <dt className="text-muted">When</dt>
            <dd className="mt-1 text-sm text-fg">{c.period}</dd>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <dt className="text-muted">Stack</dt>
            <dd className="mt-1 text-sm text-fg">{c.tags.join(", ")}</dd>
          </div>
        </dl>
      </header>

      <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
        {c.metrics.map((m) => (
          <div key={m.label} className="bg-surface p-5">
            <p className="font-mono text-2xl font-semibold text-accent">{m.value}</p>
            <p className="mt-1 text-sm text-muted">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="prose-section mt-14 space-y-12">
        <section>
          <h2 className="text-xl font-semibold">Context</h2>
          <p className="mt-3 leading-relaxed text-fg/85">{c.context}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">The problem</h2>
          <p className="mt-3 leading-relaxed text-fg/85">{c.problem}</p>
        </section>

        <section>
          <h2 className="mb-5 text-xl font-semibold">Architecture</h2>
          <Diagram spec={c.diagram} caption={c.diagramCaption} />
        </section>

        <section>
          <h2 className="text-xl font-semibold">What I did</h2>
          <ol className="mt-6 space-y-8">
            {c.approach.map((step, i) => (
              <li key={step.title} className="grid gap-2 sm:grid-cols-[48px_1fr]">
                <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-fg/80">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Outcome</h2>
          <ul className="mt-4 space-y-2">
            {c.outcome.map((o) => (
              <li key={o} className="flex gap-3 leading-relaxed text-fg/85">
                <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" aria-hidden />
                {o}
              </li>
            ))}
          </ul>
        </section>

        <aside className="rounded-2xl border border-accent/30 bg-accent-soft p-6">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">What I learned</p>
          <p className="mt-3 leading-relaxed text-fg/90">{c.lesson}</p>
        </aside>
      </div>

      <nav className="mt-16 border-t border-line pt-8" aria-label="Next case study">
        <Link href={`/work/${next.slug}/`} className="group block">
          <p className="font-mono text-xs text-muted">Next case study</p>
          <p className="mt-2 flex items-center gap-2 text-lg font-semibold transition group-hover:text-accent">
            {next.title} <ArrowRight className="size-4 shrink-0 transition group-hover:translate-x-1" />
          </p>
        </Link>
      </nav>
    </article>
  );
}
