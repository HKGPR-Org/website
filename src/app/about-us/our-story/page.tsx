import { PageHeader } from "@/components/primitives/page-header";
import { Hero } from "@/components/sections/hero";
import { buildPageMetadata } from "@/lib/config";
import { Metadata } from "next";

const description =
  "The international order is failing when needed most. HKGPR confronts institutional shortcomings and advises policymakers on resolving persistent deadlocks.";
export const metadata: Metadata = buildPageMetadata("/about-us/our-story", { description });

export default function OurStory() {
  return (
    <Hero
      slides={[
        {
          imageSrc: "/about-us/our-story/white-doves.jpg",
          content: (
            <PageHeader
              title="Why Our Work Matters"
              descriptionClassName="text-left text-white pl-4 pr-4"
              description={
                <>
                  The international order is failing when needed most. Repeated United Nations
                  deadlocks, treaty enforcement deficits, and political polarisation undermine
                  conflict prevention and leave state accountability unfulfilled. HKGPR confronts
                  these institutional shortcomings and advises policymakers on{" "}
                  <em>resolving persistent deadlocks</em>.
                  <br />
                  <br />
                  <em>Anchoring HKGPR in Hong Kong</em> offers a distinct geographical advantage. As
                  an open, globally connected hub with minimal local political tension, Hong Kong
                  provides a stable, neutral convening ground linking Asia, Europe, and the wider
                  world—enabling candid, cross-regional dialogue that is increasingly difficult to
                  sustain in more polarised jurisdictions.
                </>
              }
            />
          ),
        },
        {
          imageSrc: "/about-us/our-story/IMG_5301.webp",
          content: (
            <PageHeader
              as="h2"
              title="Our Mission"
              descriptionClassName="text-left text-white pl-4 pr-4"
              description={
                <>
                  Examine the root causes of instability—international governance, contemporary
                  tensions, historical roots, and conflict prevention—and attain{" "}
                  <u>UN ECOSOC Special Consultative Status</u> within 10–15 years.
                </>
              }
            />
          ),
        },
      ]}
      heightClassName="h-[calc(100vh-var(--header-height))]"
    />
  );
}
