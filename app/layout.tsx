import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatedPage } from "./components/animatedpage";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "My Awesome Blog",
    template: "%s | My Awesome Blog",
  },
  description:
    "A modern blog about Next.js, React, TypeScript, performance, and beautiful web experiences.",
  openGraph: {
    title: "My Awesome Blog",
    description:
      "A modern blog about Next.js, React, TypeScript, performance, and beautiful web experiences.",
    url: "https://blog-gig.vercel.app/",
    siteName: "My Awesome Blog",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Awesome Blog Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Awesome Blog",
    description:
      "A modern blog about Next.js, React, TypeScript, performance, and beautiful web experiences.",
    images: ["/logo.svg"],
    // creator: "@yourhandle",
  },
  keywords: [
    "next.js",
    "football",
    "sports",
    "blog",
    "web development",
    "performance",
  ],
  // authors: [{ name: "Your Name", url: "https://yourdomain.com/about" }],
  // creator: "Your Name",
  // publisher: "Your Name",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#374151 #000000",
      }}
    >
      <body className="relative">
        <Header />
        <AnimatedPage>{children}</AnimatedPage>
        <Footer />
      </body>
    </html>
  );
}
