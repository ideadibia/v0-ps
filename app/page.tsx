import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-between px-6 py-10 md:py-16">
      {/* Logo + Wordmark */}
      <header className="flex items-center gap-3">
        <Image
          src="/images/accountable-logo.jpg"
          alt="Accountable logo"
          width={40}
          height={40}
          className="rounded-lg"
        />
        <span className="text-lg font-semibold tracking-tight text-foreground">
          Accountable
        </span>
      </header>

      {/* Central CTA */}
      <div className="flex w-full max-w-md flex-col items-center gap-6 text-center">
        <h1 className="font-serif text-3xl text-foreground md:text-4xl text-balance">
          Struggling to keep track of your pills?
        </h1>

        <p className="text-base leading-relaxed text-muted-foreground text-pretty">
          {"You're not alone. Tell us about your experience — we're building something to help."}
        </p>

        <a
          href="https://forms.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:opacity-90"
        >
          Share your experience
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      {/* Footer */}
      <footer className="text-sm text-muted-foreground">
        {"\u00A9"} {new Date().getFullYear()} Accountable
      </footer>
    </main>
  )
}
