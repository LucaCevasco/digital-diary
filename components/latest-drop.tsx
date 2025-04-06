import { Card, CardContent } from "@/components/ui/card"
import { Code, Image, Quote, MessageCircle } from "lucide-react"

interface LatestDropProps {
  content: string
  date: string
  type: "thought" | "image" | "code" | "quote"
  isGlitchy?: boolean
}

export default function LatestDrop({ content, date, type, isGlitchy = false }: LatestDropProps) {
  return (
    <Card className={isGlitchy ? "glitch-border" : ""}>
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
              {type === "thought" && <MessageCircle className="h-4 w-4" />}
              {type === "image" && <Image className="h-4 w-4" />}
              {type === "code" && <Code className="h-4 w-4" />}
              {type === "quote" && <Quote className="h-4 w-4" />}
              <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
            </div>
            <div className="font-mono text-sm text-muted-foreground">
              {new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            </div>
          </div>

          {type === "image" ? (
            <div className={`aspect-square w-full bg-muted ${isGlitchy ? "glitch-image scanline" : ""}`}>
              <img src={content || "/placeholder.svg"} alt="Drop" className="h-full w-full object-cover" />
            </div>
          ) : type === "code" ? (
            <div className={`rounded-md bg-muted p-2 ${isGlitchy ? "scanline" : ""}`}>
              <pre className="font-mono text-xs overflow-x-auto">
                <code>{content}</code>
              </pre>
            </div>
          ) : type === "quote" ? (
            <blockquote className={`border-l-2 pl-2 italic text-sm ${isGlitchy ? "distort" : ""}`}>
              {content}
            </blockquote>
          ) : (
            <p className={`text-sm ${isGlitchy ? "distort" : ""}`}>{content}</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

