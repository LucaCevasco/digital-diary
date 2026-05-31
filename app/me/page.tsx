import Image from "next/image"
import Link from "next/link"

type Contact = { key: string; label: string; href: string; external?: boolean }
type Job = { from: string; to: string; org: string; role: string; body: string }
type Project = {
  name: string
  year: string
  tagline: string
  body: string
  stack: string[]
  metric?: string
  href?: string
  linkLabel?: string
  image?: string
  imageAlt?: string
}

const contacts: Contact[] = [
  { key: "github   ", label: "LucaCevasco", href: "https://github.com/LucaCevasco", external: true },
  { key: "twitter  ", label: "@tlzip", href: "https://x.com/tlzip", external: true },
  { key: "linkedin ", label: "in/lucacevasco", href: "https://www.linkedin.com/in/lucacevasco/", external: true },
  { key: "email    ", label: "thelucazip@gmail.com", href: "mailto:thelucazip@gmail.com" },
  { key: "resume   ", label: "./resume.pdf", href: "/resume.pdf", external: true },
]

const experience: Job[] = [
  {
    from: "2025", to: "now", org: "globalstake", role: "software engineer",
    body: "Bare-metal staking crypto platform. Building consumer-facing product surfaces. Remote.",
  },
  {
    from: "2022", to: "2025", org: "rather labs", role: "blockchain & fullstack",
    body: "Versatile engineer across projects of all sizes. Continuous product improvement, sales engineering on AI projects, technical scoping & estimation.",
  },
  {
    from: "2022", to: "2025", org: "transcribeme", role: "fullstack (1M+ users)",
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
  {
    name: "silk monad",
    year: "2026",
    tagline: "autonomous LLM merchants that trade on-chain",
    body: "A Silk Road rebuilt in Minecraft where fully autonomous agents — each with a persona, a wallet, and a satchel of tokenized goods — negotiate in character and, when they agree on a price, settle a real ERC-20 trade (SPICE / SILK / JADE) on Monad testnet inside the perceive → decide → act loop. Built to stress-test Monad's ~1s finality against a swarm of agents.",
    stack: ["Minecraft", "Mineflayer", "mindcraft-ce", "viem", "Solidity", "Monad"],
    metric: "open source · live demo server",
    href: "https://github.com/zero-point-module/silk-monad",
    linkLabel: "github",
    image: "/images/projects/silk-monad.jpg",
    imageAlt: "Silk Monad — Marco the Venetian and Chen the Jade Merchant trading in Minecraft",
  },
  {
    name: "basepump",
    year: "2024",
    tagline: "bonding-curve token launchpad on Base, with an AI copilot",
    body: "Full-stack dApp to deploy and trade ERC-20s without presales or manual liquidity. Bonding curves price tokens by supply/demand, auto-migrate to Uniswap V2 at ~$69k cap, and lock liquidity permanently by burning LP tokens. Ships with Aileen, an AI assistant for natural-language on-chain queries.",
    stack: ["Solidity", "Base", "The Graph", "Chainlink", "Uniswap V2", "Next.js"],
    href: "https://ratherlabs.com/portfolio/basepump",
    linkLabel: "case study",
    image: "/images/projects/basepump.png",
    imageAlt: "BasePump — bonding-curve token launchpad on Base",
  },
  {
    name: "tao-bridge",
    year: "2024",
    tagline: "first bridge between Bittensor and MultiversX",
    body: "Cross-ecosystem bridge that wraps TAO into wTAO on MultiversX, unlocking lending and liquid-staking utility with delivery in minutes. Audited synthetic-token minting and staking contracts.",
    stack: ["Solidity", "MultiversX", "Bittensor", "Liquid staking"],
    metric: "$10M transacted in the first hour",
    href: "https://ratherlabs.com/portfolio/tao-bridge",
    linkLabel: "case study",
    image: "/images/projects/tao-bridge.png",
    imageAlt: "TAO Bridge — Bittensor to MultiversX",
  },
  {
    name: "transcribego",
    year: "2023",
    tagline: "AI transcription platform — 90+ languages",
    body: "Upload a file or paste a link from YouTube, TikTok, Instagram, WhatsApp or Telegram and get a transcript in seconds, with ~99% precision. Translation, summarization, key-point extraction, article drafts, infographics, and SRT subtitle export. I built the checkout and integrations.",
    stack: ["Next.js", "Python", "AWS Lambda", "MongoDB"],
    href: "https://transcribego.com/es",
    linkLabel: "transcribego.com",
    image: "/images/projects/transcribego.png",
    imageAlt: "TranscribeGo — AI transcription platform",
  },
  {
    name: "transcribeme",
    year: "2022",
    tagline: "voice-note transcription, inside WhatsApp & Telegram",
    body: "A messaging-native bot that transcribes voice notes to text with ~95% accuracy across languages, plus in-thread ChatGPT, YouTube transcription, and on-demand translation — no separate app to install. 2023 La Nación + VISA innovation prize.",
    stack: ["Python", "WhatsApp API", "Telegram API", "AWS Lambda"],
    metric: "2M+ users · 30M+ transcripts",
    href: "https://ratherlabs.com/portfolio/transcribeme",
    linkLabel: "case study",
    image: "/images/projects/transcribeme.png",
    imageAlt: "TranscribeMe — transcription bot for WhatsApp and Telegram",
  },
  {
    name: "ping",
    year: "2022",
    tagline: "a free USD account for the world (YC S22)",
    body: "Hybrid mobile app for a global money platform: free USD accounts, worldwide invoicing, crypto/fiat conversion, and a no-fee international card with minutes-long KYC. Led the React Native build — native modules, app credentials, and CI/CD.",
    stack: ["React Native", "TypeScript", "GitHub Actions"],
    href: "https://www.letsping.com/",
    linkLabel: "letsping.com",
    image: "/images/projects/ping.jpg",
    imageAlt: "Ping — free USD account and global money app",
  },
]

const otherProjects = [
  { name: "soundit", stack: "Solidity · Web3", body: "Decentralized audio-focused social media — new paradigms for sharing content on-chain." },
  { name: "cuéntalo", stack: "TypeScript · Mobile", body: "Anonymous Q&A platform promoting positive interactions among young people." },
  { name: "ai fine-tuning · medical", stack: "Python · ML", body: "Fine-tuned model for Epicrisis generation in a medical center, with specialized training data." },
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

function ProjectCard({ p }: { p: Project }) {
  const className =
    "group flex flex-col border border-border bg-card hover:border-accent transition-colors"

  const inner = (
    <>
      {p.image && (
        <div className="relative aspect-[16/9] border-b border-border overflow-hidden bg-muted">
          <Image
            src={p.image}
            alt={p.imageAlt ?? p.name}
            fill
            sizes="(max-width: 768px) 100vw, 440px"
            unoptimized={p.image.endsWith(".svg")}
            className="object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-foreground group-hover:text-accent transition-colors">
            {p.name}
            {p.href && <span className="text-accent"> ↗</span>}
          </span>
          <span className="text-xs text-muted-foreground tabular-nums">{p.year}</span>
        </div>
        <p className="text-xs text-accent leading-relaxed">{p.tagline}</p>
        <p className="text-muted-foreground leading-relaxed text-[13px]">{p.body}</p>
        {p.metric && (
          <p className="text-xs text-foreground">
            <span className="text-muted-foreground">→ </span>
            {p.metric}
          </p>
        )}
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {p.stack.map(s => (
            <li
              key={s}
              className="border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </>
  )

  if (p.href) {
    return (
      <Link href={p.href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </Link>
    )
  }

  return <div className={className}>{inner}</div>
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
        <div className="grid gap-4 sm:grid-cols-2 text-sm">
          {projects.map(p => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>

        <ul className="space-y-3 text-sm pt-2">
          {otherProjects.map((p, i) => (
            <li key={i} className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-foreground">{p.name}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground leading-relaxed">{p.body}</span>
              <span className="text-xs text-muted-foreground/70">{p.stack}</span>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  )
}
