"use client";

import { Play, Sparkles } from "lucide-react";
import { useLanguage } from "@/hooks/language-context";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
    const { content } = useLanguage();

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
                <a href="#top" className="min-w-0 flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_16px_42px_rgba(231,76,60,0.32)]">
                        <Play className="size-5 fill-current" />
                    </div>
                    <div className="min-w-0">
                        <p className="font-display text-sm uppercase tracking-[0.32em] text-primary">
                            AVP
                        </p>
                        <p className="truncate text-sm text-muted-foreground">African Video Platform</p>
                    </div>
                </a>

                <nav className="hidden items-center gap-6 text-sm text-muted-foreground xl:flex">
                    <a href="#platform" className="transition-colors hover:text-foreground">{content.nav.product}</a>
                    <a href="#creators" className="transition-colors hover:text-foreground">{content.nav.creators}</a>
                    <a href="#discovery" className="transition-colors hover:text-foreground">{content.nav.discovery}</a>
                    <a href="#trust" className="transition-colors hover:text-foreground">{content.nav.trust}</a>
                    <a href="#faq" className="transition-colors hover:text-foreground">{content.nav.faq}</a>
                </nav>

                <div className="ml-auto flex items-center gap-2 sm:ml-0">
                    <LanguageToggle />
                    <ThemeToggle />
                    <a href="#download" className="hidden md:block">
                        <Button variant="primary" size="sm">
                            <Sparkles className="mr-2 size-4" />
                            {content.header.launchCta}
                        </Button>
                    </a>
                </div>
                </div>

                <nav className="mt-4 flex gap-2 overflow-x-auto pb-1 text-sm text-muted-foreground xl:hidden">
                    <a href="#platform" className="shrink-0 rounded-full border border-border/70 bg-card/70 px-3 py-2 transition-colors hover:text-foreground">{content.nav.product}</a>
                    <a href="#creators" className="shrink-0 rounded-full border border-border/70 bg-card/70 px-3 py-2 transition-colors hover:text-foreground">{content.nav.creators}</a>
                    <a href="#discovery" className="shrink-0 rounded-full border border-border/70 bg-card/70 px-3 py-2 transition-colors hover:text-foreground">{content.nav.discovery}</a>
                    <a href="#trust" className="shrink-0 rounded-full border border-border/70 bg-card/70 px-3 py-2 transition-colors hover:text-foreground">{content.nav.trust}</a>
                    <a href="#faq" className="shrink-0 rounded-full border border-border/70 bg-card/70 px-3 py-2 transition-colors hover:text-foreground">{content.nav.faq}</a>
                    <a href="#download" className="shrink-0 rounded-full border border-primary/20 bg-primary/10 px-3 py-2 text-primary transition-colors hover:text-primary">{content.nav.download}</a>
                </nav>
            </div>
        </header>
    );
}
