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
  title: "Late Night on Base — AI, Apps & Tech",
  description:
    "Breaking down what actually matters in AI, apps & tech. Live conversations with the builders shaping technology.",
  openGraph: {
    title: "Late Night on Base",
    description:
      "Breaking down what actually matters in AI, apps & tech.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Late Night on Base",
    description:
      "Breaking down what actually matters in AI, apps & tech.",
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
