import { getPostBySlug } from "@/content/posts"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import * as React from "react"

interface PageProps {
  params: Promise<{ slug: string }>
}

function isoDate(d: string) {
  const parsed = new Date(d)
  if (Number.isNaN(parsed.getTime())) return d
  return parsed.toISOString().slice(0, 10)
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <div className="w-full px-4 md:px-6 max-w-[800px] mx-auto py-10 md:py-16 font-mono">
      {/* Breadcrumb */}
      <nav className="text-xs text-muted-foreground mb-8">
        <Link href="/blog" className="hover:text-accent transition-colors">
          ← ls ../
        </Link>
        <span className="mx-2 opacity-40">·</span>
        <span>~/loop/posts/{post.slug}.md</span>
      </nav>

      {/* Hero image */}
      {post.imageUrl && (
        <div className="relative aspect-[16/9] w-full overflow-hidden border border-border mb-8">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            priority
            sizes="(min-width: 800px) 800px, 100vw"
            className="object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
          />
        </div>
      )}

      {/* Meta */}
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs text-muted-foreground mb-4">
        {post.categories.map((c, i) => (
          <span key={i}>{c.toLowerCase()}</span>
        ))}
        <span className="opacity-40">·</span>
        <span className="text-accent">{post.language}</span>
        <span className="opacity-40">·</span>
        <time className="tabular-nums">{isoDate(post.date)}</time>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight mb-4">
        {post.title}
      </h1>
      <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-[60ch]">
        {post.excerpt}
      </p>

      {/* Body */}
      <article className="prose prose-neutral dark:prose-invert max-w-none font-sans prose-headings:font-mono prose-headings:tracking-tight prose-headings:font-medium prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-h2:border-l-2 prose-h2:border-accent prose-h2:pl-3 prose-h2:not-italic prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-a:underline-offset-4 prose-code:before:content-none prose-code:after:content-none prose-code:bg-card prose-code:px-1 prose-code:py-0.5 prose-code:text-sm prose-pre:bg-card prose-pre:border prose-pre:border-border prose-blockquote:border-l-2 prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:text-muted-foreground">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </article>

      <div className="mt-16 pt-6 border-t border-border text-xs text-muted-foreground">
        <Link href="/blog" className="hover:text-accent transition-colors">
          ← back to ls ../
        </Link>
      </div>
    </div>
  )
}
