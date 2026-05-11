"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./mode-toggle"

type Route = { href: string; label: string; key: string }

const routes: Route[] = [
  { href: "/", label: "home", key: "h" },
  { href: "/blog", label: "blog", key: "b" },
  { href: "/me", label: "me", key: "m" },
  { href: "/drop", label: "drop", key: "d" },
]

function breadcrumb(pathname: string) {
  if (pathname === "/") return "~/tlzip"
  return `~/tlzip${pathname}`
}

export default function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      // Don't hijack when typing in inputs / contenteditable
      const t = e.target as HTMLElement | null
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const match = routes.find(r => r.key === e.key.toLowerCase())
      if (match) {
        e.preventDefault()
        router.push(match.href)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [router])

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="max-w-[1400px] mx-auto flex h-10 items-center gap-4 px-4 md:px-6 font-mono text-xs">
        <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-accent">●</span>
          <span>{breadcrumb(pathname)}</span>
        </Link>
        <span className="hidden md:inline opacity-40">·</span>
        <span className="hidden md:inline text-muted-foreground">main</span>

        <nav className="ml-auto hidden md:flex items-center gap-1">
          {routes.map(r => {
            const active = r.href === "/" ? pathname === "/" : pathname.startsWith(r.href)
            return (
              <Link
                key={r.href}
                href={r.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "kbd px-2 py-1 transition-colors hover:text-foreground",
                  active && "text-foreground"
                )}
                data-active={active || undefined}
              >
                [<b>{r.key}</b>]{r.label.slice(1)}
              </Link>
            )
          })}
          <span className="opacity-40 px-1">·</span>
          <ModeToggle />
        </nav>

        <button
          onClick={() => setOpen(o => !o)}
          className="ml-auto md:hidden text-muted-foreground hover:text-accent"
          aria-label="toggle menu"
          aria-expanded={open}
        >
          [{open ? "x" : "≡"}]
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="max-w-[1400px] mx-auto px-4 py-3 flex flex-col gap-1 font-mono text-sm">
            {routes.map(r => {
              const active = r.href === "/" ? pathname === "/" : pathname.startsWith(r.href)
              return (
                <Link
                  key={r.href}
                  href={r.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "kbd py-2 transition-colors",
                    active ? "text-foreground" : "hover:text-foreground"
                  )}
                  data-active={active || undefined}
                >
                  [<b>{r.key}</b>]{r.label.slice(1)}
                </Link>
              )
            })}
            <div className="pt-2 border-t border-border mt-1">
              <ModeToggle />
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
