import { cn } from "@/lib/utils"

/**
 * Two-line section heading: a quiet lead-in, then the line that carries the point.
 *
 *   <SectionTitle>
 *     <TitleLead>From browsing to</TitleLead>
 *     <TitleMain>your Home Screen</TitleMain>
 *   </SectionTitle>
 */
export function SectionTitle({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <h2
      className={cn(
        "text-center font-heading text-4xl leading-[1.05] tracking-tight text-balance sm:text-6xl",
        className
      )}
    >
      {children}
    </h2>
  )
}

export function TitleLead({ children }: { children: React.ReactNode }) {
  return (
    <span className="block font-normal text-foreground/55">{children}</span>
  )
}

export function TitleMain({ children }: { children: React.ReactNode }) {
  return <span className="block font-extrabold">{children}</span>
}
