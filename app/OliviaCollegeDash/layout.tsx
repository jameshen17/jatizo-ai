import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Olivia College Application Dashboard",
  description: "Private college application planning dashboard.",
  robots: { index: false, follow: false, nocache: true },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
