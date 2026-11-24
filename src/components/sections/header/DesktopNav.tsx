"use client";

import { SmartLink } from "@/components/primitives/smart-link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import type { NavItem } from "@/lib/config";
import Image from "next/image";
import { useRouter } from "next/navigation";

function DesktopMenuItem({ link, onTriggerClick }: { link: NavItem; onTriggerClick: () => void }) {
  const hasChildren = !!link.children?.length;
  if (!hasChildren) {
    return (
      <NavigationMenuLink asChild>
        <SmartLink href={link.href}>{link.label}</SmartLink>
      </NavigationMenuLink>
    );
  }
  // Pop up submenu on hover, which shows subpages
  return (
    <>
      <NavigationMenuTrigger
        className="bg-transparent p-2 font-normal" // shadcn trigger overrides defaults to font-medium, inconsistent with page wide default font-normal
        onClick={onTriggerClick}
      >
        {link.label}
      </NavigationMenuTrigger>
      <NavigationMenuContent
        className="border-none! shadow shadow-muted-foreground dark:shadow-popover"
        /**
         * In dark mode, light shadow looks weird with great contrast from background
         * since shadcn uses popover for background, which global.css defined differently as background,
         * we could use that.
         */
      >
        <div className="w-max">
          {link.children!.map((child) => (
            <NavigationMenuLink
              key={child.href}
              asChild
            >
              <SmartLink href={child.href}>{child.label}</SmartLink>
            </NavigationMenuLink>
          ))}
        </div>
      </NavigationMenuContent>
    </>
  );
}

export function DesktopNav({ mainNav }: { mainNav: NavItem[] }) {
  const router = useRouter();

  return (
    <div className="flex items-center gap-6">
      <SmartLink
        href="/"
        aria-label="Return to homepage"
        className="relative z-10 inline-flex shrink-0 cursor-pointer items-center"
      >
        <Image
          src="/hkgpr-banner.svg"
          alt="HKGPR Logo"
          width={162}
          height={44}
          priority
          fetchPriority="high"
          className="pointer-events-none block h-11 w-[162px] max-w-none shrink-0 select-none"
        />
      </SmartLink>
      <nav className="hidden lg:flex">
        <NavigationMenu viewport={false}>
          <NavigationMenuList className="gap-0">
            {mainNav.map((link) => (
              <NavigationMenuItem key={link.href}>
                <DesktopMenuItem
                  link={link}
                  onTriggerClick={() => router.push(link.href)}
                />
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
  );
}
