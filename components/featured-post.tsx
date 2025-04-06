import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface FeaturedPostProps {
  title: string
  excerpt: string
  date: string
  category: string
}

export default function FeaturedPost({ title, excerpt, date, category }: FeaturedPostProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full bg-muted"></div>
      <CardContent className="p-6">
        <div className="space-y-2">
          <div className="font-mono text-sm text-muted-foreground">
            {category} •{" "}
            {new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </div>
          <h3 className="font-playfair text-2xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{excerpt}</p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" className="w-full font-mono">
          Read Article
        </Button>
      </CardFooter>
    </Card>
  )
}

