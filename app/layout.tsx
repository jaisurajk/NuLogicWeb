import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "nulogic.app/community_app_ideas",
  description:
    "Community app concepts for Book Sharing and ClearRoute, built from local survey insights and commute coordination research.",
  metadataBase: new URL("https://nulogic.app"),
  alternates: {
    canonical: "/community_app_ideas",
  },
  openGraph: {
    title: "nulogic.app/community_app_ideas",
    description:
      "Community app concepts for Book Sharing and ClearRoute, built from local survey insights and commute coordination research.",
    url: "https://nulogic.app/community_app_ideas",
    siteName: "NuLogic",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
