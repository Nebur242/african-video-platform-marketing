import type { Metadata } from "next";
import Link from "next/link";

const sections = [
    {
        title: "Using Senflix",
        items: [
            "You must use the service lawfully and only with authority over the account and payment method you use.",
            "Creators are responsible for the content they upload, the rights they hold, and the accuracy of playlist pricing and descriptions.",
            "We may suspend or remove accounts, playlists, videos, comments, or transactions that violate platform rules, law, or safety requirements.",
        ],
    },
    {
        title: "Digital access and payments",
        items: [
            "Paid access unlocks the specific content or entitlement described at checkout, subject to platform availability and technical limits.",
            "Payment providers may apply their own terms, verification checks, and refund handling rules.",
            "We may cancel, limit, or reverse access when fraud, abuse, charge disputes, or policy violations are confirmed.",
        ],
    },
    {
        title: "Creator and platform responsibilities",
        items: [
            "Senflix operates the platform, moderation systems, discovery surfaces, and support channels, but creator content remains creator-controlled unless removal is required.",
            "We may review content, metadata, pricing, and user reports to protect users, meet store requirements, and enforce moderation decisions.",
            "Platform features, payout eligibility, and monetization tools may change over time as the product evolves.",
        ],
    },
    {
        title: "Support, disputes, and updates",
        items: [
            "Questions about billing, access, moderation, or account issues should be sent to the support contact listed below.",
            "We may update these terms as the service changes. Continued use after updates means you accept the revised terms.",
            "If part of these terms is unenforceable, the remaining sections continue to apply.",
        ],
    },
] as const;

export const metadata: Metadata = {
    title: "Senflix Terms and Conditions",
    description:
        "Terms and Conditions for Senflix covering platform access, creator responsibilities, digital purchases, moderation, and support.",
};

export default function TermsPage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(231,76,60,0.12),transparent_32%)]" />
            <div className="mx-auto flex max-w-4xl flex-col gap-10 px-5 py-10 sm:px-6 lg:px-8 lg:py-16">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <p className="font-display text-sm uppercase tracking-[0.32em] text-primary">
                            Senflix
                        </p>
                        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                            Terms and Conditions
                        </h1>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                            Effective date: March 30, 2026. These terms cover access to the
                            Senflix platform, creator uploads, moderation, digital purchases,
                            and support handling.
                        </p>
                    </div>
                    <Link
                        href="/"
                        className="rounded-full border border-border bg-card/80 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                        Back to home
                    </Link>
                </div>

                <section className="rounded-4xl border border-border/70 bg-card/70 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                        Contact
                    </p>
                    <p className="mt-4 text-lg leading-8">
                        For terms, account, billing, or moderation questions, contact
                        <a className="text-primary underline-offset-4 hover:underline" href="mailto:hello@nebur242.com">
                            hello@nebur242.com
                        </a>
                        .
                    </p>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                        Resume bref en francais: ces conditions regissent l'utilisation de
                        Senflix, les contenus crees par les utilisateurs, les achats
                        numeriques, la moderation et le support.
                    </p>
                </section>

                <div className="grid gap-6">
                    {sections.map((section) => (
                        <section
                            key={section.title}
                            className="rounded-4xl border border-border/70 bg-white/70 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)] backdrop-blur dark:bg-white/5 sm:p-8"
                        >
                            <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
                                {section.title}
                            </h2>
                            <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
                                {section.items.map((item) => (
                                    <li
                                        key={item}
                                        className="rounded-2xl border border-border/60 bg-background/70 px-4 py-3"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}