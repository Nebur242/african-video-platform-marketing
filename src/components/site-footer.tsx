"use client";

import { useLanguage } from "@/hooks/language-context";

export function SiteFooter() {
  const { content } = useLanguage();

  return (
    <footer className="border-t border-border/70 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-6 lg:grid-cols-[1.4fr_0.6fr] lg:px-8">
        <div className="space-y-3">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">
            African Video Platform
          </p>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
            {content.footer.tagline}
          </p>
        </div>
        <div className="text-sm text-muted-foreground lg:text-right">
          <p>© 2026 African Video Platform.</p>
          <p>{content.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
