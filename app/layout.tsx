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
  title: "CTF Purity Test",
  description: "The CTF Purity Test is an assessment based on one's experiences playing CTFs. The lower your score, the more cursed you are.",
  openGraph: {
    title: "CTF Purity Test",
    description: "The CTF Purity Test is an assessment based on one's experiences playing CTFs. The lower your score, the more cursed you are.",
    images: [
      {
        url: "/pepega.png",
        width: 1200,
        height: 630,
        alt: "CTF Purity Test",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CTF Purity Test",
    description: "The CTF Purity Test is an assessment based on one's experiences playing CTFs. The lower your score, the more cursed you are.",
    images: ["/pepega.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
