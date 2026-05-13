"use client"

import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { Cases } from "@/components/cases"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { AnimatedGradient } from "@/components/effects/animated-gradient"
import { ScrollProgress } from "@/components/effects/scroll-progress"
import { Preloader } from "@/components/effects/preloader"

export default function Home() {
  return (
    <>
      <Preloader />
      <main className="min-h-screen relative">
        {/* Background effects - optimized for performance */}
        <AnimatedGradient />
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
    </>
  )
}
