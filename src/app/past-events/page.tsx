import { PageHeader } from "@/components/primitives/page-header";
import { buildPageMetadata } from "@/lib/config";
import { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata("/past-events", {
  description: "",
});

export default function PastEvents() {
  return (
    <section className="mx-auto max-w-5xl">
      <PageHeader
        title="Past Events"
        titleClassName="mb-6"
      />
    </section>
  );
}
