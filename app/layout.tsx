import type { Metadata } from "next";
import "./globals.css";
import { SiteAnalytics } from "./site-analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://jatizo.ai"),
  title: "JATIZO AI | Intelligence for fashion's next era",
  description:
    "Jatizo is exploring AI-native tools that help fashion manufacturers discover better-fit brands and business opportunities.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "JATIZO AI | Intelligence for fashion's next era",
    description: "Exploring AI-native tools for the next generation of fashion business.",
    url: "https://jatizo.ai",
    siteName: "JATIZO AI",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <SiteAnalytics />
      </body>
    </html>
  );
}
