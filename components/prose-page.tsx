import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export function ProsePage({
  title,
  updated,
  children,
}: {
  title: string
  updated?: string
  children: React.ReactNode
}) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-heading text-4xl font-extrabold tracking-tight">{title}</h1>
        {updated && <p className="mt-2 text-sm text-muted-foreground">Last updated {updated}</p>}
        <div className="mt-10 flex flex-col gap-8 leading-relaxed text-muted-foreground [&_a]:text-primary [&_a]:underline [&_h2]:mb-2 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-foreground">
          {children}
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
