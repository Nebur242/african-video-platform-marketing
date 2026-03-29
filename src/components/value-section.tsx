"use client";

import { Film, LayoutGrid, Radar } from "lucide-react";
import { useLanguage } from "@/hooks/language-context";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";

export function ValueSection() {
    const { content } = useLanguage();
    const icons = [Film, Radar, LayoutGrid];

    return (
        <section id="platform" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <Reveal>
                <SectionTitle
                    eyebrow={content.nav.product}
                    title={content.value.title}
                    description={content.value.description}
                />
            </Reveal>
            <div className="mt-7 grid gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-3">
                {content.value.cards.map((card, index) => {
                    const Icon = icons[index] ?? Film;

                    return (
                        <Reveal key={card.title} delay={index * 100}>
                            <article className="h-full rounded-[1.6rem] border border-border/70 bg-card/70 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:rounded-[2rem] sm:p-7">
                                <div className="flex size-11 items-center justify-center rounded-[1.1rem] bg-primary/12 text-primary sm:size-12 sm:rounded-2xl">
                                    <Icon className="size-4.5 sm:size-5" />
                                </div>
                                <h3 className="mt-4 font-display text-lg leading-snug sm:mt-6 sm:text-2xl">{card.title}</h3>
                                <p className="mt-2.5 text-sm leading-6.5 text-muted-foreground sm:mt-4 sm:text-base sm:leading-8">
                                    {card.description}
                                </p>
                            </article>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
}
