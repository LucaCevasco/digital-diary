import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Image as ImageIcon, Quote, MessageCircle } from "lucide-react"
import { DropCard } from "@/components/drop-card"
import { drops, getDropsByType } from "@/content/drops"

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
            <ImageIcon className="h-4 w-4" />
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

        {/* All Drops Tab */}
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {drops.map(drop => (
              <DropCard key={drop.id} drop={drop} />
            ))}
          </div>
        </TabsContent>

        {/* Thoughts Tab */}
        <TabsContent value="thoughts" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getDropsByType('thought').map(drop => (
              <DropCard key={drop.id} drop={drop} />
            ))}
          </div>
        </TabsContent>

        {/* Images Tab */}
        <TabsContent value="images" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getDropsByType('image').map(drop => (
              <DropCard key={drop.id} drop={drop} />
            ))}
          </div>
        </TabsContent>

        {/* Code Tab */}
        <TabsContent value="code" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getDropsByType('code').map(drop => (
              <DropCard key={drop.id} drop={drop} />
            ))}
          </div>
        </TabsContent>

        {/* Quotes Tab */}
        <TabsContent value="quotes" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getDropsByType('quote').map(drop => (
              <DropCard key={drop.id} drop={drop} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

