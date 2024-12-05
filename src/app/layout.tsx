import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Import Geist Sans font with fallback
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap", // Ensures text visibility during font loading
});

// Import Geist Mono font with fallback
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

// Metadata for the application
export const metadata: Metadata = {
  title: "Next.js App | Modern Web Experience",
  description: "A modern web application powered by Next.js and TypeScript.",
  keywords: ["Next.js", "React", "TypeScript", "Web Development"],
  authors: [{ name: "Your Name", url: "https://your-portfolio-link.com" }],
  viewport: "width=device-width, initial-scale=1",
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}

