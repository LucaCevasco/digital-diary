import Image from "next/image"
import { Drop } from "@/content/drops"

function isoDate(d: string) {
  const parsed = new Date(d)
  if (Number.isNaN(parsed.getTime())) return d
  return parsed.toISOString().slice(0, 10)
}

const typeColor: Record<Drop["type"], string> = {
  thought: "text-accent",
  image: "text-[hsl(var(--destructive))]",
  code: "text-foreground",
  quote: "text-muted-foreground",
}

const typeGlyph: Record<Drop["type"], string> = {
  thought: "✎",
  image: "▣",
  code: "▶",
  quote: "❝",
}

export const DropRow = ({ drop }: { drop: Drop }) => {
  return (
    <article className="group border-t border-border first:border-t-0 py-3 font-mono text-sm hover:bg-card transition-colors">
      <header className="flex items-baseline gap-x-3 gap-y-1 flex-wrap">
        <time className="text-muted-foreground tabular-nums text-xs shrink-0">
          [{isoDate(drop.date)}]
        </time>
        <span className={`${typeColor[drop.type]} text-xs w-16 shrink-0`}>
          <span className="opacity-70 mr-1">{typeGlyph[drop.type]}</span>
          {drop.type}
        </span>
        <span className="text-foreground/90 leading-relaxed">
          {drop.type === "thought" && drop.content}
          {drop.type === "image" && (drop.caption || drop.imageAlt || drop.imageUrl?.split("/").pop())}
          {drop.type === "quote" && <em className="not-italic">&ldquo;{drop.content}&rdquo;</em>}
          {drop.type === "code" && <span className="text-accent">snippet</span>}
        </span>
      </header>

      {drop.type === "image" && drop.imageUrl && (
        <div className="mt-3 ml-[7.5rem] max-w-md border border-border overflow-hidden">
          <Image
            src={drop.imageUrl}
            alt={drop.imageAlt || ""}
            width={500}
            height={500}
            className="w-full h-auto grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
      )}

      {drop.type === "code" && (
        <pre className="mt-3 ml-[7.5rem] max-w-2xl border border-border bg-background p-3 text-xs overflow-x-auto">
          <code>{drop.content}</code>
        </pre>
      )}

      {drop.type === "quote" && drop.author && (
        <div className="mt-1 ml-[7.5rem] text-xs text-muted-foreground">
          — {drop.author}
        </div>
      )}
    </article>
  )
}

// Backwards-compatible export so existing imports keep working
export const DropCard = DropRow
