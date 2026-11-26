import { PageHeader } from "@/components/primitives/page-header";
import { PartnerCard } from "@/components/primitives/partner-card";
import { buildPageMetadata } from "@/lib/config";
import { partners } from "@/lib/data/partners";
import { Metadata } from "next";

const description =
  "We are collaborating with the following organizations to share the message of peace and humanity.";
export const metadata: Metadata = buildPageMetadata("/about-us/partners", { description });

export default function Partners() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center">
      <PageHeader
        title="Supporting Organizations"
        descriptionClassName="max-w-2xl"
        description={description}
      />
      <div className="mt-6 grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        {partners.map((partner) => (
          <PartnerCard
            key={partner.name}
            partner={partner}
          />
        ))}
      </div>
    </section>
  );
}
