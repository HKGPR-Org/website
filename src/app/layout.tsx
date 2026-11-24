import { siteConfig } from "@/lib/config";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/primitives/theme-provider";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { getMainNav } from "@/lib/config.server";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const siteUrl = process.env.SITE_URL;

const title = "Hong Kong Group for Peace Research";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl!),
  title: {
    default: title,
    template: `%s - ${title}`,
  },
  description: siteConfig.description,
  manifest: "/favicon/hkgpr.webmanifest",
  openGraph: {
    title: title,
    description: siteConfig.description,
    url: siteUrl!,
    siteName: title,
    images: [
      {
        url: siteConfig.seoImage,
        width: siteConfig.seoImageWidth,
        height: siteConfig.seoImageHeight,
        alt: title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: siteConfig.description,
    images: [siteConfig.seoImage],
  },
  verification: {
    google: "SOIrNtvGMEz4-4bwN50Cf6wTEIn0iFZOphvov11aGS4",
  },
  icons: {
    icon: [
      { url: "/favicon/hkgpr-icon.svg", type: "image/svg+xml" },
      { url: "/favicon/hkgpr-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/hkgpr-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/hkgpr-favicon.ico", sizes: "any" },
    ],
    shortcut: ["/favicon/hkgpr-favicon.ico"],
    apple: [
      {
        url: "/favicon/hkgpr-apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: title,
  url: siteUrl,
  logo: `${siteUrl}${siteConfig.seoImage}`,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "general inquiries",
    email: siteConfig.email,
  },
  sameAs: [siteConfig.instagram, siteConfig.linkedin],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mainNav = await getMainNav();

  return (
    <html
      lang="en"
      className={GeistSans.className}
      suppressHydrationWarning
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Header mainNav={mainNav} />
          <main className="min-h-[calc(100vh-var(--header-height))] flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
