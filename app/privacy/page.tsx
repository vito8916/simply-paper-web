import type { Metadata } from "next"

import { ProsePage } from "@/components/prose-page"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SimplyPaper does not collect, store or share any personal data.",
}

export default function PrivacyPage() {
  return (
    <ProsePage title="Privacy Policy" updated={site.lastUpdated}>
      <section>
        <p>
          <strong>Short version:</strong> {site.name} doesn&apos;t collect, store or share any personal data. There
          are no accounts, no ads, no analytics and no tracking.
        </p>
      </section>
      <section>
        <h2>What the app stores on your device</h2>
        <p>
          Your favorites, your list of saved wallpapers and your settings (such as theme and grid size) are stored
          locally on your device. They are never sent to us or to anyone else, and they are removed when you delete
          the app.
        </p>
      </section>
      <section>
        <h2>Photos</h2>
        <p>
          When you tap Save, the app asks for <strong>add-only</strong> access to your Photos library so it can add the
          wallpaper you chose. {site.name} cannot read, browse or access the photos already in your library.
        </p>
      </section>
      <section>
        <h2>Network requests</h2>
        <p>
          Wallpapers are loaded from Flickr. As with any internet request, Flickr can see your IP address and device
          information when images are downloaded, and handles that data under its own privacy policy. {site.name}{" "}
          does not receive or process this information.
        </p>
      </section>
      <section>
        <h2>Children</h2>
        <p>The app collects no personal information from anyone, including children.</p>
      </section>
      <section>
        <h2>Changes to this policy</h2>
        <p>If this policy changes, the updated version will be posted on this page with a new date.</p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Questions? Email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
        </p>
      </section>
    </ProsePage>
  )
}
