import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Screenshots } from "@/components/screenshots"
import { HowItWorks } from "@/components/how-it-works"
import { DemoPreview } from "@/components/demo-preview"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <Screenshots />
      <DemoPreview />
      <Footer />
    </main>
  )
}
