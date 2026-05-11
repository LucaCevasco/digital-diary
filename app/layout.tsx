import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import ThemeProvider from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "loop",
  description: "a feed of half-formed ideas - technology and human experience.",
}

const buildDate = new Date().toISOString().slice(0, 10)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} font-mono bg-background text-foreground antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <footer className="border-t border-border mt-16">
              <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground">
                <span className="text-accent">●</span>
                <span>NORMAL</span>
                <span className="opacity-40">·</span>
                <span>~/loop</span>
                <span className="opacity-40">·</span>
                <span>UTF-8</span>
                <span className="opacity-40">·</span>
                <span>main</span>
                <span className="opacity-40">·</span>
                <span>{buildDate}</span>
                <span className="ml-auto flex items-center gap-4">
                  <a href="/feed.xml" className="hover:text-accent transition-colors">/feed.xml</a>
                  <a href="https://github.com/LucaCevasco" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">gh</a>
                  <span>© {new Date().getFullYear()} luca cevasco</span>
                </span>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
