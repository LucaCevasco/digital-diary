import Link from "next/link"
import FeaturedPost from "@/components/featured-post"
import LatestDrops from "@/components/latest-drop"
import { getFeaturedPosts } from "@/content/posts"

export default function Home() {
  const featuredPosts = getFeaturedPosts()

  return (
    <div className="w-full px-4 md:px-6 max-w-[1400px] mx-auto">
      {/* Hero */}
      <section className="py-16 md:py-24 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="space-y-6">
          <p className="font-mono text-xs text-muted-foreground tracking-wide">
            <span className="text-accent">$</span> whoami
          </p>
          <h1 className="font-mono text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight lowercase">
            <span className="caret">tlzip</span>
          </h1>
          <p className="font-mono text-base md:text-lg text-muted-foreground max-w-[60ch] leading-relaxed">
            a feed of half-formed ideas - technology and human experience. notes by{" "}
            <Link href="/me" className="text-foreground hover:text-accent transition-colors">
              luca cevasco
            </Link>
            .
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm pt-2">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-accent hover:underline underline-offset-4"
            >
              <span className="text-muted-foreground group-hover:text-accent">$</span>
              cat blog.md
              <span className="opacity-70">↵</span>
            </Link>
            <Link
              href="/me"
              className="group inline-flex items-center gap-2 text-accent hover:underline underline-offset-4"
            >
              <span className="text-muted-foreground group-hover:text-accent">$</span>
              man luca
              <span className="opacity-70">↵</span>
            </Link>
            <Link
              href="/drop"
              className="group inline-flex items-center gap-2 text-accent hover:underline underline-offset-4"
            >
              <span className="text-muted-foreground group-hover:text-accent">$</span>
              tail -f feed
              <span className="opacity-70">↵</span>
            </Link>
          </div>
        </div>

        {/* Compact metadata block — like a tmux right-side status */}
        <aside className="hidden lg:block font-mono text-xs text-muted-foreground border border-border p-4 min-w-[240px] space-y-1">
          <div className="flex justify-between gap-4">
            <span className="opacity-60">host</span>
            <span>tlzip.local</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="opacity-60">posts</span>
            <span className="text-foreground">{featuredPosts.length}+</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="opacity-60">lang</span>
            <span>en · es</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="opacity-60">uptime</span>
            <span>∞</span>
          </div>
          <div className="border-t border-border pt-2 mt-2 opacity-60">
            press [h] [b] [m] [d] to navigate
          </div>
        </aside>
      </section>

      {/* Featured */}
      <section className="space-y-6 pt-4">
        <div className="status-rule">
          <span>── featured</span>
          <Link
            href="/blog"
            className="hover:text-accent transition-colors whitespace-nowrap"
          >
            view all →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map(post => (
            <FeaturedPost key={post.id} post={post} isGlitchy={false} />
          ))}
        </div>
      </section>

      {/* Feed */}
      <section className="space-y-6 pt-16">
        <div className="status-rule">
          <span>── feed</span>
          <Link
            href="/drop"
            className="hover:text-accent transition-colors whitespace-nowrap"
          >
            tail -f →
          </Link>
        </div>
        <LatestDrops />
      </section>
    </div>
  )
}
