import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="flex flex-col items-center px-6 pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="flex flex-col items-center gap-8 max-w-2xl text-center">
        <div className="flex items-center gap-4">
          <Image
            src="/images/accountable-logo.jpg"
            alt="Accountable logo"
            width={56}
            height={56}
            className="rounded-xl"
          />
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Accountable
          </h1>
        </div>

        <h2 className="font-serif text-4xl leading-tight text-foreground md:text-6xl md:leading-tight text-balance">
          Never forget to take your medication again
        </h2>

        <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
          Smart, portable pill dispensers and gentle reminders — designed with
          care for older adults and the people who love them.
        </p>

        <a
          href="https://forms.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:opacity-90"
        >
          Do you struggle with medication?
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}
