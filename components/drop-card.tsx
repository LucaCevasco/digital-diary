import { Card, CardContent } from "@/components/ui/card"
import { Code, Image as ImageIcon, Quote, MessageCircle } from "lucide-react"
import Image from "next/image"
import { Drop } from "@/content/drops"

// Component to render a single drop card
export const DropCard = ({ drop }: { drop: Drop }) => {
  return (
    <Card className="glitch-border">
      <CardContent className="p-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
              {drop.type === 'thought' && <MessageCircle className="h-4 w-4" />}
              {drop.type === 'image' && <ImageIcon className="h-4 w-4" />}
              {drop.type === 'code' && <Code className="h-4 w-4" />}
              {drop.type === 'quote' && <Quote className="h-4 w-4" />}
              <span>{drop.type.charAt(0).toUpperCase() + drop.type.slice(1)}</span>
            </div>
            <div className="font-mono text-sm text-muted-foreground">{drop.date}</div>
          </div>
          
          {drop.type === 'thought' && (
            <p className="distort">{drop.content}</p>
          )}
          
          {drop.type === 'image' && (
            <>
              <div className="aspect-square w-full h-75 bg-muted glitch-image scanline overflow-hidden">
                <Image src={drop.imageUrl!} alt={drop.imageAlt || ''} width={500} height={500} className="w-full h-full object-cover object-[50%_45%]" />
              </div>
              {drop.caption && <p className="text-sm text-muted-foreground">{drop.caption}</p>}
            </>
          )}
          
          {drop.type === 'code' && (
            <div className="rounded-md bg-muted p-4 scanline">
              <pre className="font-mono text-sm"><code>{drop.content}</code></pre>
            </div>
          )}
          
          {drop.type === 'quote' && (
            <>
              <blockquote className="border-l-4 pl-4 italic distort">
                &quot;{drop.content}&quot;
              </blockquote>
              {drop.author && <p className="text-sm text-muted-foreground">— {drop.author}</p>}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}; 