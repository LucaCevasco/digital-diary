import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Twitter, Linkedin, Mail, FileText } from "lucide-react"
import Image from "next/image"

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
            Problem solver at the intersection of blockchain and human experience.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="outline" size="icon" className="rounded-full glitch-border" asChild>
              <a href="https://github.com/LucaCevasco" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full glitch-border" asChild>
              <a href="https://x.com/tlzip" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full glitch-border" asChild>
              <a href="https://www.linkedin.com/in/lucacevasco/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full glitch-border" asChild>
              <a href="mailto:thelucazip@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
            <Button variant="outline" className="rounded-full font-mono glitch-border" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square md:aspect-auto">
          <div className="absolute inset-0 grid-pattern bg-muted"></div>
          <div className="absolute inset-0 flex items-center justify-center scanline">
            <div className="h-48 w-48 rounded-full bg-background glitch-image overflow-hidden relative">
              <Image 
                src="/me.jpg" 
                alt="Me" 
                fill 
                className="object-cover" 
                style={{ objectPosition: 'center 45%' }} 
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="bio" className="w-full max-w-[1400px] mx-auto">
        <TabsList className="grid w-full grid-cols-4 font-mono">
          <TabsTrigger value="bio">Bio</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="academic">Academic</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>
        <TabsContent value="bio" className="mt-6 space-y-6">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl leading-relaxed distort">
              I&apos;m a versatile software engineer exploring the frontiers where blockchain, web, and mobile technologies intersect with human interaction. My work bridges the gap between decentralized systems and intuitive user experiences.
            </p>
            <p className="leading-relaxed">
              With expertise in JavaScript ecosystems and blockchain development using Solidity, I&apos;ve architected applications that not only function efficiently but also question how we interact with digital value and information. My experience spans from DeFi protocols to social networks, always maintaining clean code standards and thoughtful architecture.
            </p>
            <p className="leading-relaxed">
              My technical toolkit includes React, React Native, NextJS for frontend, Node.js, Express, and NestJS for backend, and Solidity for smart contract development. I&apos;m proficient in TypeScript, familiar with CI/CD processes, and experienced with both SQL and NoSQL databases. This versatility allows me to approach problems holistically, considering both technical implementation and architectural implications.
            </p>
            <p className="leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring the philosophical implications of blockchain technology, examining how decentralized systems reshape our understanding of trust, or contemplating how we can create digital experiences that enhance rather than diminish our humanity in an increasingly tokenized world.
            </p>
            <blockquote className="glitch-border">
              &ldquo;The technology we build today forms the foundation of the society we&apos;ll live in tomorrow. The question is whether that foundation will support a structure of liberation or constraint.&rdquo;
              <footer>— Technological Determinism Reimagined</footer>
            </blockquote>
          </div>
        </TabsContent>
        <TabsContent value="experience" className="mt-6 space-y-6">
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="font-playfair text-2xl font-bold distort">Blockchain Developer - Fullstack Developer</h3>
              <div className="font-mono text-sm text-muted-foreground">Rather Labs • 2022 - Present</div>
              <p>
              I work as a versatile engineer having participated in different projects of all kinds of magnitudes collaborating to realize effective developments, getting involved with the project and the customer, looking for continuous product improvement. I also participate as sales engineer in the area of AI projects, estimating projects and their technical scope.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-playfair text-2xl font-bold distort">Full-Stack Developer</h3>
              <div className="font-mono text-sm text-muted-foreground">TranscribeMe • 2022 - Present</div>
              <p>
                Developed a transcription bot for WhatsApp and Telegram with over a million users, enabling free and secure audio-to-text conversion with AI summarization capabilities. Created TranscribeGo web application, focusing on checkout experiences and custom AI integrations. Explored how conversational AI reshapes information accessibility across platforms. Winner of the 2023 Prize to Innovation in New Technologies awarded by LaNacion.com and VISA.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-playfair text-2xl font-bold distort">Mobile Developer</h3>
              <div className="font-mono text-sm text-muted-foreground">Settle Network - Ping • 2021 - 2022</div>
              <p>
              Ping is an application that grants your own account in dollars, being able to use WIRE, exchange of cryptocurrencies in different blockchains and create invoices to your clients. My work is the development of an hybrid mobile app for Ping. Created documentation and guidelines for the mobile team, pushing the best practices (Functional coding, custom hooks, patterns, caching). Implementation of CI/CD proccess using github actions with a regular but stable deployment. Implement notifications and other critical native features.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-playfair text-2xl font-bold distort">React Native Developer</h3>
              <div className="font-mono text-sm text-muted-foreground">Antorcha Digital • 2021</div>
              <p>
              lead the development of hybrid applications with react native, using typescript and promoting best practices. Architecting projects and making key technical decisions.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-playfair text-2xl font-bold distort">FullStack Developer</h3>
              <div className="font-mono text-sm text-muted-foreground">Kovix • 2021</div>
              <p>
              Fullstack development in typescript using NestJs and Angular. Worked on a microservices project.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-playfair text-2xl font-bold distort">Mobile & Frontend Developer</h3>
              <div className="font-mono text-sm text-muted-foreground">Rather Labs • 2020 - 2021</div>
              <p>
                Implemented a hybrid Social Network with React Native, leveraging JWT authentication, Context API, Redux, and functional programming with React Hooks. Developed a NextJS web application with Material UI and server-side rendering, working about the product and the user experience, not only the technical implementation.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="academic" className="mt-6 space-y-6">
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="font-playfair text-2xl font-bold distort">Computer Engineering</h3>
              <div className="font-mono text-sm text-muted-foreground">Universidad Argentina de la Empresa (UADE) • Current</div>
              <p>
                Currently pursuing a degree in Computer Engineering, focusing on the integration of hardware and software systems.
                The program emphasizes both theoretical foundations and practical applications of computing technologies.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-playfair text-2xl font-bold distort">AI Research Project</h3>
              <div className="font-mono text-sm text-muted-foreground">Research Contributor</div>
              <p>
                Participated in a research project focusing on artificial intelligence applications. Contributed to the 
                development and implementation of novel AI algorithms, data analysis, and evaluation metrics. The research 
                explored innovative approaches to solving complex computational problems using machine learning techniques.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-playfair text-2xl font-bold distort">Continuing Education</h3>
              <div className="font-mono text-sm text-muted-foreground">Self-directed Learning</div>
              <p>
                Continuously expanding knowledge through specialized courses and self-directed learning in emerging technologies,
                with particular focus on blockchain architecture, decentralized systems, and advanced AI applications.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="projects" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="glitch-border">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="font-playfair text-2xl font-bold distort">TranscribeMe & TranscribeGo</h3>
                  <div className="font-mono text-sm text-muted-foreground">Next.js, Python, AWS Lambda, MongoDB</div>
                  <p>
                    Developed a WhatsApp and Telegram voice note transcription bot with over a million users. Built serverless architecture for checkout services and integrated AI APIs. TranscribeGo allows unlimited audio transcription for classes, journalistic notes, and more.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="glitch-border">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="font-playfair text-2xl font-bold distort">AI Fine-tuning Project</h3>
                  <div className="font-mono text-sm text-muted-foreground">Python, Machine Learning, Healthcare</div>
                  <p>
                    Led the development of a fine-tuned model for Epicrisis generation in a medical center. Conducted research and developed the model with specialized training data to improve medical documentation processes.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="glitch-border">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="font-playfair text-2xl font-bold distort">TAO Bridge</h3>
                  <div className="font-mono text-sm text-muted-foreground">Blockchain, MultiversX, Bittensor</div>
                  <p>
                    Built the first bridge connecting the Bittensor ecosystem with MultiversX blockchain. This innovative solution allows users to seamlessly bridge TAO assets and leverage the wTAO token while maintaining exposure to underlying TAO.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="glitch-border">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="font-playfair text-2xl font-bold distort">Cuéntalo</h3>
                  <div className="font-mono text-sm text-muted-foreground">TypeScript, Mobile Apps, Growth Strategy</div>
                  <p>
                    Created an anonymous question-and-answer platform promoting positive interactions among young people. Focused on building a safe, supportive community as an alternative to traditional social media that can cause anxiety and stress.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="glitch-border">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="font-playfair text-2xl font-bold distort">Soundit</h3>
                  <div className="font-mono text-sm text-muted-foreground">Solidity, TypeScript, Web3</div>
                  <p>
                    Developed a decentralized audio-focused social media platform, exploring new paradigms for content sharing and consumption in the blockchain space.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="glitch-border">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="font-playfair text-2xl font-bold distort">Ping (YC S22)</h3>
                  <div className="font-mono text-sm text-muted-foreground">React Native, CI/CD, Mobile Apps</div>
                  <p>
                    Led React Native development with core platform native modules for this YC-backed startup. Architected the software, managed deployments, CI/CD processes, and handled iOS and Google app credentials for a financial application.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

