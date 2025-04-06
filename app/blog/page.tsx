import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BlogPage() {
  return (
    <div className="w-full px-4 md:px-6 py-10 md:py-16 space-y-8 noise">
      <div className="space-y-4 max-w-[1400px] mx-auto">
        <h1 className="font-playfair text-4xl font-bold tracking-tighter sm:text-5xl glitch-item" data-text="Blog">
          Blog
        </h1>
        <p className="font-mono text-xl text-muted-foreground max-w-[700px] distort">
          Long-form explorations at the intersection of technology, philosophy, and human experience.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full max-w-[1400px] mx-auto">
        <TabsList className="grid w-full grid-cols-5 font-mono">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="technology">Technology</TabsTrigger>
          <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
          <TabsTrigger value="literature">Literature</TabsTrigger>
          <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <Card key={i} className="overflow-hidden glitch-border">
                <CardHeader className="p-0">
                  <div
                    className={`aspect-video w-full bg-muted ${i % 3 === 0 ? "glitch-image" : ""} ${i % 2 === 0 ? "scanline" : ""}`}
                  ></div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className="font-mono text-sm text-muted-foreground">
                      {["Technology", "Philosophy", "Literature", "Lifestyle"][i % 4]} •{" "}
                      {new Date(2023, 11 - (i % 3), 28 - i).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <CardTitle className={`font-playfair text-2xl ${i % 4 === 0 ? "distort" : ""}`}>
                      {
                        [
                          "The Quantum Nature of Software Design",
                          "Dostoevsky in the Digital Age",
                          "The Ethics of AI: Beyond the Binary",
                          "Minimalism as a Development Philosophy",
                          "The Poetry of Programming Languages",
                          "Digital Detox: A Month Offline",
                          "Kafka's Metamorphosis as a Metaphor for Legacy Code",
                          "The Architecture of Thought",
                          "Slow Computing in a Fast World",
                        ][i]
                      }
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {
                        [
                          "Exploring the parallels between quantum mechanics and modern software architecture",
                          "What would the great Russian novelist make of our hyperconnected world?",
                          "Moving past simplistic good/bad dichotomies in artificial intelligence discourse",
                          "How less becomes more in both life and code",
                          "The aesthetic and philosophical dimensions of different programming paradigms",
                          "Lessons learned from stepping away from the digital world",
                          "Transforming and maintaining complex systems over time",
                          "How our mental models shape and are shaped by technology",
                          "The case for deliberate, thoughtful computing in an age of instant gratification",
                        ][i]
                      }
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full font-mono">
                    Read Article
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="technology" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Technology posts would go here */}
            <Card className="overflow-hidden glitch-border">
              <CardHeader className="p-0">
                <div className="aspect-video w-full bg-muted glitch-image"></div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="font-mono text-sm text-muted-foreground">Technology • December 1, 2023</div>
                  <CardTitle className="font-playfair text-2xl distort">
                    The Quantum Nature of Software Design
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Exploring the parallels between quantum mechanics and modern software architecture
                  </p>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full font-mono">
                  Read Article
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        {/* Other tab contents would be similar */}
      </Tabs>
    </div>
  )
}

