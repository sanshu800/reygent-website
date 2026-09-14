import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Reygent — Business Automation for Professional Services",
  description:
    "Reygent builds AI-powered automations that handle lead management, client onboarding, follow-ups, and reporting — so your firm runs without the manual overhead.",
  openGraph: {
    title: "Reygent — Business Automation for Professional Services",
    description:
      "Reygent builds AI-powered automations that handle lead management, client onboarding, follow-ups, and reporting — so your firm runs without the manual overhead.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
