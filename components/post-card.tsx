'use client'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Post } from "@/content/posts"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation";

interface PostCardProps {
  post: Post;
  isGlitchy?: boolean;
}

export const PostCard = ({ post, isGlitchy = true }: PostCardProps) => {
const router = useRouter();
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
    <Card className={`overflow-hidden ${isGlitchy ? "glitch-border" : ""} flex flex-col h-full`}>
      <CardHeader className="p-0">
        <div className={`aspect-video w-full bg-muted ${isGlitchy ? "glitch-image scanline" : ""}`}>
          {post.imageUrl && (
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap items-center gap-2 font-mono text-sm text-muted-foreground">
              {post.categories.map((category, index) => (
                <span key={index} className="bg-muted px-2 py-0.5 rounded text-xs">{category}</span>
              ))}
              <Badge variant="outline" className="ml-1">
                {language.flag} {language.name}
              </Badge>
            </div>
            <div className="font-mono text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString("en-US", { 
                year: "numeric", 
                month: "long", 
                day: "numeric" 
              })}
            </div>
          </div>
          <CardTitle className={`font-playfair text-2xl ${isGlitchy ? "distort" : ""}`}>
            {post.title}
          </CardTitle>
          <p className="text-muted-foreground">{post.excerpt}</p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto">
        <Button 
          variant="outline" 
          className="w-full font-mono transition-all hover:bg-red hover:text-primary-foreground hover:shadow-[0_0_8px_rgb(255,0,0,0.7)] hover:border-red hover:scale-[1.02] active:scale-[0.98] relative group overflow-hidden"
          onClick={() => router.push(`/blog/${post.slug}`)}
        >
          <span className="relative z-10 group-hover:text-glitch">Read Article</span>
          <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 group-hover:animate-glitch-bg"></span>
        </Button>
      </CardFooter>
    </Card>
  );
}; 