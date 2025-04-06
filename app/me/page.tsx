import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Twitter, Linkedin, Mail, FileText } from "lucide-react"

export default function MePage() {
  return (
    <div className="w-full px-4 md:px-6 py-10 md:py-16 space-y-12 noise">
      <div className="grid gap-8 md:grid-cols-2 max-w-[1400px] mx-auto">
        <div className="space-y-4">
          <h1
            className="font-playfair text-4xl font-bold tracking-tighter sm:text-5xl glitch-item"
            data-text="About Me"
          >
            About Me
          </h1>
          <p className="font-mono text-xl text-muted-foreground distort">
            Software engineer by day, philosopher by night.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="outline" size="icon" className="rounded-full glitch-border">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full glitch-border">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full glitch-border">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full glitch-border">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
            <Button variant="outline" className="rounded-full font-mono glitch-border">
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>
        <div className="relative aspect-square md:aspect-auto">
          <div className="absolute inset-0 grid-pattern bg-muted"></div>
          <div className="absolute inset-0 flex items-center justify-center scanline">
            <div className="h-48 w-48 rounded-full bg-background glitch-image"></div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="bio" className="w-full max-w-[1400px] mx-auto">
        <TabsList className="grid w-full grid-cols-3 font-mono">
          <TabsTrigger value="bio">Bio</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>
        <TabsContent value="bio" className="mt-6 space-y-6">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl leading-relaxed distort">
              I'm a software engineer with a background in philosophy and literature. My work explores the intersection
              of technology and human experience, seeking to bridge the gap between the digital and the philosophical.
            </p>
            <p className="leading-relaxed">
              After completing my degree in Computer Science with a minor in Philosophy, I've spent the last decade
              building software that not only solves technical problems but also addresses deeper questions about how we
              interact with technology and how it shapes our lives.
            </p>
            <p className="leading-relaxed">
              When I'm not coding or writing, you'll find me exploring used bookstores, experimenting with analog
              photography, or engaging in long conversations about consciousness, free will, and the future of humanity
              in an increasingly digital world.
            </p>
            <blockquote className="glitch-border">
              "The most profound technologies are those that disappear. They weave themselves into the fabric of
              everyday life until they are indistinguishable from it."
              <footer>— Mark Weiser</footer>
            </blockquote>
          </div>
        </TabsContent>
        <TabsContent value="experience" className="mt-6 space-y-6">
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="font-playfair text-2xl font-bold distort">Senior Software Engineer</h3>
              <div className="font-mono text-sm text-muted-foreground">TechVanguard Inc. • 2020 - Present</div>
              <p>
                Leading development of cutting-edge web applications using React, Node.js, and GraphQL. Focused on
                creating intuitive user experiences that challenge conventional design paradigms.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-playfair text-2xl font-bold distort">Software Developer</h3>
              <div className="font-mono text-sm text-muted-foreground">Digital Frontiers • 2017 - 2020</div>
              <p>
                Developed full-stack applications for clients across various industries. Specialized in creating robust
                backend systems and APIs that power complex frontend experiences.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-playfair text-2xl font-bold distort">Junior Developer</h3>
              <div className="font-mono text-sm text-muted-foreground">CodeCraft Studios • 2015 - 2017</div>
              <p>
                Started my professional journey building websites and small web applications. Learned the fundamentals
                of software development while contributing to a variety of client projects.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="projects" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="glitch-border">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="font-playfair text-2xl font-bold distort">Consciousness Explorer</h3>
                  <div className="font-mono text-sm text-muted-foreground">React, Three.js, Node.js</div>
                  <p>
                    An interactive web experience that visualizes different theories of consciousness through 3D models
                    and animations.
                  </p>
                  <Button variant="outline" className="mt-2 font-mono glitch-border">
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="glitch-border">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="font-playfair text-2xl font-bold distort">Digital Commonplace</h3>
                  <div className="font-mono text-sm text-muted-foreground">Next.js, GraphQL, MongoDB</div>
                  <p>
                    A modern take on the commonplace book tradition, allowing users to collect and connect ideas across
                    disciplines.
                  </p>
                  <Button variant="outline" className="mt-2 font-mono glitch-border">
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="glitch-border">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="font-playfair text-2xl font-bold distort">Algorithmic Poetry</h3>
                  <div className="font-mono text-sm text-muted-foreground">Python, TensorFlow, Flask</div>
                  <p>
                    An experiment in computational creativity that generates poetry based on various philosophical texts
                    and literary styles.
                  </p>
                  <Button variant="outline" className="mt-2 font-mono glitch-border">
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="glitch-border">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="font-playfair text-2xl font-bold distort">Thought Experiments</h3>
                  <div className="font-mono text-sm text-muted-foreground">Vue.js, D3.js, Express</div>
                  <p>
                    A collection of interactive thought experiments that challenge users to explore philosophical
                    concepts through direct engagement.
                  </p>
                  <Button variant="outline" className="mt-2 font-mono glitch-border">
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

