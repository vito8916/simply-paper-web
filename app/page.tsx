import { DownloadCta } from "@/components/home/download-cta"
import { Faq } from "@/components/home/faq"
import { Features } from "@/components/home/features"
import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { Taste } from "@/components/home/taste"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Taste />
        <Faq />
        <DownloadCta />
      </main>
      <SiteFooter />
    </>
  )
}
