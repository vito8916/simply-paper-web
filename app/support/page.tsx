import type { Metadata } from "next"

import { ProsePage } from "@/components/prose-page"
import { pageMetadata } from "@/lib/metadata"
import { site } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "Support",
  description: "Help and contact information for SimplyPaper.",
  path: "/support",
})

export default function SupportPage() {
  return (
    <ProsePage title="Support">
      <section>
        <h2>Contact us</h2>
        <p>
          Email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> and we&apos;ll get back to you as
          soon as we can. Including your iOS version and a short description of the problem helps a lot.
        </p>
      </section>
      <section>
        <h2>How do I set a wallpaper?</h2>
        <p>iOS doesn&apos;t allow apps to change your wallpaper directly, so it takes a few quick taps:</p>
        <ol className="mt-3 flex flex-col gap-1.5 [&_li]:list-decimal">
          <li>Open a wallpaper in {site.name} and tap the download button to save it to Photos.</li>
          <li>
            Open <strong>Settings → Wallpaper → Add New Wallpaper</strong>.
          </li>
          <li>Choose <strong>Photos</strong>, pick the image, then tap <strong>Add</strong>.</li>
        </ol>
      </section>
      <section>
        <h2>Saving doesn&apos;t work</h2>
        <p>
          Make sure {site.name} is allowed to add to Photos: open <strong>Settings → {site.name} → Photos</strong> and
          choose <strong>Add Photos Only</strong> or <strong>Full Access</strong>.
        </p>
      </section>
      <section>
        <h2>Wallpapers don&apos;t load</h2>
        <p>Check your internet connection, then pull down on the screen to refresh or tap Retry.</p>
      </section>
      <section>
        <h2>A wallpaper I own shouldn&apos;t be here</h2>
        <p>
          If you are the rights holder of an image and want it removed, email us with a link to it and we&apos;ll look
          into it promptly.
        </p>
      </section>
    </ProsePage>
  )
}
