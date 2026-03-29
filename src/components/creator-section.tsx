"use client";

import { ArrowUpRight, Coins, HandCoins, Users } from "lucide-react";
import { useLanguage } from "@/hooks/language-context";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";

export function CreatorSection() {
    const { content } = useLanguage();
    const icons = [ArrowUpRight, Users, HandCoins];

    return (
        <section id="creators" className="border-y border-border/60 bg-card/35 py-14 sm:py-20 lg:py-28">
            <div className="mx-auto grid max-w-7xl gap-7 px-4 sm:px-6 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
                <Reveal>
                    <SectionTitle
                        eyebrow={content.nav.creators}
                        title={content.creator.title}
                        description={content.creator.description}
                    />
                    <div className="mt-5 rounded-[1.6rem] border border-primary/20 bg-primary/8 p-4 sm:mt-8 sm:rounded-[2rem] sm:p-6">
                        <p className="font-display text-base text-primary sm:text-lg">{content.creator.revenueTitle}</p>
                        <ul className="mt-4 space-y-2.5 text-sm leading-6.5 text-muted-foreground sm:mt-5 sm:space-y-3 sm:leading-7">
                            {content.creator.revenueItems.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <Coins className="mt-1 size-4 text-primary" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
                <div className="grid gap-4 sm:gap-5">
                    {content.creator.pillars.map((pillar, index) => {
                        const Icon = icons[index] ?? ArrowUpRight;

                        return (
                            <Reveal key={pillar.title} delay={index * 120}>
                                <article className="rounded-[1.6rem] border border-border/70 bg-background p-4 shadow-[0_22px_70px_rgba(15,23,42,0.06)] sm:rounded-[2rem] sm:p-6">
                                    <div className="flex flex-col items-start gap-3.5 sm:flex-row sm:gap-4">
                                        <div className="flex size-11 shrink-0 items-center justify-center rounded-[1.1rem] bg-primary text-primary-foreground sm:size-12 sm:rounded-2xl">
                                            <Icon className="size-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-display text-lg leading-snug sm:text-2xl">{pillar.title}</h3>
                                            <p className="mt-2.5 text-sm leading-6.5 text-muted-foreground sm:mt-3 sm:text-base sm:leading-8">
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
