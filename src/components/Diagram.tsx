// Small, dependency-free architecture diagram renderer (server component, pure SVG).

export type NodeKind = "client" | "service" | "queue" | "data" | "external" | "removed";

export type DiagramNode = {
  id: string;
  x: number;
  y: number;
  w?: number;
  h?: number;
  label: string;
  sub?: string;
  kind: NodeKind;
};

export type DiagramEdge = {
  from: string;
  to: string;
  label?: string;
  dashed?: boolean;
  accent?: boolean;
  /** Shift the line sideways, to draw two edges between the same pair of nodes. */
  offset?: number;
};

export type DiagramSpec = {
  width: number;
  height: number;
  nodes: DiagramNode[];
  edges: DiagramEdge[];
};

const W = 180;
const H = 64;

const kindLabel: Record<NodeKind, string> = {
  client: "client",
  service: "service",
  queue: "queue / events",
  data: "data",
  external: "third party",
  removed: "removed",
};

function anchor(a: Required<DiagramNode>, b: Required<DiagramNode>, offset = 0) {
  const ax = a.x + a.w / 2, ay = a.y + a.h / 2;
  const bx = b.x + b.w / 2, by = b.y + b.h / 2;
  const dx = bx - ax, dy = by - ay;
  if (Math.abs(dx) * a.h > Math.abs(dy) * a.w) {
    // horizontal
    const s = Math.sign(dx);
    return {
      x1: ax + (s * a.w) / 2, y1: ay + offset,
      x2: bx - (s * b.w) / 2 - s * 4, y2: by + offset,
    };
  }
  const s = Math.sign(dy);
  return {
    x1: ax + offset, y1: ay + (s * a.h) / 2,
    x2: bx + offset, y2: by - (s * b.h) / 2 - s * 4,
  };
}

export default function Diagram({ spec, caption }: { spec: DiagramSpec; caption?: string }) {
  const nodes = new Map(
    spec.nodes.map((n) => [n.id, { w: W, h: H, sub: "", ...n } as Required<DiagramNode>]),
  );
  const kinds = Array.from(new Set(spec.nodes.map((n) => n.kind)));
  // Fit the viewBox to the nodes so there is no dead space around the drawing.
  const all = [...nodes.values()];
  const pad = 16;
  const minX = Math.min(...all.map((n) => n.x)) - pad;
  const minY = Math.min(...all.map((n) => n.y)) - pad;
  const maxX = Math.max(...all.map((n) => n.x + n.w)) + pad;
  const maxY = Math.max(...all.map((n) => n.y + n.h)) + pad;

  return (
    <figure className="rounded-2xl border border-line bg-surface/60 p-4 sm:p-6">
      <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <svg
          viewBox={`${minX} ${minY} ${maxX - minX} ${maxY - minY}`}
          className="diagram min-w-[640px] w-full h-auto"
          role="img"
          aria-label={caption ?? "Architecture diagram"}
        >
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" className="fill-[var(--color-muted)]" />
            </marker>
            <marker id="arrow-accent" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" className="fill-[var(--color-accent)]" />
            </marker>
          </defs>

          {spec.edges.map((e, i) => {
            const a = nodes.get(e.from)!;
            const b = nodes.get(e.to)!;
            const p = anchor(a, b, e.offset);
            const mx = (p.x1 + p.x2) / 2;
            const my = (p.y1 + p.y2) / 2;
            const vertical = Math.abs(p.x1 - p.x2) < 1;
            const lx = vertical ? mx + (e.offset && e.offset > 0 ? 10 : e.offset ? -10 : 10) : mx;
            const ly = vertical ? my : my + (e.offset && e.offset > 0 ? 12 : -8);
            const anchorText = vertical ? (e.offset && e.offset < 0 ? "end" : "start") : "middle";
            return (
              <g key={i}>
                <line
                  {...p}
                  className={e.accent ? "edge edge-accent" : "edge"}
                  strokeDasharray={e.dashed ? "5 5" : undefined}
                  markerEnd={`url(#${e.accent ? "arrow-accent" : "arrow"})`}
                />
                {e.label && (
                  <text x={lx} y={ly} textAnchor={anchorText} dominantBaseline="middle" className="edge-label">
                    {e.label}
                  </text>
                )}
              </g>
            );
          })}

          {all.map((n) => (
            <g key={n.id} className={`node node-${n.kind}`}>
              <rect x={n.x} y={n.y} width={n.w} height={n.h} rx={10} />
              <text x={n.x + 14} y={n.y + 26} className="node-label">{n.label}</text>
              {n.sub && <text x={n.x + 14} y={n.y + 46} className="node-sub">{n.sub}</text>}
            </g>
          ))}
        </svg>
      </div>
      <p className="mt-3 font-mono text-[11px] text-muted sm:hidden">← swipe to see the full diagram →</p>
      <figcaption className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted">
        {caption && <span className="mr-auto text-fg/80">{caption}</span>}
        {kinds.map((k) => (
          <span key={k} className="inline-flex items-center gap-1.5">
            <span className={`legend-dot legend-${k}`} /> {kindLabel[k]}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
