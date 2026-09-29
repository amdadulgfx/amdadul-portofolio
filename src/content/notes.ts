// Short engineering stories — the kind of thing interviewers ask about.
export const notes = [
  {
    tag: "Debugging",
    title: "The crash that left no logs",
    body: "A calendar Lambda passed QA, then died weeks later mid-SDK call with blank CloudWatch logs. It was on the default 128 MB; realistic payloads under load hit the limit and AWS SIGKILLed the process before Node could log. Doubling memory (and CPU with it) fixed it. Lesson shared with the team: check infra metrics, not just app logs.",
  },
  {
    tag: "Architecture",
    title: "Turning a disagreement into a better design",
    body: "I proposed merging per-service Lambda authorizers into one to cut cost. My lead worried about blast radius. Instead of arguing, I designed a double gate: a central authorizer for the app token plus a lightweight service-specific token — the efficiency I wanted with the isolation he needed.",
  },
  {
    tag: "Estimation",
    title: "Spike before you promise",
    body: "An email-analytics estimate broke when attachment-view tracking turned out to need a hosted-file model. I flagged it early, split it into its own task and shipped the rest on time. Now anything I haven't tested gets a short proof-of-concept before it gets a date.",
  },
  {
    tag: "Security",
    title: "Make the secure path the default path",
    body: "Authorization lives in middleware, not in every resolver; inputs are schema-validated; databases sit in private subnets; secrets live in Secrets Manager, never in .env files; dependency audits run in CI. Developers shouldn't have to remember to be secure.",
  },
];
