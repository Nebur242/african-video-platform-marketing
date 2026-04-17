"use client";

import { Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/hooks/language-context";

export function LanguageToggle() {
    const { content, language } = useLanguage();
    const router = useRouter();
    const pathname = usePathname();

    const nextLanguage = language === "en" ? "fr" : "en";

    const getLocalizedPath = () => {
        if (!pathname || pathname === "/") {
            return `/${nextLanguage}`;
        }

        const segments = pathname.split("/").filter(Boolean);

        if (segments[0] === "en" || segments[0] === "fr") {
            segments[0] = nextLanguage;
            return `/${segments.join("/")}`;
        }

        return `/${nextLanguage}${pathname}`;
    };

    return (
        <button
            type="button"
            onClick={() => router.push(getLocalizedPath())}
            aria-label={`${content.header.languageLabel}: ${language.toUpperCase()}`}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card/80 px-3 text-sm text-muted-foreground backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground"
        >
            <Languages className="size-4" />
            <span>{language === "en" ? "EN" : "FR"}</span>
        </button>
    );
}
