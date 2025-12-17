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
  title: "Valentine Eze - Senior Software Developer",
  description: "Senior Software Developer with 6+ years experience in full-stack development, cloud computing, and system architecture. Specializing in scalable web applications and infrastructure optimization.",
  keywords: "Valentine Eze, Software Developer, Full Stack Developer, Cloud Computing, AWS, React, Node.js, System Architecture",
  authors: [{ name: "Valentine Eze" }],
  creator: "Valentine Eze",
  publisher: "Valentine Eze",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://valentineeze.com",
    title: "Valentine Eze - Senior Software Developer",
    description: "Senior Software Developer with 6+ years experience in full-stack development, cloud computing, and system architecture.",
    siteName: "Valentine Eze Portfolio",
    images: [
      {
        url: "/my.png",
        width: 1200,
        height: 630,
        alt: "Valentine Eze - Senior Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentine Eze - Senior Software Developer",
    description: "Senior Software Developer with 6+ years experience in full-stack development, cloud computing, and system architecture.",
    images: ["/my.png"],
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="canonical" href="https://valentineeze.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/my.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/my.png" />
        <link rel="apple-touch-icon" href="/my.png" />
        <link rel="shortcut icon" href="/my.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
