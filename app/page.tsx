"use client"

import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { Cases } from "@/components/cases"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { AnimatedGradient } from "@/components/effects/animated-gradient"
import { Particles } from "@/components/effects/particles"
import { CursorGlow } from "@/components/effects/cursor-glow"
import { ScrollProgress } from "@/components/effects/scroll-progress"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background effects */}
      <AnimatedGradient />
      <Particles />
      <CursorGlow />
      <ScrollProgress />
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Stats />
        <Services />
        <Cases />
        <CTA />
        <Footer />
      </div>
    </main>
  )
}
