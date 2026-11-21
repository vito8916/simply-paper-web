import type { Metadata } from "next"

import { site } from "@/lib/site"

/** The picture shown when a link to the site is shared. 1024x500, close to the 1.91:1 that link previews expect. */
const shareImage = {
  url: "/functions.png",
  width: 1024,
  height: 500,
  alt: "SimplyPaper on Android: the home grid of wallpapers and a wallpaper with Set wallpaper, Download and Share actions",
}

/**
 * Metadata for one page. Open Graph and Twitter fields are not merged field by field between a layout and a
 * page, so every page builds its full set here to keep the share image, site name and canonical URL.
 *
 * Pass the full `title` for the home page; other pages pass a short one and the layout's template adds the site name.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const shareTitle = path === "/" ? title : `${title} · ${site.name}`

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      url: path,
      title: shareTitle,
      description,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [shareImage],
    },
  }
}
