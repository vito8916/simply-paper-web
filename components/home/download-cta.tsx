import { PaperSun } from "@/components/paper"
import { AndroidHomePhone, BrowsePhone } from "@/components/phone-mockups"
import { StoreButtons } from "@/components/store-buttons"

export function DownloadCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="relative grid items-center overflow-hidden rounded-[2rem] bg-sky md:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col items-start gap-6 px-8 py-14 sm:px-14">
          <h2 className="font-heading text-4xl leading-[1.05] tracking-tight sm:text-6xl">
            <span className="block font-normal">Your next wallpaper</span>
            <span className="block font-black">is waiting.</span>
          </h2>
          <p className="max-w-sm text-lg text-foreground/85">
            Download SimplyPaper and give your screen a fresh look. Free, with
            no ads.
          </p>
          <StoreButtons />
        </div>
        <div className="relative hidden h-[460px] md:block">
          <PaperSun className="absolute top-8 left-1/2 size-56 -translate-x-1/2 animate-sun" />
          <BrowsePhone className="absolute top-16 left-[4%] w-[200px] -rotate-6 sm:w-[200px]" />
          <AndroidHomePhone className="absolute top-28 right-[6%] w-[200px] rotate-6 sm:w-[200px]" />
        </div>
      </div>
    </section>
  )
}
