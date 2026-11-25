// Adds campaign tracking to a store link, keeping any query params it already has.
function withUtm(url: string) {
  const u = new URL(url)
  u.searchParams.set("utm_source", "simplypaper_web")
  u.searchParams.set("utm_medium", "website")
  u.searchParams.set("utm_campaign", "store_badge")
  return u.toString()
}

export const site = {
  name: "SimplyPaper",
  // The public address of the site. Share links and canonical URLs are built from it at build time.
  // Set NEXT_PUBLIC_SITE_URL to override it, for example for a preview deployment.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://simplypaper.victoralvarado.dev",
  tagline: "Simple images, perfect screens",
  description:
    "A clean, ad-free wallpaper collection for iPhone and Android. Browse curated collections, save your favorites, and make your screen yours.",
  appStoreUrl: withUtm("https://apps.apple.com/app/simplypaper/id6837625610"),
  playStoreUrl: withUtm("https://play.google.com/store/apps/details?id=com.dev.victor.spaper"),
  supportEmail: "simplypaper@victoralvarado.dev",
  lastUpdated: "November 21, 2026",
}
