import type { Metadata } from "next";
import Link from "next/link";

const supportEmail = "hello@nebur242.com";

const sections = [
    {
        title: "Information we collect",
        items: [
            "Account details such as phone number, email address, display name, and profile preferences.",
            "Content and metadata you upload, including videos, thumbnails, playlists, and descriptions.",
            "Purchase and payout metadata needed to confirm payments, unlock paid content, and support creator revenue workflows.",
            "Technical and device data such as app version, device model, notification token, and diagnostics needed for security and reliability.",
            "Usage activity related to authentication, browsing, playback, purchases, and support flows.",
        ],
    },
    {
        title: "Permissions",
        items: [
            "Camera access to capture photos or video inside the app.",
            "Microphone access to record audio with video content.",
            "Photos and media library access to select or upload existing files.",
            "Notification permission to deliver transactional and product messages.",
        ],
    },
    {
        title: "How we use data",
        items: [
            "To create accounts, authenticate users, and protect the platform from abuse.",
            "To host, process, and display creator and viewer content.",
            "To process purchases, confirm access, and support payouts and customer support.",
            "To monitor reliability, investigate errors, and improve product quality.",
            "To meet legal, accounting, fraud, and safety obligations.",
        ],
    },
    {
        title: "Sharing and processors",
        items: [
            "We may share information with hosting, storage, analytics, observability, moderation, and customer support providers that operate on our behalf.",
            "Payments are handled by third-party processors such as Stripe and other supported payment providers under their own privacy terms.",
            "We may disclose information when legally required or when necessary to protect users, rights, and platform integrity.",
            "We do not sell personal information.",
        ],
    },
    {
        title: "Retention and rights",
        items: [
            "We retain information only as long as needed for service delivery, security, support, compliance, and dispute resolution.",
            "You can request access, correction, deletion, or other privacy help by contacting the address below.",
            "If you believe a child has submitted personal information improperly, contact us and we will review the request.",
        ],
    },
] as const;

export const metadata: Metadata = {
    title: "Senflix Privacy Policy",
    description:
    "Privacy Policy for the Senflix app, including data collection, permissions, payments, support, and user rights.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(231,76,60,0.12),transparent_28%)]" />
            <div className="mx-auto flex max-w-4xl flex-col gap-10 px-5 py-10 sm:px-6 lg:px-8 lg:py-16">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <p className="font-display text-sm uppercase tracking-[0.32em] text-primary">
                            Senflix
                        </p>
                        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                            Privacy Policy
                        </h1>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                            Effective date: March 30, 2026. This policy explains how the Senflix
                            app collects, uses, shares, and protects personal
                            information across account, content, payment, support, and operational flows.
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
                        For support, privacy requests, or data rights questions, contact{' '}
                        <a className="text-primary underline-offset-4 hover:underline" href={`mailto:${supportEmail}`}>
                            {supportEmail}
                        </a>
                        .
                    </p>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                        Version francaise breve: pour toute question de confidentialite, de support ou de
                        droits sur les donnees, contactez {supportEmail}.
                    </p>
                </section>

                <div className="grid gap-6">
                    {sections.map((section) => (
                        <section
                            key={section.title}
                            className="rounded-4xl border border-border/70 bg-white/70 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)] backdrop-blur dark:bg-white/5 sm:p-8"
                        >
                            <h2 className="font-display text-2xl tracking-tight sm:text-3xl">{section.title}</h2>
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
                    <h2 className="font-display text-2xl tracking-tight sm:text-3xl">Security and updates</h2>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                        We use reasonable technical and organizational safeguards to protect personal
                        information, but no system is perfectly secure. We may update this policy from
                        time to time, and material changes will be reflected by updating the effective
                        date on this page.
                    </p>
                </section>
            </div>
        </main>
    );
}