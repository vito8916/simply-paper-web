import Image from "next/image"
import Link from "next/link"

import { site } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 font-heading font-bold">
          <Image src="/app-icon.png" alt="" width={32} height={32} className="rounded-lg" />
          {site.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/#how-it-works" className="hidden hover:text-foreground sm:block">
            How it works
          </Link>
          <Link href="/#features" className="hidden hover:text-foreground sm:block">
            Features
          </Link>
          <Link href="/#faq" className="hidden hover:text-foreground sm:block">
            FAQ
          </Link>
          <Link href="/support" className="hover:text-foreground">
            Support
          </Link>
        </nav>
      </div>
    </header>
  )
}
