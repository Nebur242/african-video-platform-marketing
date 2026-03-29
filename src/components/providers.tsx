"use client";

import { type ReactNode } from "react";
import { LanguageProvider } from "@/hooks/language-context";
import { ThemeProvider } from "@/hooks/theme-context";

export function Providers({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider>
            <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
    );
}
