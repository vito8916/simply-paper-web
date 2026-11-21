import { PaperMountains, PaperSun } from "@/components/paper"
import { Phone, PhoneIsland } from "@/components/phone"
import { StoreButtons } from "@/components/store-buttons"
import {
  WallpaperLockScreen,
  WallpaperOption,
  WallpaperPreviewProvider,
} from "@/components/wallpaper-preview"
import { heroWallpapers } from "@/lib/wallpapers"

const fanCard = "absolute hidden rounded-[1.75rem]"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-sky">
      <PaperSun className="absolute -top-12 -right-12 size-40 animate-sun md:size-48 xl:top-24 xl:right-auto xl:left-[6%] xl:size-56" />
      <PaperMountains className="absolute bottom-0 left-1/2 -translate-x-1/2" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-16 text-center md:pt-24">
        <h1 className="font-heading text-[clamp(2.5rem,12.5vw,6rem)] leading-[0.95] tracking-tight">
          <span className="block font-normal">Simply Images,</span>
          <span className="block font-black">perfect screens</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/85">
          A clean, ad-free wallpaper collection. Browse curated collections,
          save your favorites, and make your screen yours.
        </p>
        <StoreButtons className="mt-6 justify-center" />

        <WallpaperPreviewProvider wallpapers={heroWallpapers}>
          <p className="mt-12 text-sm font-semibold">
            Pick a wallpaper to try it on
          </p>

          {/* Phones: the choices sit in a row. */}
          <div className="mt-4 flex gap-3 lg:hidden">
            {heroWallpapers.map((w) => (
              <WallpaperOption
                key={w.id}
                id={w.id}
                sizes="64px"
                className="relative h-[100px] w-14 rounded-xl"
              />
            ))}
          </div>

          {/* Wider screens: the choices fan out behind the phone. */}
          <div className="relative mt-6 h-[590px] w-full sm:h-[680px]">
            <WallpaperOption
              id="cubes"
              className={`${fanCard} top-44 right-[calc(50%+330px)] h-[270px] w-[152px] [transform:perspective(900px)_rotateY(32deg)_rotateZ(-4deg)] lg:block`}
            />
            <WallpaperOption
              id="bus"
              className={`${fanCard} top-24 right-[calc(50%+158px)] h-[350px] w-[197px] [transform:perspective(900px)_rotateY(22deg)_rotateZ(-3deg)] lg:block`}
            />
            <WallpaperOption
              id="cat"
              className={`${fanCard} top-24 left-[calc(50%+158px)] h-[350px] w-[197px] [transform:perspective(900px)_rotateY(-22deg)_rotateZ(3deg)] lg:block`}
            />
            <WallpaperOption
              id="plane"
              className={`${fanCard} top-44 left-[calc(50%+330px)] h-[270px] w-[152px] [transform:perspective(900px)_rotateY(-32deg)_rotateZ(4deg)] lg:block`}
            />
            <Phone className="absolute top-4 left-1/2 w-[250px] -translate-x-1/2 sm:w-[290px]">
              <WallpaperLockScreen />
              <PhoneIsland />
            </Phone>
          </div>
        </WallpaperPreviewProvider>
      </div>
    </section>
  )
}
