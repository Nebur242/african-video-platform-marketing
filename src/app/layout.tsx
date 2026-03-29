import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iziplay | Stories That Move | Des histoires qui avancent",
  description:
    "A bilingual marketing site for Iziplay / Une landing page bilingue pour Iziplay, concue pour presenter la croissance createur, la decouverte, la moderation et la distribution mobile-first.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${bodyFont.variable} ${displayFont.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground selection:bg-primary/20 selection:text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
