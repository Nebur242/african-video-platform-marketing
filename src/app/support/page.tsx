import type { Metadata } from "next";
import Link from "next/link";

const supportChannels = [
    {
        title: "General support",
        description:
            "Questions about accounts, app access, creator discovery, or platform usage.",
        contact: "hello@nebur242.com",
    },
    {
        title: "Billing and purchases",
        description:
            "Help with payment confirmation, access issues, refunds, or order problems.",
        contact: "hello@nebur242.com",
    },
    {
        title: "Trust and moderation",
        description:
            "Report abusive content, creator impersonation, intellectual property concerns, or safety issues.",
        contact: "hello@nebur242.com",
    },
] as const;

const responseExpectations = [
    "Include the email address used on the platform and a short description of the issue.",
    "If the request involves a playlist or transaction, include the playlist title, order reference, or screenshot when available.",
    "Urgent safety or moderation concerns should clearly state the affected account or content link.",
] as const;

export const metadata: Metadata = {
    title: "Senflix Support and Contact",
    description:
        "Public Senflix support page with contact details for account help, billing issues, moderation concerns, and creator support.",
};

export default function SupportPage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(231,76,60,0.13),transparent_30%)]" />
            <div className="mx-auto flex max-w-5xl flex-col gap-10 px-5 py-10 sm:px-6 lg:px-8 lg:py-16">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <p className="font-display text-sm uppercase tracking-[0.32em] text-primary">
                            Senflix
                        </p>
                        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                            Support and Contact
                        </h1>
                        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                            Need help with your account, creator workflow, billing, or a
                            moderation concern? Use the contact address below and include the
                            details that let our team identify the right user, content, or
                            transaction quickly.
                        </p>
                    </div>
                    <Link
                        href="/"
                        className="rounded-full border border-border bg-card/80 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                        Back to home
                    </Link>
                </div>

                <section className="rounded-4xl border border-border/70 bg-card/75 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                        Primary contact
                    </p>
                    <a
                        href="mailto:hello@nebur242.com"
                        className="mt-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-5 py-3 text-lg font-semibold text-primary transition-colors hover:bg-primary/15"
                    >
                        hello@nebur242.com
                    </a>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                        Version francaise breve: pour toute aide sur le compte, les achats,
                        le contenu ou la moderation, contactez hello@nebur242.com.
                    </p>
                </section>

                <div className="grid gap-6 lg:grid-cols-3">
                    {supportChannels.map((channel) => (
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
                                href={`mailto:${channel.contact}`}
                                className="mt-5 inline-flex text-sm font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
                            >
                                {channel.contact}
                            </a>
                        </section>
                    ))}
                </div>

                <section className="rounded-4xl border border-border/70 bg-secondary/80 p-6 sm:p-8">
                    <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
                        What to include
                    </h2>
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
                        {responseExpectations.map((item) => (
                            <li
                                key={item}
                                className="rounded-2xl border border-border/60 bg-background/70 px-4 py-3"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    );
}