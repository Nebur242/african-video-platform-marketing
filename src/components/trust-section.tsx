"use client";

import { LifeBuoy, ShieldCheck, Workflow } from "lucide-react";
import { useLanguage } from "@/hooks/language-context";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";

export function TrustSection() {
  const { content } = useLanguage();
  const icons = [ShieldCheck, LifeBuoy, Workflow];

  return (
    <section id="trust" className="relative overflow-hidden bg-[linear-gradient(180deg,transparent,rgba(231,76,60,0.05),transparent)] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle
            eyebrow={content.nav.trust}
            title={content.trust.title}
            description={content.trust.description}
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {content.trust.points.map((point, index) => {
            const Icon = icons[index] ?? ShieldCheck;

            return (
              <Reveal key={point.title} delay={index * 100}>
                <article className="rounded-[2rem] border border-primary/16 bg-card/80 p-6 shadow-[0_24px_80px_rgba(231,76,60,0.08)] backdrop-blur">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl">{point.title}</h3>
                  <p className="mt-4 text-base leading-8 text-muted-foreground">
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
