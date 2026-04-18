"use client";

import { useEffect, useMemo, useState } from "react";
import { Clock3, X } from "lucide-react";
import { useLanguage } from "@/hooks/language-context";
import { Button } from "@/components/ui/button";
import {
    getTimeRemaining,
    LAUNCH_TARGET,
    type TimeRemaining,
} from "@/lib/launch-countdown";

type CountdownUnit = {
    label: string;
    value: string;
};

type LaunchCountdownModalProps = {
    initialTimeRemaining: TimeRemaining;
};

const MODAL_SHOWN_KEY = "senflix_launch_modal_shown";

export function LaunchCountdownModal({
    initialTimeRemaining,
}: LaunchCountdownModalProps) {
    const { content, language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(initialTimeRemaining);

    useEffect(() => {
        if (!sessionStorage.getItem(MODAL_SHOWN_KEY)) {
            setIsOpen(true);
            sessionStorage.setItem(MODAL_SHOWN_KEY, "1");
        }
    }, []);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const syncTimeRemaining = () => {
            const nextTimeRemaining = getTimeRemaining(LAUNCH_TARGET);
            setTimeRemaining(nextTimeRemaining);

            return nextTimeRemaining;
        };

        const initialTime = syncTimeRemaining();

        if (initialTime.complete) {
            return;
        }

        const timer = window.setInterval(() => {
            const nextTimeRemaining = syncTimeRemaining();

            if (nextTimeRemaining.complete) {
                window.clearInterval(timer);
            }
        }, 1000);

        return () => window.clearInterval(timer);
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    const launchDateLabel = useMemo(() => {
        return new Intl.DateTimeFormat(language === "fr" ? "fr-FR" : "en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            timeZone: "UTC",
            timeZoneName: "short",
        }).format(LAUNCH_TARGET);
    }, [language]);

    const countdownUnits: CountdownUnit[] = [
        { label: content.launchModal.units.days, value: timeRemaining.days },
        { label: content.launchModal.units.hours, value: timeRemaining.hours },
        { label: content.launchModal.units.minutes, value: timeRemaining.minutes },
        { label: content.launchModal.units.seconds, value: timeRemaining.seconds },
    ];

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(15,23,42,0.44)] px-4 py-6 backdrop-blur-sm">
            <div
                role="dialog"
                aria-modal="true"
                aria-label={content.launchModal.title}
                className="relative w-full max-w-2xl overflow-hidden rounded-4xl border border-border/70 bg-[linear-gradient(180deg,rgba(255,251,248,0.98),rgba(252,243,238,0.96))] p-5 text-foreground shadow-[0_32px_120px_rgba(15,23,42,0.28)] sm:p-7 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(21,21,21,0.96),rgba(43,22,19,0.94))] dark:text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(231,76,60,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.35),transparent_26%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(231,76,60,0.24),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_26%)]" />
                <div className="relative">
                    <button
                        type="button"
                        aria-label={content.launchModal.closeLabel}
                        onClick={() => setIsOpen(false)}
                        className="absolute right-0 top-0 inline-flex size-10 items-center justify-center rounded-full border border-border/70 bg-white/75 text-foreground transition-colors hover:bg-white dark:border-white/10 dark:bg-white/8 dark:text-white dark:hover:bg-white/12"
                    >
                        <X className="size-4" />
                    </button>

                    <div className="max-w-xl pr-12">
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                            <Clock3 className="size-4" />
                            {content.launchModal.badge}
                        </span>
                        <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl">
                            {content.launchModal.title}
                        </h2>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base dark:text-white/72">
                            {content.launchModal.description}
                        </p>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {countdownUnits.map((unit) => (
                            <div
                                key={unit.label}
                                className="rounded-[1.6rem] border border-border/70 bg-white/72 p-4 text-center backdrop-blur dark:border-white/10 dark:bg-white/7"
                            >
                                <div className="font-display text-3xl sm:text-4xl">{unit.value}</div>
                                <div className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground dark:text-white/60">
                                    {unit.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex flex-col gap-4 rounded-[1.6rem] border border-border/70 bg-card/72 p-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-white/7">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground dark:text-white/60">
                                {content.launchModal.targetLabel}
                            </p>
                            <p className="mt-2 text-sm leading-6 sm:text-base">
                                {timeRemaining.complete ? content.launchModal.completeLabel : launchDateLabel}
                            </p>
                        </div>
                        <Button type="button" variant="secondary" onClick={() => setIsOpen(false)}>
                            {content.launchModal.closedCta}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}