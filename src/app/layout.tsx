import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digitas.Pet - Your Pet's Digital Twin",
  description: "Track your pet's health with a beautiful 3D digital twin and comprehensive wellness dashboard. The future of pet care is here.",
  keywords: ["pet health", "digital twin", "pet tracking", "wellness", "3D pet"],
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Digitas.Pet - Your Pet's Digital Twin",
    description: "Track your pet's health with a beautiful 3D digital twin and comprehensive wellness dashboard.",
    type: "website",
    siteName: "Digitas.Pet",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitas.Pet - Your Pet's Digital Twin",
    description: "Track your pet's health with a beautiful 3D digital twin and comprehensive wellness dashboard.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-slate-900 text-white font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
