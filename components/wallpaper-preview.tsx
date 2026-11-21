"use client"

import Image from "next/image"
import { createContext, use, useState, useSyncExternalStore } from "react"

import type { Wallpaper } from "@/lib/wallpapers"
import { cn } from "@/lib/utils"

/**
 * "Try a wallpaper on": pick one and see it on a lock screen.
 *
 *   <WallpaperPreviewProvider wallpapers={…}>
 *     <Phone><WallpaperLockScreen /></Phone>
 *     <WallpaperOption id="bus" />
 *   </WallpaperPreviewProvider>
 *
 * The provider is the only piece that knows how the selection is stored.
 */
type WallpaperPreviewContextValue = {
  state: { selectedId: string }
  actions: { select: (id: string) => void }
  meta: { wallpapers: Wallpaper[] }
}

const WallpaperPreviewContext =
  createContext<WallpaperPreviewContextValue | null>(null)

function useWallpaperPreview() {
  const context = use(WallpaperPreviewContext)
  if (!context)
    throw new Error(
      "Wallpaper preview parts must be rendered inside <WallpaperPreviewProvider>"
    )
  return context
}

export function WallpaperPreviewProvider({
  wallpapers,
  children,
}: {
  wallpapers: Wallpaper[]
  children: React.ReactNode
}) {
  const [selectedId, select] = useState(wallpapers[0].id)

  return (
    <WallpaperPreviewContext
      value={{
        state: { selectedId },
        actions: { select },
        meta: { wallpapers },
      }}
    >
      {children}
    </WallpaperPreviewContext>
  )
}

/** A wallpaper you can pick. Size and position it with className. */
export function WallpaperOption({
  id,
  sizes = "220px",
  className,
}: {
  id: string
  sizes?: string
  className?: string
}) {
  const { state, actions, meta } = useWallpaperPreview()
  const wallpaper = meta.wallpapers.find((w) => w.id === id)
  if (!wallpaper) return null
  const selected = state.selectedId === id

  return (
    <button
      type="button"
      aria-pressed={selected}
      aria-label={`Try the "${wallpaper.name}" wallpaper`}
      onClick={() => actions.select(id)}
      className={cn(
        "overflow-hidden bg-ink shadow-[0_18px_36px_-10px_rgb(20_38_59/0.4)] transition-[translate,box-shadow] duration-200 hover:-translate-y-1.5",
        selected &&
          "-translate-y-1.5 shadow-[0_0_0_4px_var(--sun),0_18px_36px_-10px_rgb(20_38_59/0.4)]",
        className
      )}
    >
      <Image
        src={wallpaper.src}
        alt=""
        fill
        sizes={sizes}
        className="object-cover"
      />
    </button>
  )
}

/** The picked wallpaper as a lock screen. Fills its parent, so put it inside a <Phone>. */
export function WallpaperLockScreen() {
  const { state, meta } = useWallpaperPreview()
  const selected = meta.wallpapers.find((w) => w.id === state.selectedId)

  return (
    <div
      role="img"
      aria-label={`Lock screen with the "${selected?.name}" wallpaper`}
      className="absolute inset-0"
    >
      {meta.wallpapers.map((w, i) => (
        <Image
          key={w.id}
          src={w.src}
          alt=""
          fill
          sizes="300px"
          loading={i === 0 ? "eager" : "lazy"}
          fetchPriority={i === 0 ? "high" : "auto"}
          className={cn(
            "object-cover transition-opacity duration-500",
            w.id === state.selectedId ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
      <LockScreenClock />
      <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-white/80" />
    </div>
  )
}

const subscribeToMinutes = (onChange: () => void) => {
  const timer = setInterval(onChange, 10_000)
  return () => clearInterval(timer)
}
const currentMinute = () => Math.floor(Date.now() / 60_000)
const noMinuteOnServer = () => null

/** Shows the visitor's own time. Renders 9:41 on the server so hydration matches. */
function LockScreenClock() {
  const minute = useSyncExternalStore(
    subscribeToMinutes,
    currentMinute,
    noMinuteOnServer
  )
  const now = minute === null ? null : new Date(minute * 60_000)

  const date =
    now?.toLocaleDateString(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
    }) ?? " "
  // Keep only the digits and their separator, so "5:12 PM" and "午後5:12" both read "5:12".
  const time =
    now === null
      ? "9:41"
      : new Intl.DateTimeFormat(undefined, {
          hour: "numeric",
          minute: "2-digit",
        })
          .formatToParts(now)
          .filter(
            (part, i, parts) =>
              part.type === "hour" ||
              part.type === "minute" ||
              (part.type === "literal" &&
                parts[i - 1]?.type === "hour" &&
                parts[i + 1]?.type === "minute")
          )
          .map((part) => part.value)
          .join("")

  return (
    <div className="absolute inset-x-0 top-[11%] flex flex-col items-center text-white [text-shadow:0_1px_10px_rgb(0_0_0/0.3)]">
      <span className="text-[0.8rem] font-semibold">{date}</span>
      <span className="font-heading text-[4.25rem] leading-none font-bold tabular-nums">
        {time}
      </span>
    </div>
  )
}
