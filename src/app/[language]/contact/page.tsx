import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLegalLanguage, legalCopy } from "@/lib/legal-copy";
import { ContactForm } from "@/components/contact-form";

export async function generateMetadata({
    params,
}: Readonly<{
    params: Promise<{ language: string }>;
}>): Promise<Metadata> {
    const { language } = await params;
    const resolvedLanguage = isLegalLanguage(language) ? language : "fr";
    const copy = legalCopy[resolvedLanguage].contact;

    return {
        title: copy.metadata.title,
        description: copy.metadata.description,
    };
}

export default async function LocalizedContactPage({
    params,
}: Readonly<{
    params: Promise<{ language: string }>;
}>) {
    const { language } = await params;

    if (!isLegalLanguage(language)) {
        notFound();
    }

    const common = legalCopy[language].common;
    const copy = legalCopy[language].contact;

    return (
        <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(231,76,60,0.13),transparent_30%)]" />
            <div className="mx-auto flex max-w-5xl flex-col gap-10 px-5 py-10 sm:px-6 lg:px-8 lg:py-16">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <p className="font-display text-sm uppercase tracking-[0.32em] text-primary">
                            {common.brand}
                        </p>
                        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                            {copy.title}
                        </h1>
                        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                            {copy.summary}
                        </p>
                    </div>
                    <Link
                        href={`/${language}`}
                        className="rounded-full border border-border bg-card/80 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                        {common.backHome}
                    </Link>
                </div>

                <section className="rounded-4xl border border-border/70 bg-card/75 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
                    <ContactForm
                        copy={copy}
                        contactEmail={common.contactEmail}
                    />
                </section>
            </div>
        </main>
    );
}
