import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLegalLanguage, legalCopy } from "@/lib/legal-copy";

export async function generateMetadata({
    params,
}: Readonly<{
    params: Promise<{ language: string }>;
}>): Promise<Metadata> {
    const { language } = await params;
    const resolvedLanguage = isLegalLanguage(language) ? language : "fr";
    const copy = legalCopy[resolvedLanguage].privacy;

    return {
        title: copy.metadata.title,
        description: copy.metadata.description,
    };
}

export default async function LocalizedPrivacyPolicyPage({
    params,
}: Readonly<{
    params: Promise<{ language: string }>;
}>) {
    const { language } = await params;

    if (!isLegalLanguage(language)) {
        notFound();
    }

    const common = legalCopy[language].common;
    const copy = legalCopy[language].privacy;

    return (
        <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(231,76,60,0.12),transparent_28%)]" />
            <div className="mx-auto flex max-w-4xl flex-col gap-10 px-5 py-10 sm:px-6 lg:px-8 lg:py-16">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <p className="font-display text-sm uppercase tracking-[0.32em] text-primary">
                            {common.brand}
                        </p>
                        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                            {copy.title}
                        </h1>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
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

                <section className="rounded-4xl border border-border/70 bg-card/70 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                        {copy.contactLabel}
                    </p>
                    <p className="mt-4 text-lg leading-8">
                        {copy.contactLead}
                        <a className="text-primary underline-offset-4 hover:underline" href={`mailto:${common.contactEmail}`}>
                            {common.contactEmail}
                        </a>
                        {copy.contactSuffix}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                        {copy.contactSummary}
                    </p>
                </section>

                <div className="grid gap-6">
                    {copy.sections.map((section) => (
                        <section
                            key={section.title}
                            className="rounded-4xl border border-border/70 bg-white/70 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)] backdrop-blur dark:bg-white/5 sm:p-8"
                        >
                            <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
                                {section.title}
                            </h2>
                            <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
                                {section.items.map((item) => (
                                    <li key={item} className="rounded-2xl border border-border/60 bg-background/70 px-4 py-3">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>

                <section className="rounded-4xl border border-border/70 bg-secondary/80 p-6 sm:p-8">
                    <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
                        {copy.securityTitle}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                        {copy.securityBody}
                    </p>
                </section>
            </div>
        </main>
    );
}