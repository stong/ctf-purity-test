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
        url: "https://ctfpuritytest.com/pepega.png",
        alt: "CTF Purity Test",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "CTF Purity Test",
    description: "The CTF Purity Test is an assessment based on one's experiences playing CTFs. The lower your score, the more cursed you are.",
    images: ["https://ctfpuritytest.com/pepega.png"],
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
        <script defer data-domain="ctfpuritytest.com" src="https://plausible.io/js/script.js"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
