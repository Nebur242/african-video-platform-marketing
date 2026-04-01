"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/language-context";

export function SiteFooter() {
    const { content } = useLanguage();

    return (
        <footer className="border-t border-border/70 bg-card/40">
            <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-6 lg:grid-cols-[1.4fr_0.6fr] lg:px-8">
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center overflow-hidden rounded-2xl bg-primary/10 ring-1 ring-primary/20">
                            <Image src="/icon-192.png" alt="Senflix icon" width={40} height={40} className="size-10 object-cover" />
                        </div>
                        <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">
                            Senflix
                        </p>
                    </div>
                    <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                        {content.footer.tagline}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                        <Link href="/privacy-policy" className="transition-colors hover:text-foreground">
                            Privacy Policy / Politique de confidentialite
                        </Link>
                        <a href="mailto:hello@nebur242.com" className="transition-colors hover:text-foreground">
                            hello@nebur242.com
                        </a>
                    </div>
                </div>
                <div className="text-sm text-muted-foreground lg:text-right">
                    <p>© 2026 Senflix.</p>
                    <p>{content.footer.rights}</p>
                </div>
            </div>
        </footer>
    );
}
