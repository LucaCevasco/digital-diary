import Link from "next/link"
import { Button } from "@/components/ui/button"
import FeaturedPost from "@/components/featured-post"
import LatestDrops from "@/components/latest-drop"
import Image from "next/image"
import { getFeaturedPosts } from "@/content/posts"

export default function Home() {
  const featuredPosts = getFeaturedPosts();
  
  return (
    <div className="w-full px-4 md:px-6 space-y-16 py-10 md:py-16 noise">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16 max-w-[1400px] mx-auto">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-2 flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="font-playfair text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl glitch-container">
                <span className="block glitch-item text-3xl" data-text="Luca Cevasco">
                  Luca Cevasco
                </span>
                <span className="block text-glitch">The Coffee Loop</span>
              </h1>
              <p className="font-mono text-xl text-muted-foreground max-w-[700px] distort">
                At the intersection of code and consciousness
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/blog">
                <Button size="lg" className="font-mono glitch-border">
                  Read Blog
                </Button>
              </Link>
              <Link href="/me">
                <Button size="lg" variant="outline" className="font-mono glitch-border">
                  About Me
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="grid-pattern h-full w-full bg-muted">
              <Image src="/banner.png" alt="banner" width={600} height={400} />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6 max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="font-playfair text-3xl font-bold tracking-tighter md:text-4xl distort">Featured Posts</h2>
          <Link href="/blog">
            <Button variant="ghost" className="font-mono">
              View All
            </Button>
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map(post => (
            <FeaturedPost 
              key={post.id}
              post={post}
              isGlitchy={true}
            />
          ))}
        </div>
      </section>

      <section className="space-y-6 max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="font-playfair text-3xl font-bold tracking-tighter md:text-4xl distort">Latest Drops</h2>
          <Link href="/drop">
            <Button variant="ghost" className="font-mono">
              View All
            </Button>
          </Link>
        </div>
        <div className="w-full">
          <LatestDrops />
        </div>
      </section>
    </div>
  )
}

