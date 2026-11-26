import { SmartLink } from "@/components/primitives/smart-link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Partner } from "@/lib/data/partners";
import { cn } from "@/lib/utils";
import Image from "next/image";

type PartnerCardProps = {
  partner: Partner;
  className?: string;
};

export function PartnerCard({ partner, className }: PartnerCardProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="flex flex-col items-center justify-center gap-2 px-6 text-center">
        {partner.logo && (
          <div className={cn("relative mx-auto h-16 w-16", partner.logoClassName)}>
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              fill
              className="object-contain"
            />
          </div>
        )}
        <CardTitle>{partner.name}</CardTitle>
        <CardDescription>
          <SmartLink
            href={partner.href}
            className="break-all hover:underline"
          >
            {partner.href}
          </SmartLink>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
