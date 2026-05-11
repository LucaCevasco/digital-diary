import Image from "next/image"
import Link from "next/link"

type Contact = { key: string; label: string; href: string; external?: boolean }
type Job = { from: string; to: string; org: string; role: string; body: string }
type Project = { name: string; stack: string; body: string }

const contacts: Contact[] = [
  { key: "github   ", label: "LucaCevasco", href: "https://github.com/LucaCevasco", external: true },
  { key: "twitter  ", label: "@tlzip", href: "https://x.com/tlzip", external: true },
  { key: "linkedin ", label: "in/lucacevasco", href: "https://www.linkedin.com/in/lucacevasco/", external: true },
  { key: "email    ", label: "thelucazip@gmail.com", href: "mailto:thelucazip@gmail.com" },
  { key: "resume   ", label: "./resume.pdf", href: "/resume.pdf", external: true },
]

const experience: Job[] = [
  {
    from: "2022", to: "now", org: "rather labs", role: "blockchain & fullstack",
    body: "Versatile engineer across projects of all sizes. Continuous product improvement, sales engineering on AI projects, technical scoping & estimation.",
  },
  {
    from: "2022", to: "now", org: "transcribeme", role: "fullstack (1M+ users)",
    body: "WhatsApp & Telegram transcription bot, AI summarization, TranscribeGo checkout & integrations. 2023 LaNacion + VISA innovation prize.",
  },
  {
    from: "2021", to: "2022", org: "settle network · ping (YC S22)", role: "mobile",
    body: "Hybrid mobile app for Ping (USD account, wire, crypto, invoicing). CI/CD via GitHub Actions, native modules, team guidelines.",
  },
  {
    from: "2021", to: "2021", org: "antorcha digital", role: "react native lead",
    body: "Led RN hybrid app development in TypeScript. Architecture and key technical decisions.",
  },
  {
    from: "2021", to: "2021", org: "kovix", role: "fullstack",
    body: "TypeScript microservices project with NestJS and Angular.",
  },
  {
    from: "2020", to: "2021", org: "rather labs", role: "mobile & frontend",
    body: "RN social network with JWT, Context, Redux. Next.js + Material UI + SSR with product focus.",
  },
]

const academic = [
  {
    title: "computer engineering",
    org: "UADE · current",
    body: "Hardware/software integration, theoretical foundations and practical applications.",
  },
  {
    title: "ai research project",
    org: "research contributor",
    body: "Contributed to algorithm development, data analysis, and evaluation metrics for ML approaches.",
  },
  {
    title: "continuing education",
    org: "self-directed",
    body: "Blockchain architecture, decentralized systems, advanced AI applications.",
  },
]

const projects: Project[] = [
  { name: "tao-bridge", stack: "MultiversX · Bittensor", body: "First bridge between Bittensor and MultiversX. wTAO exposure with seamless TAO bridging." },
  { name: "transcribeme / transcribego", stack: "Next.js · Python · AWS Lambda · MongoDB", body: "WhatsApp & Telegram voice-note transcription bot, 1M+ users. Serverless checkout + AI APIs." },
  { name: "ai fine-tuning · medical", stack: "Python · ML · Healthcare", body: "Fine-tuned model for Epicrisis generation in a medical center. Research + specialized training data." },
  { name: "cuéntalo", stack: "TypeScript · Mobile", body: "Anonymous Q&A platform promoting positive interactions among young people." },
  { name: "soundit", stack: "Solidity · TypeScript · Web3", body: "Decentralized audio-focused social media. New paradigms for content sharing on-chain." },
  { name: "ping (yc s22)", stack: "React Native · CI/CD", body: "Led RN development with native modules. Managed deployments, app credentials, CI/CD." },
]

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        ── {title}
      </h2>
      {children}
    </section>
  )
}

export default function MePage() {
  return (
    <div className="w-full px-4 md:px-6 max-w-[900px] mx-auto py-12 md:py-16 font-mono space-y-12">
      {/* Header */}
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
        <div className="space-y-3">
          <p className="text-xs text-muted-foreground">
            <span className="text-accent">$</span> man luca
          </p>
          <h1 className="text-4xl md:text-5xl font-medium lowercase tracking-tight">
            luca cevasco
          </h1>
          <p className="text-sm text-muted-foreground max-w-[60ch] leading-relaxed">
            software engineer - working on blockchain, some mobile, and AI projects.
          </p>
        </div>
        <div className="relative h-32 w-32 border border-border overflow-hidden shrink-0">
          <Image
            src="/me.jpg"
            alt="luca cevasco"
            fill
            sizes="128px"
            className="object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
            style={{ objectPosition: "center 45%" }}
            priority
          />
        </div>
      </div>

      <Section title="synopsis">
        <p className="text-sm leading-relaxed max-w-[70ch]">
          builder. focused on the connective tissue between decentralized systems and
          the surfaces people actually touch — wallets, social feeds, transcription
          bots, bridges. typescript & solidity by day; reading, writing, and
          collecting old books by night.
        </p>
      </Section>

      <Section title="contact">
        <ul className="space-y-1 text-sm">
          {contacts.map(c => (
            <li key={c.href} className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-muted-foreground whitespace-pre">{c.key}</span>
              <Link
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="text-accent hover:underline underline-offset-4"
              >
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="experience">
        <ul className="space-y-5 text-sm">
          {experience.map((j, i) => (
            <li key={i} className="grid gap-1 md:grid-cols-[8rem_1fr]">
              <div className="text-muted-foreground tabular-nums">
                {j.from}—{j.to}
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-foreground">{j.org}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-accent">{j.role}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-1">{j.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="academic">
        <ul className="space-y-5 text-sm">
          {academic.map((a, i) => (
            <li key={i}>
              <div className="flex flex-wrap items-baseline gap-x-2">
                <span className="text-foreground">{a.title}</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-accent">{a.org}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-1 max-w-[70ch]">{a.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="projects">
        <ul className="space-y-4 text-sm">
          {projects.map((p, i) => (
            <li key={i} className="border border-border p-4 hover:border-accent transition-colors">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-foreground">{p.name}</span>
                <span className="text-xs text-muted-foreground">{p.stack}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-2">{p.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="quote">
        <blockquote className="border-l-2 border-accent pl-4 text-sm italic text-muted-foreground max-w-[70ch] leading-relaxed">
          &ldquo;the technology we build today forms the foundation of the society
          we&apos;ll live in tomorrow. the question is whether that foundation will
          support a structure of liberation or constraint.&rdquo;
        </blockquote>
      </Section>
    </div>
  )
}
