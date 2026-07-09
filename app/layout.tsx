import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/data/content";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["600", "700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", weight: ["500"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: [
    "performance marketer Bangalore",
    "Google Ads expert Bangalore",
    "Meta Ads freelancer",
    "digital marketing consultant Bangalore",
    "LinkedIn Ads specialist India",
  ],
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: site.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Altaf",
  jobTitle: "Performance Marketer & Creative Strategist",
  address: { "@type": "PostalAddress", addressLocality: "Bangalore", addressCountry: "IN" },
  url: site.url,
  knowsAbout: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Branding", "Video Editing", "SEO"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
