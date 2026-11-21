import { Heart, LayoutGrid, Share } from "lucide-react"
import Image from "next/image"

import { SectionTitle, TitleLead, TitleMain } from "@/components/section-title"
import { cn } from "@/lib/utils"

/** A wallpaper sheet with a paper label. All cards share one shape so the row lines up. */
function TasteCard({
  src,
  alt,
  className,
  children,
}: {
  src: string
  alt: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "relative flex aspect-[4/5] items-start overflow-hidden rounded-3xl p-4",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 640px) 33vw, 100vw"
        className="object-cover object-bottom"
      />
      {children}
    </div>
  )
}

function TasteLabel({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Heart
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="relative flex w-full items-center gap-3 rounded-2xl bg-white p-4 text-ink">
      <Icon aria-hidden="true" className="size-5 shrink-0" />
      <div>
        <p className="font-heading text-lg leading-tight font-bold">{title}</p>
        <p className="text-sm text-muted-foreground">{children}</p>
      </div>
    </div>
  )
}

// The collections shown in the app today.
const collections = [
  "Holidays",
  "Animals",
  "Flags",
  "Floral",
  "Gradients",
  "Landscape",
]

export function Taste() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <SectionTitle>
        <TitleLead>Built for</TitleLead>
        <TitleMain>every taste</TitleMain>
      </SectionTitle>
      <ul
        aria-label="Collections"
        className="mt-8 flex flex-wrap justify-center gap-2"
      >
        {collections.map((name) => (
          <li
            key={name}
            className="rounded-full bg-cardstock px-4 py-1.5 font-medium"
          >
            {name}
          </li>
        ))}
      </ul>
      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        <TasteCard src="/taste/floral.jpg" alt="Pink flowers wallpaper">
          <TasteLabel icon={LayoutGrid} title="Collections">
            Curated sets for every taste.
          </TasteLabel>
        </TasteCard>
        <TasteCard src="/taste/deer.jpg" alt="Low-poly deer wallpaper">
          <TasteLabel icon={Heart} title="Favorites">
            Your personal shortlist.
          </TasteLabel>
        </TasteCard>
        <TasteCard
          src="/taste/portrait.jpg"
          alt="Red watercolor portrait wallpaper"
        >
          <TasteLabel icon={Share} title="Share">
            Send the image itself in a tap.
          </TasteLabel>
        </TasteCard>
      </div>
    </section>
  )
}
