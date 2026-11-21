import Image from "next/image"

import { Phone, PhoneIsland, PhoneScreenshot } from "@/components/phone"
import { cn } from "@/lib/utils"

export function BrowsePhone({ className }: { className?: string }) {
  return (
    <Phone className={className}>
      <PhoneScreenshot
        src="/screens/home.jpg"
        alt="SimplyPaper home screen with a grid of wallpapers"
      />
      <PhoneIsland />
    </Phone>
  )
}

export function CollectionsPhone({ className }: { className?: string }) {
  return (
    <Phone className={className}>
      <PhoneScreenshot
        src="/screens/collections.jpg"
        alt="SimplyPaper collections screen"
      />
      <PhoneIsland />
    </Phone>
  )
}

export function FavoritesPhone({ className }: { className?: string }) {
  return (
    <Phone className={className}>
      <PhoneScreenshot
        src="/screens/favorites.jpg"
        alt="SimplyPaper favorites screen"
      />
      <PhoneIsland />
    </Phone>
  )
}

export function ViewerPhone({ className }: { className?: string }) {
  return (
    <Phone className={className}>
      <PhoneScreenshot
        src="/screens/viewer.jpg"
        alt="A wallpaper shown full screen with share, favorite and save controls"
      />
      <PhoneIsland />
    </Phone>
  )
}

/** The Android home screen. The picture already includes its own device frame, so it isn't wrapped in <Phone>. */
export function AndroidHomePhone({ className }: { className?: string }) {
  return (
    <Image
      src="/android/android-home-framed-600.png"
      alt="SimplyPaper home screen on an Android phone"
      width={600}
      height={1263}
      sizes="260px"
      className={cn(
        "h-auto w-[230px] shrink-0 drop-shadow-[0_24px_24px_rgb(20_38_59/0.35)] sm:w-[260px]",
        className
      )}
    />
  )
}
