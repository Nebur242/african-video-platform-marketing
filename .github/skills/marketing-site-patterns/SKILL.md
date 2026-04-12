---
name: marketing-site-patterns
description: Follow the existing Next.js marketing site structure. Use this when editing landing page sections, bilingual content, metadata, theme behavior, CTA links, or shared marketing components in african-video-platform-marketing.
license: MIT
---

# Marketing site patterns

Apply this skill only to the marketing repository.

## Primary goal

Match the current marketing site structure and content model instead of introducing a different Next.js or landing-page pattern.

## Existing structure

The marketing site separates concerns across:

- `src/app` for App Router pages, layouts, and metadata
- `src/components` for reusable landing page sections and UI
- `src/hooks` for shared client behavior
- `src/lib` for helpers and site-level utilities
- `public` for static assets

## Rules to follow

1. Keep App Router files focused on composition, routing, and metadata.
2. Reuse shared sections and UI components before creating page-local duplicates.
3. Preserve the bilingual content model and keep copy changes consistent across languages when the same message appears in both.
4. Keep theme behavior and hydration-sensitive client logic stable.
5. Preserve the current visual direction instead of introducing a mismatched design system.

## High-impact areas

Be extra careful in:

- metadata and SEO-facing content
- hero, pricing, trust, FAQ, and download sections
- app store or external CTA links
- language toggle behavior
- theme switching behavior

For these areas, preserve conversion intent, routing stability, and production build safety.

## Change checklist

When making a marketing-site change:

1. Find the route, section, or component that currently owns the behavior.
2. Keep page-level metadata and copy ownership clear.
3. Update both language variants when the change affects mirrored content.
4. Check whether CTA links, analytics, or social-preview text need follow-up.
5. Run the smallest useful validation before finishing.

## Validation commands

Prefer the smallest useful validation set:

- `npm run lint`
- `npm run type-check`
- `npm run build`

## Useful references

- `README.md`
- `.github/copilot-instructions.md`
- `src/app`
- `src/components`
