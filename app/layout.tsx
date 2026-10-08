import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProgressBarProvider from "./components/progressbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theplayersrising.com"),
  title: {
    default: "The Players Rising",
    template: "%s | The Players Rising",
  },
  description:
    "The ultimate sports blog featuring athlete stories, game analysis, and rising stars in football, basketball, and more. Join the conversation about today's sports legends.",
  openGraph: {
    title: "The Players Rising",
    description:
      "The ultimate sports blog featuring athlete stories, game analysis, and rising stars in football, basketball, and more.",
    url: "https://theplayersrising.com/",
    siteName: "The Players Rising",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "The Players Rising" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Players Rising",
    description:
      "The ultimate sports blog featuring athlete stories, game analysis, and rising stars.",
    images: ["/og-image.jpg"],
  },
  keywords: [
    "sports blog",
    "football",
    "basketball",
    "athletes",
    "sports news",
    "game analysis",
    "player profiles",
    "sports journalism",
    "rising stars",
    "sports commentary",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="relative bg-[#1A1A1A] font-sans antialiased">
        <ProgressBarProvider>{children}</ProgressBarProvider>
      </body>
    </html>
  );
}
