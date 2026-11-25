import Image from "next/image"

import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

// Official badges: Apple "Download on the App Store" (black, US) and Google Play "Get it on Google Play".
// The Google Play PNG is 646x250 with 41px of transparent clear space on every side of a 564x168 badge.
// At 79px tall that clear space is 13px, so a -13px margin leaves exactly the 53px badge in the layout,
// the same height as Apple's, and its edges line up with whatever sits next to it.
function AppStoreBadge() {
  return (
    <a href={site.appStoreUrl} target="_blank" rel="noopener noreferrer" className="block">
      <Image
        src="/badges/app-store.svg"
        alt="Download on the App Store"
        width={160}
        height={53}
        unoptimized
        className="h-[53px] w-auto"
      />
    </a>
  )
}

function PlayStoreBadge() {
  return (
    <a href={site.playStoreUrl} target="_blank" rel="noopener noreferrer" className="block self-start">
      <Image
        src="/badges/google-play.png"
        alt="Get it on Google Play"
        width={646}
        height={250}
        unoptimized
        className="-m-[13px] h-[79px] w-auto max-w-none"
      />
    </a>
  )
}

export function StoreButtons({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-start gap-3", className)}>
      <AppStoreBadge />
      <PlayStoreBadge />
    </div>
  )
}
