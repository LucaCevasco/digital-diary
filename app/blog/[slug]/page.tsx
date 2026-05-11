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

  // Strip a leading H1 from the markdown body — the page already renders the title.
  const body = post.content.replace(/^\s*#\s+[^\n]+\n+/, "")

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
      <article className="font-sans text-[15px] leading-[1.75] text-foreground/90">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1 className="font-mono text-2xl md:text-3xl font-medium tracking-tight mt-12 mb-4 text-foreground">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="font-mono text-xl md:text-2xl font-medium tracking-tight mt-10 mb-3 pl-3 border-l-2 border-accent text-foreground">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="font-mono text-lg font-medium tracking-tight mt-8 mb-2 text-foreground">
                <span className="text-accent">## </span>
                {children}
              </h3>
            ),
            h4: ({ children }) => (
              <h4 className="font-mono text-base font-medium tracking-tight mt-6 mb-2 text-foreground">
                <span className="text-accent">### </span>
                {children}
              </h4>
            ),
            p: ({ children }) => (
              <p className="mb-5">{children}</p>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-accent underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition-colors"
              >
                {children}
              </a>
            ),
            ul: ({ children }) => (
              <ul className="list-none pl-0 mb-5 space-y-1.5">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal pl-6 mb-5 space-y-1.5 marker:text-accent marker:font-mono">{children}</ol>
            ),
            li: ({ children }) => (
              <li className="pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-accent font-sans">
                {children}
              </li>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-2 border-accent pl-4 my-6 text-muted-foreground italic">
                {children}
              </blockquote>
            ),
            code: ({ className, children, ...props }: React.HTMLAttributes<HTMLElement> & { className?: string }) => {
              const isBlock = className?.startsWith("language-")
              if (isBlock) {
                return (
                  <code className="font-mono text-[13px]" {...props}>
                    {children}
                  </code>
                )
              }
              return (
                <code className="font-mono text-[0.9em] bg-card border border-border px-1 py-0.5 text-accent" {...props}>
                  {children}
                </code>
              )
            },
            pre: ({ children }) => (
              <pre className="font-mono text-[13px] bg-card border border-border p-4 my-5 overflow-x-auto leading-relaxed">
                {children}
              </pre>
            ),
            hr: () => (
              <hr className="my-8 border-0 border-t border-border" />
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-foreground">{children}</strong>
            ),
            em: ({ children }) => (
              <em className="italic">{children}</em>
            ),
            img: (props) => (
              // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
              <img {...props} className="my-6 border border-border max-w-full h-auto" />
            ),
          }}
        >
          {body}
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
