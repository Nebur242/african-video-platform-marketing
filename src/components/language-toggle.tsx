"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/hooks/language-context";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={`Switch language, current language ${language}`}
      className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card/80 px-3 text-sm text-muted-foreground backdrop-blur transition-colors hover:border-primary/40 hover:text-foreground"
    >
      <Languages className="size-4" />
      <span>{language === "en" ? "EN" : "FR"}</span>
    </button>
  );
}
