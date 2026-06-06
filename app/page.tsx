"use client"

import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Pains } from "@/components/pains"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Cases } from "@/components/cases"
import { Expert } from "@/components/expert"
import { Reviews } from "@/components/reviews"
import { Faq } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { AnimatedGradient } from "@/components/effects/animated-gradient"
import { ScrollProgress } from "@/components/effects/scroll-progress"
import { Preloader } from "@/components/effects/preloader"
import { MessengerButtons } from "@/components/messenger-buttons"

export default function Home() {
  return (
    <>
      <Preloader />
      <main className="min-h-screen relative">
        {/* Background effects - optimized for performance */}
        <AnimatedGradient />
        <ScrollProgress />
        <MessengerButtons />
        
        {/* Content */}
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <Pains />
          <Stats />
          <Services />
          <Process />
          <Cases />
          <Expert />
          <Reviews />
          <Faq />
          <CTA />
          <Footer />
        </div>
      </main>
    </>
  )
}
