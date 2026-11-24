import type { Metadata } from "next"
import { Gabarito, Geist_Mono, Hanken_Grotesk } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { pageMetadata } from "@/lib/metadata"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next"


// Gabarito: chunky, geometric, cut-out letterforms for headings. Hanken Grotesk: quiet body text.
const heading = Gabarito({ subsets: ["latin"], variable: "--font-heading" })

const sans = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  ...pageMetadata({ title: `${site.name}: ${site.tagline}`, description: site.description, path: "/" }),
  title: { default: `${site.name}: ${site.tagline}`, template: `%s · ${site.name}` },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", sans.variable, heading.variable)}
    >
      <body>
        <ThemeProvider forcedTheme="light">{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
