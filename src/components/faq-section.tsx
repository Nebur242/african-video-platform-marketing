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
        <section id="faq" className="border-t border-border/60 bg-card/35 py-16 sm:py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <SectionTitle
                        eyebrow={content.nav.faq}
                        title={content.faq.title}
                        description={content.trust.description}
                    />
                </Reveal>
                <div className="mt-8 grid gap-4 sm:mt-10">
                    {content.faq.items.map((item, index) => {
                        const isOpen = index === openIndex;

                        return (
                            <Reveal key={item.question} delay={index * 70}>
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    className="w-full rounded-[1.5rem] border border-border/70 bg-background p-4 text-left shadow-[0_18px_60px_rgba(15,23,42,0.05)] sm:rounded-[1.8rem] sm:p-6"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="font-display text-xl sm:text-2xl">{item.question}</h3>
                                            <p
                                                className={cn(
                                                    "grid transition-[grid-template-rows,margin] duration-300 ease-out",
                                                    isOpen ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]",
                                                )}
                                            >
                                                <span className="overflow-hidden text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                                                    {item.answer}
                                                </span>
                                            </p>
                                        </div>
                                        <ChevronDown
                                            className={cn(
                                                "mt-1 size-5 shrink-0 text-primary transition-transform duration-300",
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
