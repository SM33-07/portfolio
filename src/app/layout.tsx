import type { Metadata } from "next";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "Soham More — Full-Stack Developer & Systems",
    template: "%s | Soham More",
  },
  description:
    "Computer science student building full-stack platforms, with a focus on backend systems, databases, and developer tools.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Soham More — Full-Stack Developer & Systems",
    description:
      "Computer science student building full-stack platforms, with a focus on backend systems, databases, and developer tools.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soham More — Full-Stack Developer & Systems",
    description:
      "Computer science student building full-stack platforms, with a focus on backend systems, databases, and developer tools.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--bg-vellum)] text-[var(--text-ink)] antialiased selection:bg-[var(--accent-vermilion)] selection:text-white">
        {children}
      </body>
    </html>
  );
}
