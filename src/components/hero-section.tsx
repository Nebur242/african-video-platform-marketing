"use client";

import Image from "next/image";
import { ArrowRight, PlayCircle, ShieldCheck, Sparkles, Wallet } from "lucide-react";
import { useLanguage } from "@/hooks/language-context";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function HeroSection() {
    const { content } = useLanguage();

    return (
        <section id="top" className="relative overflow-hidden">
            <div className="absolute inset-x-0 -top-72 h-128 bg-[radial-gradient(circle_at_top,rgba(231,76,60,0.28),transparent_55%)]" />
            <div className="absolute -right-32 top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(255,208,160,0.3),transparent_68%)] blur-3xl sm:top-32 sm:h-72 sm:w-72" />
            <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-14 pt-8 sm:px-6 sm:gap-10 sm:pb-20 sm:pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:px-8 lg:pb-28 lg:pt-16">
                <Reveal className="space-y-5 sm:space-y-8">
                    <span className="inline-flex max-w-full items-start gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-2 text-[11px] leading-5 text-primary sm:items-center sm:px-4 sm:text-sm">
                        <Sparkles className="mt-0.5 size-4 shrink-0 sm:mt-0" />
                        <span className="text-left sm:whitespace-normal">{content.hero.eyebrow}</span>
                    </span>
                    <div className="space-y-5 sm:space-y-6">
                        <h1 className="max-w-4xl text-balance font-display text-[3rem] leading-[0.92] sm:text-6xl lg:text-7xl">
                            {content.hero.title}
                        </h1>
                        <p className="max-w-2xl text-[15px] leading-7 text-muted-foreground sm:text-xl sm:leading-8">
                            {content.hero.description}
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <a href="#platform" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto">
                                {content.hero.primaryCta}
                                <ArrowRight className="ml-2 size-4" />
                            </Button>
                        </a>
                        <a href="#creators" className="w-full sm:w-auto">
                            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                                <PlayCircle className="mr-2 size-4" />
                                {content.hero.secondaryCta}
                            </Button>
                        </a>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                        {content.hero.stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="rounded-3xl border border-border/70 bg-card/70 p-4 backdrop-blur"
                            >
                                <p className="font-display text-[1.9rem] leading-none text-foreground sm:text-2xl">{stat.value}</p>
                                <p className="mt-3 text-sm leading-6 text-muted-foreground">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={120} className="relative">
                    <div className="relative overflow-hidden rounded-4xl border border-border/70 bg-[linear-gradient(160deg,rgba(255,250,247,0.96),rgba(248,236,231,0.98))] p-4 text-foreground shadow-[0_30px_120px_rgba(125,79,55,0.16)] sm:p-6 dark:border-white/15 dark:bg-[linear-gradient(160deg,rgba(16,16,16,0.88),rgba(36,16,14,0.96))] dark:text-white dark:shadow-[0_30px_120px_rgba(14,14,14,0.45)]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(231,76,60,0.14),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.46),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(231,76,60,0.22),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />
                        <div className="relative space-y-4 sm:space-y-6">
                            <div className="flex items-start justify-between gap-4 rounded-2xl border border-border/70 bg-white/55 p-4 backdrop-blur-sm sm:items-center dark:border-white/10 dark:bg-white/5">
                                <div className="min-w-0">
                                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground sm:text-sm sm:tracking-[0.24em] dark:text-white/60">
                                        {content.hero.audienceLabel}
                                    </p>
                                    <p className="mt-2 font-display text-lg leading-tight sm:text-2xl">Senflix</p>
                                </div>
                                <div className="flex size-14 items-center justify-center overflow-hidden rounded-2xl bg-black/4 p-1 dark:bg-white/8">
                                    <Image src="/icon-192.png" alt="Senflix icon" width={48} height={48} className="size-12 rounded-xl object-cover" />
                                </div>
                            </div>
                            <div className="grid gap-4">
                                {content.hero.liveCards.map((card, index) => {
                                    const icons = [Wallet, Sparkles, ShieldCheck];
                                    const Icon = icons[index] ?? Sparkles;

                                    return (
                                        <div
                                            key={card.title}
                                            className="group rounded-[1.6rem] border border-border/70 bg-white/52 p-4 transition-transform duration-300 hover:-translate-y-1 sm:p-5 dark:border-white/10 dark:bg-white/6"
                                        >
                                            <div className="flex items-start justify-between gap-3 sm:gap-4">
                                                <div className="min-w-0">
                                                    <p className="font-display text-lg sm:text-xl">{card.title}</p>
                                                    <p className="mt-2 text-sm leading-6 text-muted-foreground sm:leading-7 dark:text-white/72">{card.detail}</p>
                                                </div>
                                                <div className="rounded-2xl bg-black/4 p-3 text-[#d96a3c] dark:bg-white/8 dark:text-[#ffcf9e]">
                                                    <Icon className="size-5" />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                                <div className="rounded-[1.6rem] border border-border/60 bg-white/88 px-4 py-5 text-slate-950 sm:px-5 sm:py-6 dark:border-white/10 dark:bg-white dark:text-slate-950">
                                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500 sm:text-sm sm:tracking-[0.2em]">{content.hero.creatorLoopLabel}</p>
                                    <p className="mt-3 font-display text-2xl sm:text-3xl">{content.hero.creatorLoopValue}</p>
                                </div>
                                <div className="rounded-[1.6rem] border border-primary/18 bg-primary/92 p-4 text-white shadow-[0_16px_40px_rgba(231,76,60,0.18)] sm:p-5 dark:border-white/10 dark:bg-primary/80 dark:shadow-none">
                                    <p className="text-xs uppercase tracking-[0.18em] text-white/75 sm:text-sm sm:tracking-[0.2em]">{content.hero.shortsLabel}</p>
                                    <p className="mt-3 font-display text-2xl sm:text-3xl">{content.hero.shortsValue}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
