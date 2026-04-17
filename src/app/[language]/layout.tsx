import { notFound } from "next/navigation";
import { LanguageProvider } from "@/hooks/language-context";
import { isLegalLanguage, legalLanguages } from "@/lib/legal-copy";

export function generateStaticParams() {
    return legalLanguages.map((language) => ({ language }));
}

export default async function LanguageLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ language: string }>;
}>) {
    const { language } = await params;

    if (!isLegalLanguage(language)) {
        notFound();
    }

    return <LanguageProvider initialLanguage={language}>{children}</LanguageProvider>;
}