import Image from "next/image"

import { cn } from "@/lib/utils"

/**
 * Phone frame. Compose what goes inside it:
 *
 *   <Phone>
 *     <PhoneScreenshot src="/screens/home.jpg" alt="…" />
 *     <PhoneIsland />
 *   </Phone>
 */
export function Phone({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19.5] w-[230px] shrink-0 overflow-hidden rounded-[2.4rem] border-[7px] border-ink bg-ink shadow-[0_24px_48px_-12px_rgb(20_38_59/0.45)] sm:w-[260px]",
        className
      )}
    >
      {children}
    </div>
  )
}

export function PhoneScreenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <Image src={src} alt={alt} fill sizes="300px" className="object-cover" />
  )
}

/** Dynamic island. Leave it out when the screenshot already includes one. */
export function PhoneIsland() {
  return (
    <div
      aria-hidden="true"
      className="absolute top-2 left-1/2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-black"
    />
  )
}
