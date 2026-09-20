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
    "Professional construction, turnkey projects, waterproofing, tile and stone fixing, renovation and finishing services.",
  icons: {
    icon: "/icon.png",
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
              logo: "https://shrimanbuildcon.com/icon.png",
              description:
                "Professional construction, turnkey projects, waterproofing, tile and stone fixing, renovation and finishing services.",
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