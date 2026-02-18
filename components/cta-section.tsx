import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section id="form" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-xl">
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-card p-10 text-center md:p-14">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-accent"
              aria-hidden="true"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                fill="currentColor"
              />
            </svg>
          </div>

          <h3 className="font-serif text-2xl text-foreground md:text-3xl text-balance">
            Struggling to keep track of your pills?
          </h3>

          <p className="text-base leading-relaxed text-muted-foreground">
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
      </div>
    </section>
  )
}
