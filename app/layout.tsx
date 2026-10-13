
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://xhyza-christening-w9d3.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Xhyza Maria's Christening Invitation",

  description:
    "You're invited to celebrate the Holy Baptism of Xhyza Maria on Sunday, October 18, 2026, at Blessed Virgin Mary Chapel, Mindanao State University.",

  openGraph: {
    title: "You're Invited to Xhyza Maria's Christening! 🌸",

    description:
      "October 18, 2026 | Holy Mass at 7:00 AM | Christening after Mass | Blessed Virgin Mary Chapel, Mindanao State University.",

    url: siteUrl,

    siteName: "Xhyza Maria's Christening",

    type: "website",

    locale: "en_PH",

    images: [
      {
        url: "/images/christening-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Xhyza Maria's Christening Invitation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Xhyza Maria's Christening Invitation",
    description:
      "Join us for Xhyza Maria's Holy Baptism on October 18, 2026.",
    images: ["/images/christening-preview.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
