import { SectionTitle, TitleLead, TitleMain } from "@/components/section-title"
import { cn } from "@/lib/utils"

function Step({
  number,
  className,
  children,
}: {
  number: number
  className?: string
  children: React.ReactNode
}) {
  return (
    <li className={cn("flex flex-col gap-10 rounded-3xl p-7", className)}>
      <span
        aria-hidden="true"
        className="font-heading text-7xl leading-none font-black"
      >
        {number}
      </span>
      <div>{children}</div>
    </li>
  )
}

function StepTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="font-heading text-2xl font-bold">{children}</h3>
}

function StepText({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 leading-relaxed text-foreground">{children}</p>
}

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24"
    >
      <SectionTitle>
        <TitleLead>From browsing to</TitleLead>
        <TitleMain>your Home Screen</TitleMain>
      </SectionTitle>
      <ol className="mt-14 grid gap-5 md:grid-cols-3">
        <Step number={1} className="bg-petal">
          <StepTitle>Find one you love</StepTitle>
          <StepText>
            Browse the latest wallpapers or open a collection, then tap any one
            to see it full screen.
          </StepText>
        </Step>
        <Step number={2} className="bg-sun">
          <StepTitle>Save it</StepTitle>
          <StepText>
            One tap adds the wallpaper to your Photos in full quality. Add-only
            access, never your whole library.
          </StepText>
        </Step>
        <Step number={3} className="bg-sky">
          <StepTitle>Make it yours</StepTitle>
          <StepText>
            On iPhone, open Settings → Wallpaper → Add New Wallpaper and pick
            your image. On Android, set it from the app.
          </StepText>
        </Step>
      </ol>
    </section>
  )
}
