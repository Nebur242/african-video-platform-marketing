"use client";

import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";

export type Theme = "light" | "dark" | "system";

type ThemeContextValue = {
    theme: Theme;
    resolvedTheme: "light" | "dark";
    setTheme: (theme: Theme) => void;
    cycleTheme: () => void;
};

const STORAGE_KEY = "avp-marketing-theme";
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getInitialTheme(): Theme {
    if (typeof window === "undefined") {
        return "system";
    }

    const storedTheme = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    return storedTheme ?? "system";
}

function getResolvedTheme(theme: Theme) {
    if (theme !== "system") {
        return theme;
    }

    if (typeof window !== "undefined") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    }

    return "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);
    const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() =>
        getResolvedTheme(getInitialTheme()),
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const applyTheme = (nextTheme: Theme) => {
            const nextResolvedTheme =
                nextTheme === "system"
                    ? mediaQuery.matches
                        ? "dark"
                        : "light"
                    : nextTheme;

            document.documentElement.classList.toggle(
                "dark",
                nextResolvedTheme === "dark",
            );
            setResolvedTheme(nextResolvedTheme);
        };

        applyTheme(theme);
        window.localStorage.setItem(STORAGE_KEY, theme);

        const handleChange = () => {
            if (theme === "system") {
                applyTheme("system");
            }
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, [theme]);

    const value = useMemo<ThemeContextValue>(
        () => ({
            theme,
            resolvedTheme,
            setTheme,
            cycleTheme: () => {
                setTheme((currentTheme) => {
                    if (currentTheme === "light") {
                        return "dark";
                    }

                    if (currentTheme === "dark") {
                        return "system";
                    }

                    return "light";
                });
            },
        }),
        [resolvedTheme, theme],
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }

    return context;
}
