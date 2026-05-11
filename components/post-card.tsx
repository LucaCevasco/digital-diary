import Link from "next/link"
import Image from "next/image"
import { Post } from "@/content/posts"

interface PostCardProps {
  post: Post
  isGlitchy?: boolean
}

function isoDate(d: string) {
  const parsed = new Date(d)
  if (Number.isNaN(parsed.getTime())) return d
  return parsed.toISOString().slice(0, 10)
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block border border-border bg-card hover:border-accent transition-colors focus-visible:outline-none focus-visible:border-accent focus-visible:ring-1 focus-visible:ring-accent"
    >
      {post.imageUrl && (
        <div className="relative aspect-[3/2] overflow-hidden border-b border-border bg-background">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
      )}
      <div className="p-4 space-y-3 font-mono">
        <header className="flex items-baseline justify-between gap-2 text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {post.categories.map((c, i) => (
              <span key={i}>{c.toLowerCase()}</span>
            ))}
            <span className="opacity-40">·</span>
            <span className="text-accent">{post.language}</span>
          </div>
          <time className="tabular-nums shrink-0">{isoDate(post.date)}</time>
        </header>

        <h3 className="text-base md:text-lg font-medium leading-snug text-foreground group-hover:text-accent transition-colors">
          {post.title}
        </h3>

        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        <div className="pt-2 text-xs flex items-center gap-1">
          <span className="text-muted-foreground">$</span>
          <span className="text-accent group-hover:underline underline-offset-4">
            cat {post.slug}.md
          </span>
          <span className="text-muted-foreground opacity-60">↵</span>
        </div>
      </div>
    </Link>
  )
}
