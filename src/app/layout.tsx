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
  title: "African Video Platform | Stories That Move | Des histoires qui avancent",
  description:
    "A bilingual marketing site for African Video Platform / Une landing page bilingue pour African Video Platform, concue pour presenter la croissance createur, la decouverte, la moderation et la distribution mobile-first.",
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
