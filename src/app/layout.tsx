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
  title: "Senflix | Stories That Move | Des histoires qui avancent",
  description:
    "A bilingual marketing site for Senflix / Une landing page bilingue pour Senflix, concue pour presenter la croissance createur, la decouverte, la moderation et la distribution mobile-first.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/senflix-icon.png", type: "image/png" },
      { url: "/senflix-icon.png", sizes: "192x192", type: "image/png" },
      { url: "/senflix-icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/senflix-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/senflix-icon.png"],
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
