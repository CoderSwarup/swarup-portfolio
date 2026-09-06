import Header from "@/components/common/Header";
import { ThemeProvider } from "@/components/common/ThemeProviders";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Pixelify_Sans, Caveat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import UmamiAnalytics from "@/components/analytics/UmamiAnalytics";
import { logger } from "@/utils";

const fontPixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-pixelify",
});

const fontGeistPixel = localFont({
  src: "../../public/fonts/geist-pixel-latin.woff2",
  variable: "--font-geist-pixel",
  style: "normal",
  display: "swap",
});

const fontCaveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning className={cn(fontPixelify.variable, fontGeistPixel.variable, fontCaveat.variable)}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto pt-20 pb-12 sm:pt-28 sm:pb-24 px-6 overflow-y-scroll"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <Header />
            {children}

            <UmamiAnalytics />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
