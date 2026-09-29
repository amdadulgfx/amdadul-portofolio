import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-5 py-32 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 text-3xl font-semibold">This route returns nothing.</h1>
      <p className="mt-3 text-muted">The page you&apos;re after doesn&apos;t exist, or it moved in the redesign.</p>
      <Link href="/" className="mt-8 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-bg">
        Back home
      </Link>
    </section>
  );
}
