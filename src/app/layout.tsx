import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import OneSignalProvider from "@/components/OneSignalProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shriman Buildcon",
  description:
    "Professional construction, waterproofing, tile and stone fixing, renovation and finishing services.",

  icons: {
    icon: "/icon.png",
  },

  openGraph: {
    title: "Shriman Buildcon",
    description:
      "Professional construction, waterproofing, tile and stone fixing, renovation and finishing services.",
    url: "https://shrimanbuildcon.com",
    siteName: "Shriman Buildcon",
    images: [
      {
        url: "https://shrimanbuildcon.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shriman Buildcon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shriman Buildcon",
    description:
      "Professional construction, waterproofing, tile and stone fixing, renovation and finishing services.",
    images: ["https://shrimanbuildcon.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Shriman Buildcon",
              url: "https://shrimanbuildcon.com",
              logo: "https://shrimanbuildcon.com/logo.png",
              description:
                "Professional construction, waterproofing, tile and stone fixing, renovation and finishing services.",
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <OneSignalProvider />
        {children}
      </body>
    </html>
  );
}