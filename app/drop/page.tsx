import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Image, Quote, MessageCircle } from "lucide-react"

export default function DropPage() {
  return (
    <div className="w-full px-4 md:px-6 py-10 md:py-16 space-y-8 noise">
      <div className="space-y-4 max-w-[1400px] mx-auto">
        <h1 className="font-playfair text-4xl font-bold tracking-tighter sm:text-5xl glitch-item" data-text="Drop">Drop</h1>
        <p className="font-mono text-xl text-muted-foreground max-w-[700px] distort">
          Quick thoughts, images, code snippets, and quotes that caught my attention.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full max-w-[1400px] mx-auto">
        <TabsList className="grid w-full grid-cols-5 font-mono">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="thoughts" className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            <span>Thoughts</span>
          </TabsTrigger>
          <TabsTrigger value="images" className="flex items-center gap-2">
            <Image className="h-4 w-4" />
            <span>Images</span>
          </TabsTrigger>
          <TabsTrigger value="code" className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            <span>Code</span>
          </TabsTrigger>
          <TabsTrigger value="quotes" className="flex items-center gap-2">
            <Quote className="h-4 w-4" />
            <span>Quotes</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Thought */}
            <Card className="glitch-border">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                      <MessageCircle className="h-4 w-4" />
                      <span>Thought</span>
                    </div>
                    <div className="font-mono text-sm text-muted-foreground">Dec 1, 2023</div>
                  </div>
                  <p className="distort">Just discovered this fascinating paper on emergent properties in complex systems. Makes me wonder if consciousness itself is merely an emergent property of neural complexity.</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Image */}
            <Card className="glitch-border">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                      <Image className="h-4 w-4" />
                      <span>Image</span>
                    </div>
                    <div className="font-mono text-sm text-muted-foreground">Nov 29, 2023</div>
                  </div>
                  <div className="aspect-square w-full bg-muted glitch-image scanline"></div>
                  <p className="text-sm text-muted-foreground">Brutalist architecture that reminds me of certain software architectures I've worked with.</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Code */}
            <Card className="glitch-border">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                      <Code className="h-4 w-4" />
                      <span>Code</span>
                    </div>
                    <div className="font-mono text-sm text-muted-foreground">Nov 27, 2023</div>
                  </div>
                  <div className="rounded-md bg-muted p-4 scanline">
                    <pre className="font-mono text-sm"><code>function consciousness() {\
  return 'still a mystery';
}</code></pre>
                  </div>
                  <p className="text-sm text-muted-foreground">If only understanding consciousness was this simple.</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Quote */}
            <Card className="glitch-border">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                      <Quote className="h-4 w-4" />
                      <span>Quote</span>
                    </div>
                    <div className="font-mono text-sm text-muted-foreground">Nov 25, 2023</div>
                  </div>
                  <blockquote className="border-l-4 pl-4 italic distort">
                    "The universe is not only stranger than we imagine, it is stranger than we can imagine."
                  </blockquote>
                  <p className="text-sm text-muted-foreground">— J.B.S. Haldane</p>
                </div>
              </CardContent>
            </Card>
            
            {/* More drops would go here */}
          </div>
        </TabsContent>
        {/* Other tab contents would be similar */}
      </Tabs>
    </div>
  )
}

