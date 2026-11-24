import { flattenByChildren, isInternalHref } from "@/lib/utils";
import type { Metadata } from "next";

/**
 * For sitemap XML tags.
 */
export type NavItem = {
  href: string;
  label: string;
  children?: NavItem[];
};

const staticMainNav: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/about-us",
    label: "About Us",
    children: [
      { href: "/about-us/our-story", label: "Our Story" },
      { href: "/about-us/annual-report", label: "Annual Report" },
      { href: "/about-us/exco", label: "Executive Committee" },
      { href: "/about-us/partners", label: "Partners" },
    ],
  },
  { href: "/upcoming-event", label: "Upcoming Event" },
  { href: "/past-events", label: "Past Events" },
  {
    href: "/join-us",
    label: "Join Us",
    children: [],
  },
  {
    href: "/resources",
    label: "Resources",
  },
];

const staticSitemapOnlyNav: NavItem[] = [
  { href: "/our-work", label: "Our Work" },
  { href: "/blog", label: "Blog" },
];

export const siteConfig = {
  title: "HKGPR",
  description:
    "The Hong Kong Group for Peace Research (HKGPR) is an independent, non-partisan Global Research Initiative advancing interdisciplinary peace research, dialogue, and policy advice.",
  email: "hkgpr.general@gmail.com",
  instagram: "https://www.instagram.com/hkgpr.peace",
  github: "https://github.com/HKGPR-Org",
  linkedin: "https://www.linkedin.com/company/hkgpr/",
  seoImage: "/HKGPR.png",
  seoImageWidth: 1024,
  seoImageHeight: 1024,
  mainNav: staticMainNav,
  sitemapOnlyNav: staticSitemapOnlyNav,
  staticRoutes: flattenByChildren(staticMainNav)
    .filter((item) => isInternalHref(item.href))
    .map((item) => (item.href === "/" ? "" : item.href)),
  siteUrl: process.env.SITE_URL?.replace(/\/$/, ""),
};

export function getNavLabel(path: string): string | undefined {
  // normalize trailing slash
  const normalized = path === "/" ? "/" : path.replace(/\/$/, "");
  return flattenByChildren(siteConfig.mainNav).find((i) => i.href === normalized)?.label;
}

/**
 * Consolidate SEO metadata building logic here.
 */
export function buildPageMetadata(
  path: string,
  options?: { description?: string; title?: string }
): Metadata {
  const inferredLabel = getNavLabel(path) || siteConfig.title;
  const label = options?.title || inferredLabel;

  const description = options?.description ?? siteConfig.description;

  return {
    title: label,
    description,
    alternates: {
      canonical: path === "/" ? "/" : path.replace(/\/$/, ""), // Google Search Console; prevents {www.}hkgpr.page subdomain issues
    },
    openGraph: {
      title: label,
      description,
      images: [
        {
          url: siteConfig.seoImage,
          width: siteConfig.seoImageWidth,
          height: siteConfig.seoImageHeight,
          alt: label,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: label,
      description,
      images: [siteConfig.seoImage],
    },
  } satisfies Metadata;
}
