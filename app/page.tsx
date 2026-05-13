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
import { Preloader } from "@/components/effects/preloader"
import { NeuralNetwork } from "@/components/effects/neural-network"
import { DataFlow } from "@/components/effects/data-flow"
import { GridPulse } from "@/components/effects/grid-pulse"
import { GlitchOverlay } from "@/components/effects/glitch"

export default function Home() {
  return (
    <>
      <Preloader />
      <main className="min-h-screen relative">
        {/* Background effects */}
        <AnimatedGradient />
        <NeuralNetwork />
        <GridPulse />
        <DataFlow />
        <Particles />
        <CursorGlow />
        <ScrollProgress />
        <GlitchOverlay />
        
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
    </>
  )
}
