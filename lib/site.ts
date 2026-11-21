export const site = {
  name: "SimplyPaper",
  // The public address of the site. Share links and canonical URLs are built from it at build time.
  // Set NEXT_PUBLIC_SITE_URL to override it, for example for a preview deployment.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://simplypaper.victoralvarado.dev",
  tagline: "Simple images, perfect screens",
  description:
    "A clean, ad-free wallpaper collection for iPhone and Android. Browse curated collections, save your favorites, and make your screen yours.",
  // Fill these in once they exist.
  appStoreUrl: "" as string,
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.dev.victor.spaper",
  supportEmail: "simplypaper@victoralvarado.dev",
  lastUpdated: "November 21, 2026",
}
