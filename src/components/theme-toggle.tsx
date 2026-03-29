"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useLanguage } from "@/hooks/language-context";
import { useTheme } from "@/hooks/theme-context";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
    const { content } = useLanguage();
    const { theme, cycleTheme } = useTheme();

    const themeLabel = content.header.themeOptions[theme];

    return (
        <button
            type="button"
            onClick={cycleTheme}
            aria-label={`${content.header.themeLabel}: ${themeLabel}`}
            className={cn(
                "inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card/80 px-3 text-sm text-muted-foreground backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground",
            )}
        >
            {theme === "light" ? <Moon className="size-4" /> : null}
            {theme === "dark" ? <Sun className="size-4" /> : null}
            {theme === "system" ? <Monitor className="size-4" /> : null}
            <span className="hidden sm:inline">{themeLabel}</span>
        </button>
    );
}
