"use client";

import { Compass, Heart, Shield } from "lucide-react";
import { useLanguage } from "@/hooks/language-context";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";

export function DiscoverySection() {
    const { content } = useLanguage();
    const icons = [Compass, Heart, Shield];

    return (
        <section id="discovery" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <Reveal>
                <SectionTitle
                    eyebrow={content.nav.discovery}
                    title={content.discovery.title}
                    description={content.discovery.description}
                />
            </Reveal>
            <div className="mt-7 grid items-stretch gap-3 sm:mt-10 sm:gap-5 lg:auto-rows-fr lg:grid-cols-3">
                {content.discovery.columns.map((column, index) => {
                    const Icon = icons[index] ?? Compass;

                    return (
                        <Reveal key={column.title} delay={index * 110} className="h-full">
                            <article className="flex h-full flex-col rounded-[1.6rem] border border-border/70 bg-card/70 p-4 backdrop-blur sm:rounded-[2rem] sm:p-6">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-[1rem] bg-accent text-accent-foreground sm:size-11 sm:rounded-2xl">
                                        <Icon className="size-5" />
                                    </div>
                                    <h3 className="font-display text-lg leading-snug sm:text-2xl">{column.title}</h3>
                                </div>
                                <ul className="mt-4 space-y-2.5 text-sm leading-6.5 text-muted-foreground sm:mt-6 sm:space-y-3 sm:leading-7">
                                    {column.items.map((item) => (
                                        <li key={item} className="rounded-[1.15rem] border border-border/70 bg-background/80 px-3.5 py-2.5 text-sm leading-6 sm:rounded-2xl sm:px-4 sm:py-3 sm:leading-7">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
}
