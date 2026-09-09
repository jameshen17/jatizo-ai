import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jatizo.ai"),
  title: "JATIZO AI | Fashion, intelligence, and better decisions",
  description:
    "JATIZO is exploring practical ways for AI to help fashion teams move from information to clearer decisions.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "JATIZO AI",
    description: "Exploring practical AI for the work behind fashion.",
    url: "https://jatizo.ai",
    siteName: "JATIZO AI",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
