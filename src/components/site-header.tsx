"use client";

import { Menu, Play, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/language-context";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
    const { content } = useLanguage();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isDrawerOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isDrawerOpen]);

    const navItems = [
        { href: "#platform", label: content.nav.product },
        { href: "#creators", label: content.nav.creators },
        { href: "#discovery", label: content.nav.discovery },
        { href: "#trust", label: content.nav.trust },
        { href: "#faq", label: content.nav.faq },
        { href: "#download", label: content.nav.download },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between gap-3 sm:gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                        <button
                            type="button"
                            aria-label="Open navigation menu"
                            aria-expanded={isDrawerOpen}
                            onClick={() => setIsDrawerOpen(true)}
                            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card/80 text-foreground backdrop-blur transition-colors hover:border-primary/40 xl:hidden"
                        >
                            <Menu className="size-5" />
                        </button>

                        <a href="#top" className="min-w-0 flex items-center gap-3">
                            <div className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_16px_42px_rgba(231,76,60,0.32)]">
                                <Play className="size-5 fill-current" />
                            </div>
                            <div className="min-w-0">
                                <p className="font-display text-sm uppercase tracking-[0.22em] text-primary sm:tracking-[0.32em]">
                                    AVP
                                </p>
                                <p className="truncate text-sm text-muted-foreground sm:text-base">
                                    African Video Platform
                                </p>
                            </div>
                        </a>
                    </div>

                    <nav className="hidden items-center gap-6 text-sm text-muted-foreground xl:flex">
                        {navItems.slice(0, 5).map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="transition-colors hover:text-foreground"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex shrink-0 items-center gap-2">
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
            </div>

            <div
                className={`fixed inset-0 z-50 xl:hidden ${isDrawerOpen ? "pointer-events-auto" : "pointer-events-none"}`}
                aria-hidden={!isDrawerOpen}
            >
                <button
                    type="button"
                    aria-label="Close navigation menu"
                    onClick={() => setIsDrawerOpen(false)}
                    className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isDrawerOpen ? "opacity-100" : "opacity-0"}`}
                />
                <aside
                    className={`absolute inset-y-0 left-0 flex w-[min(85vw,22rem)] flex-col border-r border-white/10 bg-[linear-gradient(180deg,rgba(18,12,12,0.98),rgba(27,14,14,0.98))] p-5 text-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_16px_42px_rgba(231,76,60,0.32)]">
                                <Play className="size-5 fill-current" />
                            </div>
                            <div>
                                <p className="font-display text-sm uppercase tracking-[0.22em] text-primary">
                                    AVP
                                </p>
                                <p className="text-sm text-white/70">African Video Platform</p>
                            </div>
                        </div>
                        <button
                            type="button"
                            aria-label="Close navigation drawer"
                            onClick={() => setIsDrawerOpen(false)}
                            className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-colors hover:bg-white/10"
                        >
                            <X className="size-5" />
                        </button>
                    </div>

                    <div className="mt-8 flex flex-col gap-2">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsDrawerOpen(false)}
                                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div className="mt-auto space-y-3 pt-8">
                        <a href="#download" onClick={() => setIsDrawerOpen(false)}>
                            <Button variant="primary" size="lg" className="w-full">
                                <Sparkles className="mr-2 size-4" />
                                {content.header.launchCta}
                            </Button>
                        </a>
                    </div>
                </aside>
            </div>
        </header>
    );
}
