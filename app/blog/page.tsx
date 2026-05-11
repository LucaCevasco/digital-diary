"use client"

import * as React from "react"
import { PostCard } from "@/components/post-card"
import { posts, PostCategory, PostLanguage } from "@/content/posts"
import { cn } from "@/lib/utils"

type CategoryFilter = PostCategory | "all"
type LanguageFilter = PostLanguage | "all"

export default function BlogPage() {
  const [category, setCategory] = React.useState<CategoryFilter>("all")
  const [language, setLanguage] = React.useState<LanguageFilter>("all")

  const categories = React.useMemo<CategoryFilter[]>(() => {
    const set = new Set<PostCategory>()
    posts.forEach(p => p.categories.forEach(c => set.add(c)))
    return ["all", ...Array.from(set)]
  }, [])

  const languages = React.useMemo<LanguageFilter[]>(() => {
    const set = new Set<PostLanguage>()
    posts.forEach(p => set.add(p.language))
    return ["all", ...Array.from(set)]
  }, [])

  const filtered = React.useMemo(() => {
    return posts.filter(p => {
      if (category !== "all" && !p.categories.includes(category)) return false
      if (language !== "all" && p.language !== language) return false
      return true
    })
  }, [category, language])

  const categoryCount = (c: CategoryFilter) =>
    c === "all" ? posts.length : posts.filter(p => p.categories.includes(c)).length
  const languageCount = (l: LanguageFilter) =>
    l === "all" ? posts.length : posts.filter(p => p.language === l).length

  return (
    <div className="w-full px-4 md:px-6 max-w-[1400px] mx-auto py-12 md:py-16">
      <header className="space-y-3 mb-10">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-accent">$</span> ls ~/tlzip/posts
        </p>
        <h1 className="font-mono text-4xl md:text-5xl font-medium lowercase tracking-tight">
          blog
        </h1>
        <p className="font-mono text-sm text-muted-foreground max-w-[60ch] leading-relaxed">
          long-form explorations of technology, philosophy, and human experience.
        </p>
      </header>

      <div className="status-rule mb-4">
        <span>── filter</span>
        <span className="text-muted-foreground whitespace-nowrap">
          {filtered.length} / {posts.length} posts
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mb-10 font-mono text-sm">
        <fieldset className="space-y-2">
          <legend className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">category</legend>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {categories.map(c => {
              const active = c === category
              return (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  aria-pressed={active}
                  className={cn(
                    "transition-colors py-0.5 inline-flex items-baseline gap-1.5",
                    active ? "text-accent" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  [{active ? "x" : " "}] {c.toString().toLowerCase()}
                  <span className="opacity-50 text-xs">({categoryCount(c)})</span>
                </button>
              )
            })}
          </div>
        </fieldset>

        <fieldset className="space-y-2">
          <legend className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">language</legend>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {languages.map(l => {
              const active = l === language
              return (
                <button
                  key={l}
                  onClick={() => setLanguage(l)}
                  aria-pressed={active}
                  className={cn(
                    "transition-colors py-0.5 inline-flex items-baseline gap-1.5",
                    active ? "text-accent" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  [{active ? "x" : " "}] {l}
                  <span className="opacity-50 text-xs">({languageCount(l)})</span>
                </button>
              )
            })}
          </div>
        </fieldset>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {filtered.length === 0 ? (
          <div className="col-span-full border border-border py-10 text-center font-mono text-sm text-muted-foreground">
            <p>no posts match.</p>
            <button
              onClick={() => { setCategory("all"); setLanguage("all") }}
              className="mt-3 text-accent hover:underline underline-offset-4"
            >
              $ reset filters ↵
            </button>
          </div>
        ) : (
          filtered.map(p => <PostCard key={p.id} post={p} />)
        )}
      </div>
    </div>
  )
}
