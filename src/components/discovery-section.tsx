"use client";

import { Compass, Heart, Shield } from "lucide-react";
import { useLanguage } from "@/hooks/language-context";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";

export function DiscoverySection() {
    const { content } = useLanguage();
    const icons = [Compass, Heart, Shield];

    return (
        <section id="discovery" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <Reveal>
                <SectionTitle
                    eyebrow={content.nav.discovery}
                    title={content.discovery.title}
                    description={content.discovery.description}
                />
            </Reveal>
            <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3">
                {content.discovery.columns.map((column, index) => {
                    const Icon = icons[index] ?? Compass;

                    return (
                        <Reveal key={column.title} delay={index * 110}>
                            <article className="rounded-[2rem] border border-border/70 bg-card/70 p-5 backdrop-blur sm:p-6">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                                        <Icon className="size-5" />
                                    </div>
                                    <h3 className="font-display text-xl sm:text-2xl">{column.title}</h3>
                                </div>
                                <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground sm:mt-6">
                                    {column.items.map((item) => (
                                        <li key={item} className="rounded-2xl border border-border/70 bg-background/80 px-4 py-3 text-sm leading-6 sm:leading-7">
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
