import Image from "next/image"

const accelerators = [
  {
    name: "Catalyst Ventures",
    logo: "/images/accelerator-1.jpg",
  },
  {
    name: "MedLaunch",
    logo: "/images/accelerator-2.jpg",
  },
  {
    name: "FounderPath",
    logo: "/images/accelerator-3.jpg",
  },
]

export function Supporters() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col items-center gap-10">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Supported by
          </p>

          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {accelerators.map((acc) => (
              <div
                key={acc.name}
                className="flex items-center justify-center"
              >
                <Image
                  src={acc.logo}
                  alt={acc.name}
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 md:h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
