import type { Metadata, Viewport } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/data/content";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600", "700"] });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", weight: ["500", "600"] });

export const viewport: Viewport = {
  themeColor: "#060911",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "performance marketer Bangalore",
    "Altaf digital marketing",
    "Google Ads expert Bangalore",
    "Meta Ads specialist India",
    "eCommerce ROAS consultant",
    "creative strategist Bangalore",
    "video ad editor performance marketing",
    "D2C growth marketing consultant",
    "PMax Google Ads agency Bangalore",
    "Advantage Plus Meta Ads",
  ],
  authors: [{ name: "Altaf", url: site.url }],
  creator: "Altaf",
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Altaf - Senior Performance Marketer & Creative Strategist",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: site.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Altaf",
  jobTitle: "Senior Performance Marketer & Creative Strategist",
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  url: site.url,
  sameAs: [site.linkedin],
  knowsAbout: [
    "Google Ads",
    "Meta Ads Manager",
    "LinkedIn Ads",
    "Conversion Rate Optimization",
    "Performance Marketing",
    "Creative Direction",
    "Video Editing",
    "GA4 & Server-Side CAPI",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${jetbrains.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-body antialiased bg-bg text-primary min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
