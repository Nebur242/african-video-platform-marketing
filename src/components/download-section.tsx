"use client";

import { ArrowUpRight, Smartphone } from "lucide-react";
import { useLanguage } from "@/hooks/language-context";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function DownloadSection() {
  const { content } = useLanguage();

  return (
    <section id="download" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <Reveal>
        <div className="overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,var(--primary),var(--primary-strong))] p-8 text-white shadow-[0_28px_120px_rgba(231,76,60,0.34)] sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/85">
                <Smartphone className="size-4" />
                {content.nav.download}
              </div>
              <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
                {content.download.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                {content.download.description}
              </p>
              <p className="mt-5 text-sm leading-7 text-white/72">{content.download.footnote}</p>
            </div>
            <div className="grid gap-4">
              {content.download.stores.map((store) => (
                <a
                  key={store.name}
                  href={store.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.8rem] border border-white/20 bg-white/10 p-5 backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:bg-white/14"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-display text-2xl text-white">{store.name}</p>
                      <p className="mt-2 text-sm leading-7 text-white/76">{store.note}</p>
                    </div>
                    <div className="rounded-full bg-white/14 p-3">
                      <ArrowUpRight className="size-5" />
                    </div>
                  </div>
                </a>
              ))}
              <div>
                <Button variant="secondary" size="lg" className="w-full border-white/20 bg-white/10 text-white hover:bg-white/14 hover:text-white">
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
