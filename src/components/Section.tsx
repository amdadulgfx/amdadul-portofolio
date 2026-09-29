export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  action,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
          {intro && <p className="mt-4 text-pretty text-muted">{intro}</p>}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}
