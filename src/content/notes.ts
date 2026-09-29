// "How I work": one principle + one line of proof each. Keep them short.
export const notes = [
  {
    tag: "Debugging",
    title: "Check the infra, not just the logs.",
    body: "A Lambda crashed silently at 128 MB with nothing in CloudWatch. Doubling memory fixed it, and the team now checks infrastructure metrics first.",
  },
  {
    tag: "Security",
    title: "Make the secure path the default.",
    body: "Auth lives in middleware, secrets in Secrets Manager, databases in private subnets, and dependency audits run in CI.",
  },
  {
    tag: "Planning",
    title: "Prototype before promising.",
    body: "Anything I haven't tested gets a quick proof-of-concept before it gets a deadline.",
  },
  {
    tag: "Performance",
    title: "Let the database do the work.",
    body: "Replaced 4–5 round-trips per job with one query using CTEs: 35% faster, with no more CPU spikes.",
  },
];
