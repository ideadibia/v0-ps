import { Hero } from "@/components/hero"
import { Supporters } from "@/components/supporters"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="mx-auto max-w-5xl px-6">
        <hr className="border-border" />
      </div>
      <Supporters />
      <CtaSection />
      <Footer />
    </main>
  )
}
