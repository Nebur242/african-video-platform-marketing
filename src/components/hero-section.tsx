"use client";

import { ArrowRight, Globe, PlayCircle, ShieldCheck, Sparkles, Wallet } from "lucide-react";
import { useLanguage } from "@/hooks/language-context";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function HeroSection() {
  const { content } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-[-18rem] h-[32rem] bg-[radial-gradient(circle_at_top,rgba(231,76,60,0.28),transparent_55%)]" />
      <div className="absolute right-[-8rem] top-32 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,208,160,0.3),transparent_68%)] blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-28 lg:pt-20">
        <Reveal className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
            <Sparkles className="size-4" />
            {content.hero.eyebrow}
          </span>
          <div className="space-y-6">
            <h1 className="max-w-4xl text-balance font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              {content.hero.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {content.hero.description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#platform">
              <Button size="lg">
                {content.hero.primaryCta}
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </a>
            <a href="#creators">
              <Button variant="secondary" size="lg">
                <PlayCircle className="mr-2 size-4" />
                {content.hero.secondaryCta}
              </Button>
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {content.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-border/70 bg-card/70 p-5 backdrop-blur"
              >
                <p className="font-display text-2xl text-foreground">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(16,16,16,0.88),rgba(36,16,14,0.96))] p-6 text-white shadow-[0_30px_120px_rgba(14,14,14,0.45)] dark:border-white/15">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(231,76,60,0.22),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-white/60">
                    {content.hero.audienceLabel}
                  </p>
                  <p className="mt-2 font-display text-2xl">African Video Platform</p>
                </div>
                <div className="rounded-2xl bg-white/8 p-3">
                  <Globe className="size-6 text-[#ffb083]" />
                </div>
              </div>
              <div className="grid gap-4">
                {content.hero.liveCards.map((card, index) => {
                  const icons = [Wallet, Sparkles, ShieldCheck];
                  const Icon = icons[index] ?? Sparkles;

                  return (
                    <div
                      key={card.title}
                      className="group rounded-[1.6rem] border border-white/10 bg-white/6 p-5 transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-display text-xl">{card.title}</p>
                          <p className="mt-2 text-sm leading-7 text-white/72">{card.detail}</p>
                        </div>
                        <div className="rounded-2xl bg-white/8 p-3 text-[#ffcf9e]">
                          <Icon className="size-5" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-[1.15fr_0.85fr] gap-4">
                <div className="rounded-[1.6rem] bg-white px-5 py-6 text-slate-950">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Creator loop</p>
                  <p className="mt-3 font-display text-3xl">Publish. Reach. Earn.</p>
                </div>
                <div className="rounded-[1.6rem] border border-white/10 bg-primary/80 p-5 text-white">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/75">Shorts</p>
                  <p className="mt-3 font-display text-3xl">Always-on discovery</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
