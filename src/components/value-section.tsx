"use client";

import { Film, LayoutGrid, Radar } from "lucide-react";
import { useLanguage } from "@/hooks/language-context";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";

export function ValueSection() {
    const { content } = useLanguage();
    const icons = [Film, Radar, LayoutGrid];

    return (
        <section id="platform" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <Reveal>
                <SectionTitle
                    eyebrow={content.nav.product}
                    title={content.value.title}
                    description={content.value.description}
                />
            </Reveal>
            <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3">
                {content.value.cards.map((card, index) => {
                    const Icon = icons[index] ?? Film;

                    return (
                        <Reveal key={card.title} delay={index * 100}>
                            <article className="h-full rounded-[2rem] border border-border/70 bg-card/70 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-7">
                                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                                    <Icon className="size-5" />
                                </div>
                                <h3 className="mt-5 font-display text-xl sm:mt-6 sm:text-2xl">{card.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:mt-4 sm:text-base sm:leading-8">
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
