export default function MedicationManagement() {
  return (
    <main className="flex min-h-svh flex-col items-center px-6 py-10 md:py-16">
      {/* Logo */}
      <header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/pillsette-logo.svg"
          alt="Pillsette"
          className="h-54 w-auto md:h-64"
        />
      </header>

      {/* Content */}
      <article className="w-full max-w-[600px] text-left">
        <h1 className="font-sans text-3xl font-semibold text-foreground md:text-4xl text-balance">
          Understanding medication management.
        </h1>

        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          In April 2026, we ran a survey.
        </p>

        {/* Participation Section */}
        <section className="mt-12">
          <h2 className="font-sans text-2xl font-semibold text-foreground md:text-3xl">
            Participation
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Our survey garnered responses from a diverse group of participants across multiple demographics. The data collection period spanned three weeks, during which we received input from healthcare providers, caregivers, and individuals managing their own medication regimens. Response rates exceeded our initial projections, with particularly strong engagement from the 55-75 age demographic. Participants were recruited through community health centers, senior living facilities, and online health forums.
          </p>
        </section>

        {/* Demographics Section */}
        <section className="mt-12">
          <h2 className="font-sans text-2xl font-semibold text-foreground md:text-3xl">
            Demographics
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The participant pool represented a balanced distribution across gender identities, with 52% identifying as female, 46% as male, and 2% as non-binary or preferring not to disclose. Geographically, respondents came from urban, suburban, and rural areas in relatively equal measure. Educational backgrounds ranged from high school diplomas to advanced degrees, and household income levels spanned from below median to upper-middle class. This diversity ensures our findings reflect the experiences of a broad cross-section of medication users.
          </p>
        </section>
      </article>

      {/* Footer */}
      <footer className="mt-auto pt-20 text-sm text-muted-foreground">
        {"\u00A9"} {new Date().getFullYear()} Pillsette
      </footer>
    </main>
  )
}
