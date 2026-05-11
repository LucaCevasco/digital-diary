"use client"

import * as React from "react"
import { DropRow } from "@/components/drop-card"
import { drops, DropType } from "@/content/drops"
import { cn } from "@/lib/utils"

type Filter = DropType | "all"

const filters: { value: Filter; label: string; key: string }[] = [
  { value: "all", label: "all", key: "a" },
  { value: "thought", label: "thoughts", key: "t" },
  { value: "image", label: "images", key: "i" },
  { value: "code", label: "code", key: "c" },
  { value: "quote", label: "quotes", key: "q" },
]

export default function DropPage() {
  const [filter, setFilter] = React.useState<Filter>("all")

  const filtered = React.useMemo(() => {
    if (filter === "all") return drops
    return drops.filter(d => d.type === filter)
  }, [filter])

  return (
    <div className="w-full px-4 md:px-6 max-w-[1400px] mx-auto py-12 md:py-16">
      <header className="space-y-3 mb-10">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-accent">$</span> tail -f ~/tlzip/feed
        </p>
        <h1 className="font-mono text-4xl md:text-5xl font-medium lowercase tracking-tight">
          drop
        </h1>
        <p className="font-mono text-sm text-muted-foreground max-w-[60ch] leading-relaxed">
          quick thoughts, images, code snippets, and quotes that caught my attention.
        </p>
      </header>

      <div className="status-rule mb-4">
        <span>── filter</span>
        <span className="text-muted-foreground whitespace-nowrap">
          {filtered.length} / {drops.length} entries
        </span>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8 font-mono text-sm">
        {filters.map(f => {
          const active = filter === f.value
          return (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={cn(
                "transition-colors py-1",
                active ? "text-accent" : "text-muted-foreground hover:text-foreground"
              )}
              aria-pressed={active}
            >
              [{active ? "x" : " "}] {f.label}
            </button>
          )
        })}
      </div>

      <div className="border border-border bg-card/30 px-4">
        {filtered.length === 0 ? (
          <p className="py-8 text-center font-mono text-sm text-muted-foreground">
            no entries match
          </p>
        ) : (
          filtered.map(d => <DropRow key={d.id} drop={d} />)
        )}
      </div>
    </div>
  )
}
