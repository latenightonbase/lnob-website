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

export const metadata: Metadata = {
  title: "Late Night Onchain — Where builders get distribution",
  description:
    "I interview the top teams on Robinhood, Solana, Base, Avax and Beyond.",
  openGraph: {
    title: "Late Night Onchain",
    description:
      "I interview the top teams on Robinhood, Solana, Base, Avax and Beyond.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Late Night Onchain",
    description:
      "I interview the top teams on Robinhood, Solana, Base, Avax and Beyond.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
