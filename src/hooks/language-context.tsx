"use client";

import {
    createContext,
    useContext,
    useMemo,
    useState,
    type ReactNode,
} from "react";
import { siteCopy, type Language, type SiteContent } from "@/lib/site-copy";

type LanguageContextValue = {
    language: Language;
    content: SiteContent;
    setLanguage: (language: Language) => void;
    toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({
    children,
    initialLanguage = "fr",
}: Readonly<{
    children: ReactNode;
    initialLanguage?: Language;
}>) {
    const [language, setLanguage] = useState<Language>(initialLanguage);

    const value = useMemo<LanguageContextValue>(
        () => ({
            language,
            content: siteCopy[language],
            setLanguage,
            toggleLanguage: () => {
                setLanguage((currentLanguage) => (currentLanguage === "en" ? "fr" : "en"));
            },
        }),
        [language],
    );

    return (
        <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }

    return context;
}
