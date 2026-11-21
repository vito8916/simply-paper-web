import { Moon, ShieldCheck, Smartphone } from "lucide-react"

import {
  BrowsePhone,
  CollectionsPhone,
  FavoritesPhone,
  ViewerPhone,
} from "@/components/phone-mockups"
import { SectionTitle, TitleLead, TitleMain } from "@/components/section-title"
import { cn } from "@/lib/utils"

/** One feature: a <FeatureStage> and a <FeatureCopy>, in the order they should appear on wide screens. */
function Feature({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid overflow-hidden rounded-3xl bg-cardstock md:grid-cols-2">
      {children}
    </div>
  )
}

/** Flat sheet of colour with a paper disc rising behind the phone. Colours come from className. */
function FeatureStage({
  className,
  disc,
  children,
}: {
  className?: string
  disc: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "relative flex min-h-[380px] items-end justify-center overflow-hidden pt-10 max-md:order-first",
        className
      )}
    >
      <div
        aria-hidden="true"
        className={cn("absolute -bottom-24 size-[360px] rounded-full", disc)}
      />
      <div className="relative translate-y-10">{children}</div>
    </div>
  )
}

function FeatureCopy({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col justify-center gap-3 p-8 sm:p-12">
      <h3 className="font-heading text-3xl leading-tight font-bold tracking-tight">
        {title}
      </h3>
      <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
        {children}
      </p>
    </div>
  )
}

function Fact({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Moon
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon
        aria-hidden="true"
        className="mt-0.5 size-5 shrink-0 text-primary"
      />
      <div>
        <p className="font-heading text-lg font-bold">{title}</p>
        <p className="text-muted-foreground">{children}</p>
      </div>
    </div>
  )
}

export function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 pb-24"
    >
      <SectionTitle>
        <TitleLead>Everything you need,</TitleLead>
        <TitleMain>nothing you don&apos;t</TitleMain>
      </SectionTitle>

      <div className="mt-14 flex flex-col gap-6">
        <Feature>
          <FeatureStage className="bg-sky" disc="bg-sun">
            <BrowsePhone />
          </FeatureStage>
          <FeatureCopy title="Wallpapers, beautifully presented">
            A clean grid that loads fast and scrolls forever. Pull to refresh,
            tap to go full screen, pinch to zoom in on the details.
          </FeatureCopy>
        </Feature>
        <Feature>
          <FeatureCopy title="Collections that make browsing easy">
            Wallpapers are organized into collections, so you can jump straight
            to the style you&apos;re in the mood for.
          </FeatureCopy>
          <FeatureStage className="bg-leaf" disc="bg-sun">
            <CollectionsPhone />
          </FeatureStage>
        </Feature>
        <Feature>
          <FeatureStage className="bg-petal" disc="bg-white">
            <FavoritesPhone />
          </FeatureStage>
          <FeatureCopy title="Keep the ones you love">
            Tap the heart to add a wallpaper to Favorites. Everything stays on
            your device, no account needed.
          </FeatureCopy>
        </Feature>
        <Feature>
          <FeatureCopy title="Full screen, no distractions">
            The image fills the whole screen with Liquid Glass controls to
            share, favorite or save. Share sends the actual picture, not a link.
          </FeatureCopy>
          <FeatureStage className="bg-ink" disc="bg-sky">
            <ViewerPhone className="border-white/15" />
          </FeatureStage>
        </Feature>
      </div>

      <div className="mt-10 grid gap-8 px-2 sm:grid-cols-3">
        <Fact icon={ShieldCheck} title="Private by design">
          No account, no ads, no tracking.
        </Fact>
        <Fact icon={Moon} title="Light and dark">
          Follows your system appearance.
        </Fact>
        <Fact icon={Smartphone} title="iPhone and Android">
          Built for the phone in your pocket.
        </Fact>
      </div>
    </section>
  )
}
