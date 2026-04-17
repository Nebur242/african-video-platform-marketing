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
    const copy = legalCopy[resolvedLanguage].support;

    return {
        title: copy.metadata.title,
        description: copy.metadata.description,
    };
}

export default async function LocalizedSupportPage({
    params,
}: Readonly<{
    params: Promise<{ language: string }>;
}>) {
    const { language } = await params;

    if (!isLegalLanguage(language)) {
        notFound();
    }

    const common = legalCopy[language].common;
    const copy = legalCopy[language].support;

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
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                        {copy.primaryContactLabel}
                    </p>
                    <a
                        href={`mailto:${common.contactEmail}`}
                        className="mt-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-5 py-3 text-lg font-semibold text-primary transition-colors hover:bg-primary/15"
                    >
                        {common.contactEmail}
                    </a>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                        {copy.primaryContactSummary}
                    </p>
                </section>

                <div className="grid gap-6 lg:grid-cols-3">
                    {copy.channels.map((channel) => (
                        <section
                            key={channel.title}
                            className="rounded-4xl border border-border/70 bg-white/75 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur dark:bg-white/5"
                        >
                            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                                {channel.title}
                            </p>
                            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                                {channel.description}
                            </p>
                            <a
                                href={`mailto:${common.contactEmail}`}
                                className="mt-5 inline-flex text-sm font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
                            >
                                {common.contactEmail}
                            </a>
                        </section>
                    ))}
                </div>

                <section className="rounded-4xl border border-border/70 bg-secondary/80 p-6 sm:p-8">
                    <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
                        {copy.includeTitle}
                    </h2>
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
                        {copy.responseExpectations.map((item) => (
                            <li key={item} className="rounded-2xl border border-border/60 bg-background/70 px-4 py-3">
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    );
}