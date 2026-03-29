"use client";

import { LifeBuoy, ShieldCheck, Workflow } from "lucide-react";
import { useLanguage } from "@/hooks/language-context";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";

export function TrustSection() {
    const { content } = useLanguage();
    const icons = [ShieldCheck, LifeBuoy, Workflow];

    return (
        <section id="trust" className="relative overflow-hidden bg-[linear-gradient(180deg,transparent,rgba(231,76,60,0.05),transparent)] py-14 sm:py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <SectionTitle
                        eyebrow={content.nav.trust}
                        title={content.trust.title}
                        description={content.trust.description}
                    />
                </Reveal>
                <div className="mt-7 grid gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-3">
                    {content.trust.points.map((point, index) => {
                        const Icon = icons[index] ?? ShieldCheck;

                        return (
                            <Reveal key={point.title} delay={index * 100}>
                                <article className="rounded-[1.6rem] border border-primary/16 bg-card/80 p-4 shadow-[0_24px_80px_rgba(231,76,60,0.08)] backdrop-blur sm:rounded-[2rem] sm:p-6">
                                    <div className="flex size-11 items-center justify-center rounded-[1.1rem] bg-primary text-primary-foreground sm:size-12 sm:rounded-2xl">
                                        <Icon className="size-5" />
                                    </div>
                                    <h3 className="mt-4 font-display text-lg leading-snug sm:mt-6 sm:text-2xl">{point.title}</h3>
                                    <p className="mt-2.5 text-sm leading-6.5 text-muted-foreground sm:mt-4 sm:text-base sm:leading-8">
                                        {point.description}
                                    </p>
                                </article>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
