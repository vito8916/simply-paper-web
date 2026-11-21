import { Plus } from "lucide-react"

import { SectionTitle, TitleLead, TitleMain } from "@/components/section-title"

function Question({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <details className="group py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-xl font-semibold [&::-webkit-details-marker]:hidden">
        {title}
        <Plus
          aria-hidden="true"
          className="size-5 shrink-0 transition-transform group-open:rotate-45"
        />
      </summary>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
        {children}
      </p>
    </details>
  )
}

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-6 pb-24">
      <SectionTitle>
        <TitleLead>Questions,</TitleLead>
        <TitleMain>answered</TitleMain>
      </SectionTitle>
      <div className="mt-10 divide-y divide-border border-y border-border">
        <Question title="Can SimplyPaper set my wallpaper automatically?">
          On Android, yes. On iPhone, iOS doesn&apos;t let apps change your
          wallpaper, so SimplyPaper saves the image to Photos and shows you the
          quick steps to apply it from Settings.
        </Question>
        <Question title="Is SimplyPaper free?">
          Yes. There are no ads and no accounts to create.
        </Question>
        <Question title="What data do you collect?">
          On iOS, none. Favorites and your download list stay on your device.
          See the privacy policy for details.
        </Question>
        <Question title="Where do the wallpapers come from?">
          They&apos;re hosted on Flickr and remain the property of their
          respective creators.
        </Question>
        <Question title="Which devices are supported?">
          iPhone running iOS 17 or later, and Android devices through Google
          Play.
        </Question>
      </div>
    </section>
  )
}
