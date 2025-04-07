import { getPostBySlug } from "@/content/posts"
import { Badge } from "@/components/ui/badge"
import { notFound } from "next/navigation"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import * as React from 'react'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const unwrappedParams = await Promise.resolve(params);
  const { slug } = unwrappedParams;
  
  const post = getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }
  
  // Helper to get language name and flag
  const getLanguageInfo = (code: string) => {
    switch (code) {
      case 'en':
        return { name: 'English', flag: '🇺🇸' };
      case 'es':
        return { name: 'Spanish', flag: '🇪🇸' };
      default:
        return { name: code.toUpperCase(), flag: '' };
    }
  };

  const language = getLanguageInfo(post.language);

  return (
    <div className="w-full px-4 md:px-6 py-10 md:py-16 space-y-8 noise">
      <div className="max-w-[900px] mx-auto">
        {/* Hero Section */}
        <div className="space-y-6 mb-12">
          {post.imageUrl && (
            <div className="w-full aspect-video overflow-hidden rounded-lg glitch-image scanline">
                <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
            </div>
          )}
          
          <div className="flex items-center gap-4 font-mono text-sm text-muted-foreground">
            {post.categories.map((category, index) => (
              <span key={index} className="bg-muted px-2 py-0.5 rounded">{category}</span>
            ))}
            <Badge variant="outline">
              {language.flag} {language.name}
            </Badge>
            <span>
              {new Date(post.date).toLocaleDateString("en-US", { 
                year: "numeric", 
                month: "long", 
                day: "numeric" 
              })}
            </span>
          </div>
          
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter glitch-item" data-text={post.title}>
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground distort max-w-[700px]">
            {post.excerpt}
          </p>
        </div>
        
        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: (props) => (
                <h1 className="text-3xl font-playfair font-bold mb-4 mt-8" {...props} />
              ),
              h2: (props) => (
                <h2 className="text-2xl font-playfair font-bold mb-3 mt-6" {...props} />
              ),
              h3: (props) => (
                <h3 className="text-xl font-playfair font-bold mb-2 mt-4" {...props} />
              ),
              p: (props) => (
                <p className="mb-4 font-sans leading-relaxed" {...props} />
              ),
              a: (props) => (
                <a className="text-blue-400 hover:underline" {...props} />
              ),
              ul: (props) => (
                <ul className="list-disc pl-6 mb-4" {...props} />
              ),
              ol: (props) => (
                <ol className="list-decimal pl-6 mb-4" {...props} />
              ),
              li: (props) => (
                <li className="mb-1" {...props} />
              ),
              blockquote: (props) => (
                <blockquote className="border-l-4 pl-4 italic my-4" {...props} />
              ),
              code: ({ inline, ...props }: { inline?: boolean } & React.HTMLAttributes<HTMLElement>) => (
                inline 
                  ? <code className="bg-gray-800 px-1 py-0.5 rounded text-sm" {...props} />
                  : <code className="block bg-gray-800 p-4 rounded text-sm overflow-x-auto my-4" {...props} />
              ),
              em: (props) => (
                <em className="italic" {...props} />
              ),
              strong: (props) => (
                <strong className="font-bold" {...props} />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  )
} 