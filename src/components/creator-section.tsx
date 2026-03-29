"use client";

import { ArrowUpRight, Coins, HandCoins, Users } from "lucide-react";
import { useLanguage } from "@/hooks/language-context";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";

export function CreatorSection() {
    const { content } = useLanguage();
    const icons = [ArrowUpRight, Users, HandCoins];

    return (
        <section id="creators" className="border-y border-border/60 bg-card/35 py-16 sm:py-20 lg:py-28">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
                <Reveal>
                    <SectionTitle
                        eyebrow={content.nav.creators}
                        title={content.creator.title}
                        description={content.creator.description}
                    />
                    <div className="mt-6 rounded-[2rem] border border-primary/20 bg-primary/8 p-5 sm:mt-8 sm:p-6">
                        <p className="font-display text-base text-primary sm:text-lg">{content.creator.revenueTitle}</p>
                        <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                            {content.creator.revenueItems.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <Coins className="mt-1 size-4 text-primary" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
                <div className="grid gap-5">
                    {content.creator.pillars.map((pillar, index) => {
                        const Icon = icons[index] ?? ArrowUpRight;

                        return (
                            <Reveal key={pillar.title} delay={index * 120}>
                                <article className="rounded-[2rem] border border-border/70 bg-background p-5 shadow-[0_22px_70px_rgba(15,23,42,0.06)] sm:p-6">
                                    <div className="flex flex-col items-start gap-4 sm:flex-row">
                                        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                                            <Icon className="size-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-display text-xl sm:text-2xl">{pillar.title}</h3>
                                            <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                                                {pillar.description}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
