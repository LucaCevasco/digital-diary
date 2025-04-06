import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface FeaturedPostProps {
  title: string
  excerpt: string
  date: string
  category: string
  isGlitchy?: boolean
}

export default function FeaturedPost({ title, excerpt, date, category, isGlitchy = false }: FeaturedPostProps) {
  return (
    <Card className={`overflow-hidden ${isGlitchy ? "glitch-border" : ""}`}>
      <div className={`aspect-video w-full bg-muted ${isGlitchy ? "glitch-image" : ""}`}></div>
      <CardContent className="p-6">
        <div className="space-y-2">
          <div className="font-mono text-sm text-muted-foreground">
            {category} •{" "}
            {new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </div>
          <h3 className={`font-playfair text-2xl font-bold ${isGlitchy ? "distort" : ""}`}>{title}</h3>
          <p className="text-muted-foreground">{excerpt}</p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" className={`w-full font-mono ${isGlitchy ? "glitch-border" : ""}`}>
          Read Article
        </Button>
      </CardFooter>
    </Card>
  )
}

