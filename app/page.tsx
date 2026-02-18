import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-between px-6 py-10 md:py-16">
      {/* Logo */}
      <header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/pillsette-logo.svg"
          alt="Pillsette"
          className="h-12 w-auto md:h-14"
        />
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
          href="https://uoft.me/medpackaging"
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
        {"\u00A9"} {new Date().getFullYear()} Pillsette
      </footer>
    </main>
  )
}
