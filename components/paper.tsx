import { cn } from "@/lib/utils"

/** Cut-paper shapes taken from the app icon: the sun and the two rounded mountains. */

const SUN_POINTS = Array.from({ length: 32 }, (_, i) => {
  const radius = i % 2 === 0 ? 50 : 40.5
  const angle = (Math.PI * i) / 16
  return `${(50 + radius * Math.sin(angle)).toFixed(2)},${(50 - radius * Math.cos(angle)).toFixed(2)}`
}).join(" ")

export function PaperSun({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      className={cn("fill-sun", className)}
    >
      <polygon points={SUN_POINTS} />
    </svg>
  )
}

/**
 * A mountain range for the bottom edge of a section. The front peak is the page colour, so the page seems to rise
 * into the section. Drawn at a fixed size so the peaks keep their shape on any screen; centre it with className.
 */
export function PaperMountains({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 320"
      className={cn(
        "pointer-events-none h-[300px] w-[1350px] max-w-none overflow-visible",
        className
      )}
    >
      {/* The thick round-joined stroke is what rounds the peaks. */}
      <g strokeWidth="110" strokeLinejoin="round">
        <path
          d="M-260 520 L330 170 L920 520 Z"
          className="fill-cardstock stroke-cardstock"
        />
        <path
          d="M250 520 L900 110 L1800 520 Z"
          className="fill-background stroke-background"
        />
      </g>
    </svg>
  )
}
