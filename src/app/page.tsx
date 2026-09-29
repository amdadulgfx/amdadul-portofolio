import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import { ArrowRight, ArrowUpRight, Download, GitHub, LinkedIn, Mail, Medium } from "@/components/Icons";
import { education, experience, extras, products, profile, skills, stats } from "@/content/site";
import { caseStudies } from "@/content/work";
import { notes } from "@/content/notes";
import { getArticles } from "@/lib/medium";

const fmtDate = (iso: string) =>
  iso
    ? new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" })
    : "";

export default async function Home() {
  const articles = await getArticles(6);

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
        <div className="glow pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1fr_auto] lg:items-center lg:pb-28">
          <div>
            <p className="rise inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1.5 font-mono text-xs text-muted">
              <span className="pulse-dot relative inline-block size-2 rounded-full bg-ok" />
              {profile.availability}
            </p>
            <h1 className="rise rise-2 mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
              {profile.name}
              <span className="mt-3 block text-muted">{profile.role}</span>
            </h1>
            <p className="rise rise-3 mt-6 max-w-2xl text-lg text-pretty text-fg/85 sm:text-xl">
              {profile.headline}{" "}
              <span className="text-muted">{profile.intro}</span>
            </p>
            <div className="rise rise-4 mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#work"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-bg transition hover:brightness-110"
              >
                See case studies <ArrowRight />
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm transition hover:border-accent/60"
              >
                <Mail /> Get in touch
              </a>
              <div className="ml-1 flex items-center gap-3 text-muted">
                <a href={profile.socials.github} aria-label="GitHub" className="p-1 hover:text-fg"><GitHub /></a>
                <a href={profile.socials.linkedin} aria-label="LinkedIn" className="p-1 hover:text-fg"><LinkedIn /></a>
                <a href={profile.socials.medium} aria-label="Medium" className="p-1 hover:text-fg"><Medium /></a>
              </div>
            </div>
          </div>

          <div className="rise rise-3 relative mx-auto hidden size-72 shrink-0 lg:block">
            <div className="absolute inset-0 rounded-3xl border border-line bg-gradient-to-b from-raised to-surface" />
            <Image
              src="/arif.webp"
              alt={`Portrait of ${profile.name}`}
              width={288}
              height={288}
              priority
              className="relative size-72 rounded-3xl object-cover object-top"
            />
            <div className="absolute -bottom-4 -left-6 rounded-xl border border-line bg-surface/95 px-3 py-2 font-mono text-xs text-muted shadow-xl backdrop-blur">
              <span className="text-accent">$</span> node · postgres · aws
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative mx-auto max-w-6xl px-5 pb-8 sm:px-8">
          <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-line gap-px lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col bg-surface p-5 sm:p-6">
                <dt className="order-2 mt-1 text-sm text-muted">{s.label}</dt>
                <dd className="font-mono text-2xl font-semibold text-fg sm:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------------- Products ---------------- */}
      <Section
        id="products"
        eyebrow="Shipped products"
        title="Live products I've helped build"
        intro="Real software with real customers. Click through to see them in production."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition hover:border-accent/50"
            >
              {/* Browser-window frame */}
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="block border-b border-line bg-raised">
                <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
                  <span className="size-2.5 rounded-full bg-line" />
                  <span className="size-2.5 rounded-full bg-line" />
                  <span className="size-2.5 rounded-full bg-line" />
                  <span className="ml-3 flex-1 truncate rounded-md bg-bg px-3 py-1 font-mono text-[11px] text-muted">
                    https://{p.domain}
                  </span>
                </div>
                <div className="aspect-[16/9] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={`${p.name} homepage`}
                    width={800}
                    height={450}
                    className="size-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                  />
                </div>
              </a>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-1 text-sm text-muted">{p.tagline}</p>
                <p className="mt-4 font-mono text-xs text-muted">
                  {p.company} · {p.period}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-fg/85">{p.description}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  <span className="text-accent">My role — </span>
                  {p.role}
                </p>
                <p className="mt-4 font-mono text-[11px] text-muted">{p.stack.join(" · ")}</p>
                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-sm">
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-fg hover:text-accent">
                    Visit {p.domain} <ArrowUpRight />
                  </a>
                  {p.caseStudy && (
                    <Link href={`/work/${p.caseStudy}/`} className="inline-flex items-center gap-1.5 text-muted hover:text-fg">
                      Case study <ArrowRight />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ---------------- Work ---------------- */}
      <Section
        id="work"
        eyebrow="Selected work"
        title="Case studies from production systems"
        intro="The interesting part of backend work is usually invisible, so here it is drawn out: the problem, the architecture, the trade-offs and what I'd tell the next engineer."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {caseStudies.map((c, i) => (
            <Link
              key={c.slug}
              href={`/work/${c.slug}/`}
              className="group relative flex flex-col rounded-2xl border border-line bg-surface p-6 transition hover:border-accent/50 hover:bg-raised sm:p-7"
            >
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 font-mono text-xs text-muted">
                <span>
                  {String(i + 1).padStart(2, "0")} · {c.company}
                </span>
                <span>{c.period}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-balance">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.summary}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-mono text-2xl font-semibold text-accent">{c.metrics[0].value}</span>
                <span className="text-sm text-muted">{c.metrics[0].label}</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {c.tags.slice(0, 5).map((t) => (
                  <span key={t} className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-muted">
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-fg">
                Read case study
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ---------------- Experience ---------------- */}
      <div className="border-y border-line/60 bg-surface/40">
        <Section
          id="experience"
          eyebrow="Experience"
          title="Four years, four product teams"
          action={
            <a href={profile.resume} className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
              <Download className="size-4 text-accent" /> Download resume (PDF)
            </a>
          }
        >
          <ol className="relative space-y-12 border-l border-line pl-6 sm:pl-10">
            {experience.map((job) => (
              <li key={job.company} className="relative">
                <span
                  className={`absolute -left-[29px] top-1.5 size-2.5 rounded-full ring-4 ring-bg sm:-left-[45px] ${job.current ? "bg-accent" : "bg-line"}`}
                  aria-hidden
                />
                <div className="grid gap-4 lg:grid-cols-[220px_1fr]">
                  <div className="font-mono text-xs text-muted">
                    <p className={job.current ? "text-accent" : ""}>{job.period}</p>
                    <p className="mt-1">{job.location}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {job.role} <span className="text-muted">· {job.company}</span>
                    </h3>
                    <p className="mt-2 text-muted">{job.summary}</p>
                    <ul className="mt-4 space-y-2">
                      {job.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-sm leading-relaxed text-fg/85">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 font-mono text-xs text-muted">{job.stack.join(" · ")}</p>
                    {job.products && (
                      <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                        {job.products.map((pr) => (
                          <a key={pr.url} href={pr.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent hover:underline">
                            {pr.name} <ArrowUpRight className="size-3.5" />
                          </a>
                        ))}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Section>
      </div>

      {/* ---------------- Skills ---------------- */}
      <Section id="skills" eyebrow="Toolbox" title="What I work with">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g) => (
            <div key={g.group} className="bg-surface p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">{g.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-md border border-line bg-raised px-2.5 py-1 text-sm">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------------- Writing ---------------- */}
      <div className="border-y border-line/60 bg-surface/40">
        <Section
          id="writing"
          eyebrow="Writing"
          title="Notes from the backend, on Medium"
          intro="I write to understand things properly — databases, APIs, cloud architecture and, lately, retrieval for AI."
          action={
            <a href={profile.socials.medium} className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
              All articles <ArrowUpRight />
            </a>
          }
        >
          <ul className="divide-y divide-line border-y border-line">
            {articles.map((a) => (
              <li key={a.url}>
                <a
                  href={a.url}
                  className="group grid gap-2 py-5 sm:grid-cols-[110px_1fr_auto] sm:items-center sm:gap-6"
                >
                  <span className="font-mono text-xs text-muted">{fmtDate(a.date)}</span>
                  <span className="text-base font-medium text-pretty transition group-hover:text-accent sm:text-lg">
                    {a.title}
                  </span>
                  <span className="hidden items-center gap-3 sm:flex">
                    {a.tags.slice(0, 2).map((t) => (
                      <span key={t} className="font-mono text-[11px] capitalize text-muted">
                        {t}
                      </span>
                    ))}
                    <ArrowUpRight className="size-4 text-muted transition group-hover:text-accent" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* ---------------- Field notes ---------------- */}
      <Section
        id="notes"
        eyebrow="Field notes"
        title="Lessons I'd pass on"
        intro="Short stories from real incidents and design debates."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {notes.map((n) => (
            <article key={n.title} className="rounded-2xl border border-line bg-surface p-6 sm:p-7">
              <p className="font-mono text-xs text-accent">{n.tag}</p>
              <h3 className="mt-3 text-lg font-semibold">{n.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{n.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ---------------- About ---------------- */}
      <div className="border-y border-line/60 bg-surface/40">
        <Section id="about" eyebrow="About" title="The short version">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            <div className="space-y-5 text-lg leading-relaxed text-fg/85 text-pretty">
              <p>
                I&apos;m a full stack engineer from Dhaka who ended up specialising in the backend: data models, APIs,
                queues and the AWS plumbing that keeps them running. I&apos;ve spent the last four years on SaaS products
                for teams in Bangladesh, India and Australia — CRM, HR, recruitment and change management.
              </p>
              <p>
                As a project lead I sit between the backend and everyone else: breaking work down, reviewing code,
                making architecture calls and mentoring newer engineers. I like problems where the obvious solution
                breaks at scale, and I like leaving systems simpler than I found them.
              </p>
              <p className="text-muted">
                Right now I&apos;m going deeper on system design, data structures and retrieval for AI — and writing about
                it as I go.
              </p>
            </div>
            <aside className="space-y-6">
              <div className="flex items-center gap-4 lg:hidden">
                <Image src="/arif.webp" alt="" width={72} height={72} className="size-18 rounded-2xl border border-line bg-raised object-cover object-top" />
                <div>
                  <p className="font-medium">{profile.name}</p>
                  <p className="text-sm text-muted">{profile.location}</p>
                </div>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Education</h3>
                {education.map((e) => (
                  <div key={e.title} className="mt-3">
                    <p className="font-medium">{e.title}</p>
                    <p className="text-sm text-muted">
                      {e.place} · {e.period}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Beyond work</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {extras.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Languages</h3>
                <p className="mt-3 text-sm text-muted">Bangla (native) · English (professional)</p>
              </div>
            </aside>
          </div>
        </Section>
      </div>

      {/* ---------------- Contact ---------------- */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="glow pointer-events-none absolute inset-0" aria-hidden />
          <p className="relative font-mono text-xs uppercase tracking-[0.18em] text-accent">Contact</p>
          <h2 className="relative mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Building something that needs to scale?
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-muted text-pretty">
            I&apos;m open to senior full stack and backend roles, remote or hybrid. The fastest way to reach me is email.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-bg transition hover:brightness-110"
            >
              <Mail /> {profile.email}
            </a>
            <a
              href={profile.socials.linkedin}
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-raised px-5 py-3 text-sm transition hover:border-accent/60"
            >
              <LinkedIn className="size-4" /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
