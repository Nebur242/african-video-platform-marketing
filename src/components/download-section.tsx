"use client";

import { ArrowUpRight, Smartphone } from "lucide-react";
import { useLanguage } from "@/hooks/language-context";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function DownloadSection() {
    const { content } = useLanguage();

    return (
        <section id="download" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <Reveal>
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,var(--primary),var(--primary-strong))] p-5 text-white shadow-[0_28px_120px_rgba(231,76,60,0.34)] sm:rounded-[2.4rem] sm:p-10 lg:p-12">
                    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
                        <div className="min-w-0">
                            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-white/85 sm:text-sm">
                                <Smartphone className="size-4" />
                                <span className="truncate">{content.nav.download}</span>
                            </div>
                            <h2 className="mt-5 max-w-3xl font-display text-3xl leading-tight sm:mt-6 sm:text-5xl">
                                {content.download.title}
                            </h2>
                            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:mt-5 sm:text-lg sm:leading-8">
                                {content.download.description}
                            </p>
                            <p className="mt-4 text-sm leading-7 text-white/72 sm:mt-5">{content.download.footnote}</p>
                        </div>
                        <div className="grid gap-4">
                            {content.download.stores.map((store) => (
                                <a
                                    key={store.name}
                                    href={store.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-[1.5rem] border border-white/20 bg-white/10 p-4 backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:bg-white/14 sm:rounded-[1.8rem] sm:p-5"
                                >
                                    <div className="flex items-start justify-between gap-3 sm:gap-4">
                                        <div className="min-w-0">
                                            <p className="font-display text-xl text-white sm:text-2xl">{store.name}</p>
                                            <p className="mt-2 text-sm leading-6 text-white/76 sm:leading-7">{store.note}</p>
                                        </div>
                                        <div className="rounded-full bg-white/14 p-3">
                                            <ArrowUpRight className="size-5" />
                                        </div>
                                    </div>
                                </a>
                            ))}
                            <div>
                                <Button variant="secondary" size="lg" className="w-full border-white/20 bg-white/10 text-white hover:bg-white/14 hover:text-white sm:min-h-12">
                                    Placeholder links are live and ready to swap
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
