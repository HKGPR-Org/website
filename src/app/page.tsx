import { AnimatedFillButton } from "@/components/primitives/animated-fill-button";
import { PageHeader } from "@/components/primitives/page-header";
import { FeaturedProgram } from "@/components/sections/featured-program";
import { Hero } from "@/components/sections/hero";
import { WhatsHappening } from "@/components/sections/whats-happening";
import { buildPageMetadata } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata("/", {
  title: "Hong Kong Group for Peace Research",
});

export default function Home() {
  return (
    <>
      <Hero
        slides={[
          {
            imageSrc: "/home/Pond Lilies by the Law Faculty.webp",
            content: <i>Next generation voices for peace.</i>,
          },
          {
            imageSrc: "/home/Main Building 4.webp",
            content: (
              <>
                The first and only global student initiative
                <br />
                based in Hong Kong
                <br />
                for constructive peace and humanity.
              </>
            ),
          },
        ]}
        heightClassName="h-[30rem]"
      />
      <FeaturedProgram
        heading={'Restage of "Rape of Nanking"'}
        description="Join us on Saturday, December 13, 2025, for a commemoration of the 1937 Nanjing Massacre. This event marks the 80th anniversary of Japan's surrender in World War II and the victory in the War of Resistance."
        mediaSrc="/event/2025-12-13/poster.en.webp"
        mediaAlt="Restage of 'Rape of Nanking' event poster"
        isVideo={false}
        ctaHref="/upcoming-event/restage-of-rape-of-nanking"
        ctaLabel="More Details"
      />
      <section className="mx-auto text-center">
        <PageHeader
          as="h2"
          title="Who We Are"
          size="sm"
          childrenClassName="mt-4"
        >
          <div className="mx-auto max-w-3xl text-base text-muted-foreground">
            <p>
              The Hong Kong Group for Peace Research (<strong>HKGPR</strong>) is an independent,
              non-partisan Global Research Initiative dedicated to:
            </p>
            <ul className="mx-auto mt-3 max-w-2xl list-disc space-y-1.5 pl-6 text-left">
              <li>
                Advancing interdisciplinary peace research on ongoing and historical conflicts
                through neutral inquiry and dialogue;
              </li>
              <li>
                Building an international publishing platform for professionals, scholars, and
                institutions strengthening multilateral order;
              </li>
              <li>
                In the long term, advising international and domestic policymakers on maintaining
                peace within their jurisdictions.
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <AnimatedFillButton
              href="/about-us/our-story"
              size="lg"
            >
              Explore Our Story
            </AnimatedFillButton>
          </div>
        </PageHeader>
      </section>
      <WhatsHappening
        events={[
          {
            title: "Hong Kong Peace Dialogue, Spring 2027",
            description: "26th of February 2027",
            image: "/globe.svg",
            href: "/upcoming-event",
            ctaLabel: "More Details Coming Soon",
          },
        ]}
      />
    </>
  );
}
