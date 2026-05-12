import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { Cases } from "@/components/cases"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <Cases />
      <CTA />
      <Footer />
    </main>
  )
}
