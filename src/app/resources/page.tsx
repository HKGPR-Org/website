import { PageHeader } from "@/components/primitives/page-header";
import { ResourceIframe } from "@/components/sections/resource-iframe";
import { buildPageMetadata } from "@/lib/config";
import { resources } from "@/lib/data/resources";
import { Metadata } from "next";

const description =
  "Below is a curated collection of digital research projects examining historical conflicts, post-atrocity memory, and overlooked perspectives—including World War II in Asia.";
export const metadata: Metadata = buildPageMetadata("/resources", { description });

export default function Resources() {
  return (
    <section>
      <PageHeader
        title="Resources"
        descriptionClassName="text-left"
        description={
          <>
            {description}
            <br />
            <br />
            The Hong Kong Group for Peace Research (<strong>HKGPR</strong>) extends its sincere
            gratitude to the authors for their generosity in sharing their work, and invites readers
            to explore these projects for deeper insight into the human dimensions of war, memory,
            and peace.
          </>
        }
        className="mb-8"
      />
      <div className="space-y-8">
        {resources.map((r) => (
          <ResourceIframe
            key={r.slug}
            title={r.title}
            websiteUrl={r.websiteUrl}
            hideTopPx={r.hideTopPx}
            fullPageHref={`/resources/${r.slug}`}
            authorLine={r.authorLine}
          />
        ))}
      </div>
    </section>
  );
}
