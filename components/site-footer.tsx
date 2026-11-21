import Image from "next/image"
import Link from "next/link"

import { StoreButtons } from "@/components/store-buttons"
import { site } from "@/lib/site"

const columns = [
  {
    title: "Product",
    links: [
      { href: "/#how-it-works", label: "How it works" },
      { href: "/#features", label: "Features" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/support", label: "Help & contact" },
      { href: "/privacy", label: "Privacy policy" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
        <div className="flex max-w-xs flex-col gap-3">
          <Link href="/" className="flex items-center gap-2.5 font-heading font-bold">
            <Image src="/app-icon.png" alt="" width={32} height={32} className="rounded-lg" />
            {site.name}
          </Link>
          <p className="text-sm leading-relaxed text-muted-foreground">{site.description}</p>
        </div>
        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-3 text-sm">
            <p className="font-heading font-bold">{col.title}</p>
            {col.links.map((l) => (
              <Link key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground">
                {l.label}
              </Link>
            ))}
          </div>
        ))}
        <div className="flex flex-col gap-3 text-sm">
          <p className="font-heading font-bold">Download</p>
          <StoreButtons className="flex-col items-start" />
        </div>
      </div>
      <div className="mx-auto max-w-6xl border-t border-border/60 px-6 py-6 text-xs leading-relaxed text-muted-foreground">
        <p className="max-w-3xl">
          Wallpapers are hosted on Flickr and remain the property of their respective creators. This product uses the
          Flickr API but is not endorsed or certified by SmugMug, Inc. Apple, iPhone and App Store are trademarks
          of Apple Inc. Google Play and the Google Play logo are trademarks of Google LLC.
        </p>
        <p className="mt-3">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
