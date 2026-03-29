"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/hooks/language-context";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { cn } from "@/lib/utils";

export function FaqSection() {
    const { content } = useLanguage();
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="border-t border-border/60 bg-card/35 py-14 sm:py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <SectionTitle
                        eyebrow={content.nav.faq}
                        title={content.faq.title}
                        description={content.trust.description}
                    />
                </Reveal>
                <div className="mt-7 grid gap-3 sm:mt-10 sm:gap-4">
                    {content.faq.items.map((item, index) => {
                        const isOpen = index === openIndex;

                        return (
                            <Reveal key={item.question} delay={index * 70}>
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    className="w-full rounded-[1.35rem] border border-border/70 bg-background p-4 text-left shadow-[0_18px_60px_rgba(15,23,42,0.05)] sm:rounded-[1.8rem] sm:p-6"
                                >
                                    <div className="flex items-start justify-between gap-3 sm:gap-4">
                                        <div className="min-w-0">
                                            <h3 className="font-display text-lg leading-snug sm:text-2xl">{item.question}</h3>
                                            <p
                                                className={cn(
                                                    "grid transition-[grid-template-rows,margin] duration-300 ease-out",
                                                    isOpen ? "mt-3 grid-rows-[1fr] sm:mt-4" : "grid-rows-[0fr]",
                                                )}
                                            >
                                                <span className="overflow-hidden pr-1 text-sm leading-6.5 text-muted-foreground sm:text-base sm:leading-8">
                                                    {item.answer}
                                                </span>
                                            </p>
                                        </div>
                                        <ChevronDown
                                            className={cn(
                                                "mt-0.5 size-5 shrink-0 text-primary transition-transform duration-300",
                                                isOpen && "rotate-180",
                                            )}
                                        />
                                    </div>
                                </button>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
