"use client";

import { useSearchParams } from "next/navigation";
import { CheckCheck } from "lucide-react";

const PAGE_COPY = {
    en: {
        badge: "Payment success",
        title: "Your payment was successful.",
        description: "You can now return to the app to continue.",
        openApp: "Open app",
        missingUrl: "No redirect link was provided.",
    },
    fr: {
        badge: "Paiement reussi",
        title: "Votre paiement a ete effectue avec succes.",
        description: "Vous pouvez maintenant retourner dans l'application pour continuer.",
        openApp: "Ouvrir l'application",
        missingUrl: "Aucun lien de redirection n'a ete fourni.",
    },
} as const;

const isSafeAppLink = (value?: string | null) => {
    if (!value) {
        return false;
    }

    return /^(https?:\/\/|[a-zA-Z][a-zA-Z\d+.-]*:\/\/)/.test(value);
};

export function PaymentSuccessContent() {
    const searchParams = useSearchParams();
    const requestedLanguage = searchParams.get("language")?.toLowerCase();
    const language = requestedLanguage === "fr" ? "fr" : "en";
    const copy = PAGE_COPY[language];

    const rawAppUrl =
        searchParams.get("url") ??
        searchParams.get("appUrl") ??
        searchParams.get("app_url") ??
        searchParams.get("redirect");

    const appUrl = isSafeAppLink(rawAppUrl) ? rawAppUrl : undefined;

    return (
        <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(231,76,60,0.15),transparent_34%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),transparent)] dark:bg-[linear-gradient(180deg,rgba(20,20,20,0.68),transparent)]" />

            <div className="relative mx-auto flex min-h-screen w-full max-w-3xl items-center justify-center px-4 py-6 sm:px-6 sm:py-10">
                <section className="w-full rounded-4xl border border-border/70 bg-card/88 p-6 text-center shadow-[0_30px_120px_rgba(15,23,42,0.10)] backdrop-blur sm:p-8">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/12 text-primary">
                        <CheckCheck className="h-8 w-8" />
                    </div>

                    <p className="mt-5 font-display text-xs uppercase tracking-[0.3em] text-primary">
                        {copy.badge}
                    </p>

                    <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                        {copy.title}
                    </h1>

                    <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
                        {copy.description}
                    </p>

                    <div className="mt-8 flex flex-col gap-3">
                        {appUrl ? (
                            <a
                                href={appUrl}
                                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground shadow-[0_14px_40px_rgba(231,76,60,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--primary-strong) sm:text-base"
                            >
                                {copy.openApp}
                            </a>
                        ) : (
                            <div className="rounded-3xl border border-dashed border-border bg-background/70 px-4 py-4 text-sm leading-6 text-muted-foreground">
                                {copy.missingUrl}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
}